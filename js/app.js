/* =====================================================
   NutriTrack — Main Application Logic
   Full calorie & macro tracking system
   ===================================================== */

import { FOOD_DATABASE } from './foodDatabase.js';
import {
    getFirebaseEnvTemplate,
    initAuthClient,
    isFirebaseConfigured,
    loginWithEmail,
    loginWithGoogle,
    logoutCurrentUser,
    registerWithEmail,
    subscribeToAuthChanges
} from './auth.js';

class NutriTrackApp {
    constructor() {
        this.currentDate = new Date();
        this.currentMeal = null;
        this.selectedFood = null;
        this.createMealItems = [];
        this.externalQueryCache = new Map();
        this.searchRequestToken = 0;
        this.modalSearchRequestToken = 0;
        this.createMealSearchRequestToken = 0;
        this.scannerStream = null;
        this.scanInterval = null;
        this.lastScannedBarcode = null;
        this.lastScanAt = 0;
        this.authMode = 'login';
        this.currentUser = null;
        this.authConfigured = isFirebaseConfigured();
        this.authUnsubscribe = null;
        this.init();
    }

    // ==================== INITIALIZATION ====================
    init() {
        this.loadSettings();
        this.loadGoals();
        this.updateDateDisplay();
        this.bindEvents();
        this.renderDashboard();
        this.renderDiary();
        this.renderWaterGlasses();
        this.renderWeeklyChart();
        this.renderSearchResults('');
        this.calculateStreak();
        this.renderProgress();
        this.renderSavedMeals();
        this.loadProfileSettings();
        this.initAuth();
    }

    initAuth() {
        this.bindAuthEvents();
        this.applyAuthMode();
        this.renderFirebaseHint();

        if (!this.authConfigured) {
            this.toggleAppShell(false);
            this.setAuthAlert('Add your Firebase web app config to enable email sign-in and Google authentication.', 'error');
            return;
        }

        initAuthClient();
        this.authUnsubscribe = subscribeToAuthChanges((user) => {
            this.currentUser = user;
            this.handleAuthStateChanged(user);
        });
    }

    bindAuthEvents() {
        document.getElementById('authForm')?.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.submitAuthForm();
        });

        document.getElementById('authSwitchBtn')?.addEventListener('click', () => {
            this.authMode = this.authMode === 'login' ? 'signup' : 'login';
            this.applyAuthMode();
            this.clearAuthAlert();
        });

        document.getElementById('googleAuthBtn')?.addEventListener('click', async () => {
            await this.submitGoogleAuth();
        });

        document.getElementById('logoutBtn')?.addEventListener('click', async () => {
            await this.logout();
        });
    }

    applyAuthMode() {
        const isSignup = this.authMode === 'signup';
        const title = document.getElementById('authTitle');
        const subtitle = document.getElementById('authSubtitle');
        const submitBtn = document.getElementById('authSubmitBtn');
        const switchLabel = document.getElementById('authSwitchLabel');
        const switchBtn = document.getElementById('authSwitchBtn');
        const passwordInput = document.getElementById('authPassword');

        if (title) title.textContent = isSignup ? 'Create your account' : 'Welcome back';
        if (subtitle) subtitle.textContent = isSignup
            ? 'Sign up to save your meals, goals, and tracked days.'
            : 'Sign in to continue to your food diary and saved meals.';
        if (submitBtn) submitBtn.textContent = isSignup ? 'Create Account' : 'Sign In';
        if (switchLabel) switchLabel.textContent = isSignup ? 'Already have an account?' : 'New here?';
        if (switchBtn) switchBtn.textContent = isSignup ? 'Sign in instead' : 'Create an account';
        if (passwordInput) passwordInput.autocomplete = isSignup ? 'new-password' : 'current-password';
    }

    renderFirebaseHint() {
        const hint = document.getElementById('firebaseConfigHint');
        if (!hint) return;

        hint.hidden = this.authConfigured;

        const pre = hint.querySelector('.firebase-env-block');
        if (pre) pre.textContent = getFirebaseEnvTemplate();
    }

    toggleAppShell(isSignedIn) {
        document.getElementById('authShell')?.toggleAttribute('hidden', isSignedIn);
        document.getElementById('appShell')?.classList.toggle('app-shell-hidden', !isSignedIn);
    }

    handleAuthStateChanged(user) {
        this.toggleAppShell(Boolean(user));
        this.setAuthBusy(false);

        if (!user) {
            this.updateUserChip(null);
            return;
        }

        this.updateUserChip(user);
        this.hydrateSettingsFromUser(user);
        this.clearAuthAlert();
    }

    updateUserChip(user) {
        const nameEl = document.getElementById('userChipName');
        const emailEl = document.getElementById('userChipEmail');
        const avatarEl = document.getElementById('userChipAvatar');

        if (!user) {
            if (nameEl) nameEl.textContent = 'Guest';
            if (emailEl) emailEl.textContent = 'Sign in required';
            if (avatarEl) avatarEl.textContent = 'NT';
            return;
        }

        const fallbackName = user.email ? user.email.split('@')[0] : 'NutriTrack User';
        const displayName = user.displayName || fallbackName;
        const initials = displayName
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase() || '')
            .join('') || 'NT';

        if (nameEl) nameEl.textContent = displayName;
        if (emailEl) emailEl.textContent = user.email || 'Signed in';
        if (avatarEl) avatarEl.textContent = initials;
    }

    hydrateSettingsFromUser(user) {
        const settings = this.getSettings();
        const nextName = settings.name || user.displayName || user.email?.split('@')[0] || '';

        if (nextName !== settings.name) {
            settings.name = nextName;
            this.saveSettings(settings);
        }

        this.loadProfileSettings();
    }

    setAuthBusy(isBusy, label) {
        const submitBtn = document.getElementById('authSubmitBtn');
        const googleBtn = document.getElementById('googleAuthBtn');
        const switchBtn = document.getElementById('authSwitchBtn');

        if (submitBtn) {
            submitBtn.disabled = isBusy || !this.authConfigured;
            submitBtn.textContent = isBusy ? (label || 'Please wait...') : (this.authMode === 'signup' ? 'Create Account' : 'Sign In');
        }

        if (googleBtn) googleBtn.disabled = isBusy || !this.authConfigured;
        if (switchBtn) switchBtn.disabled = isBusy;
    }

    setAuthAlert(message, type = 'error') {
        const alert = document.getElementById('authAlert');
        if (!alert) return;
        alert.hidden = !message;
        alert.className = `auth-alert ${type}`;
        alert.textContent = message;
    }

    clearAuthAlert() {
        this.setAuthAlert('', 'success');
    }

    async submitAuthForm() {
        if (!this.authConfigured) return;

        const email = (document.getElementById('authEmail')?.value || '').trim();
        const password = document.getElementById('authPassword')?.value || '';

        if (!email || !password) {
            this.setAuthAlert('Enter both email and password to continue.', 'error');
            return;
        }

        if (this.authMode === 'signup' && password.length < 6) {
            this.setAuthAlert('Use at least 6 characters for the password.', 'error');
            return;
        }

        this.setAuthBusy(true, this.authMode === 'signup' ? 'Creating account...' : 'Signing in...');
        this.clearAuthAlert();

        try {
            if (this.authMode === 'signup') {
                await registerWithEmail(email, password);
                this.setAuthAlert('Account created. You are now signed in.', 'success');
            } else {
                await loginWithEmail(email, password);
            }
        } catch (error) {
            this.setAuthAlert(this.getAuthErrorMessage(error), 'error');
        } finally {
            this.setAuthBusy(false);
        }
    }

    async submitGoogleAuth() {
        if (!this.authConfigured) return;

        this.setAuthBusy(true, 'Opening Google...');
        this.clearAuthAlert();

        try {
            await loginWithGoogle();
        } catch (error) {
            this.setAuthAlert(this.getAuthErrorMessage(error), 'error');
        } finally {
            this.setAuthBusy(false);
        }
    }

    async logout() {
        if (!this.authConfigured) return;

        try {
            await logoutCurrentUser();
        } catch (error) {
            this.showToast(this.getAuthErrorMessage(error), 'error');
        }
    }

    getAuthErrorMessage(error) {
        const code = error?.code || '';
        const map = {
            'auth/email-already-in-use': 'That email is already registered. Try signing in instead.',
            'auth/invalid-email': 'That email address is not valid.',
            'auth/invalid-credential': 'Incorrect email or password.',
            'auth/user-not-found': 'No account was found for that email.',
            'auth/wrong-password': 'Incorrect email or password.',
            'auth/popup-closed-by-user': 'Google sign-in was cancelled before completion.',
            'auth/unauthorized-domain': 'This domain is not authorized in your Firebase console yet.',
            'auth/too-many-requests': 'Too many attempts. Please wait a bit and try again.'
        };

        return map[code] || error?.message || 'Authentication failed. Please try again.';
    }

    // ==================== DATA PERSISTENCE ====================
    getDateKey(date) {
        const d = date || this.currentDate;
        return d.toISOString().split('T')[0];
    }

    getDayData(dateKey) {
        const key = dateKey || this.getDateKey();
        const data = localStorage.getItem(`nutritrack_${key}`);
        return data ? JSON.parse(data) : {
            meals: { breakfast: [], lunch: [], dinner: [], snacks: [] },
            water: 0,
            exercise: 0
        };
    }

    saveDayData(data, dateKey) {
        const key = dateKey || this.getDateKey();
        localStorage.setItem(`nutritrack_${key}`, JSON.stringify(data));
    }

    getGoals() {
        const defaults = {
            calories: 2000, protein: 150, carbs: 250, fat: 65,
            water: 8, fiber: 25, sugar: 50, sodium: 2300, cholesterol: 300
        };
        const saved = localStorage.getItem('nutritrack_goals');
        return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    }

    saveGoals(goals) {
        localStorage.setItem('nutritrack_goals', JSON.stringify(goals));
    }

    getSettings() {
        const defaults = { name: '', weight: '', height: '', age: '', activity: '1.55', theme: 'light' };
        const saved = localStorage.getItem('nutritrack_settings');
        return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    }

    saveSettings(settings) {
        localStorage.setItem('nutritrack_settings', JSON.stringify(settings));
    }

    getSavedMeals() {
        const data = localStorage.getItem('nutritrack_saved_meals');
        return data ? JSON.parse(data) : [];
    }

    saveSavedMeals(meals) {
        localStorage.setItem('nutritrack_saved_meals', JSON.stringify(meals));
    }

    getExternalFoods() {
        const data = localStorage.getItem('nutritrack_external_foods');
        return data ? JSON.parse(data) : [];
    }

    saveExternalFoods(foods) {
        localStorage.setItem('nutritrack_external_foods', JSON.stringify(foods));
    }

    upsertExternalFood(food) {
        if (!food?.id) return null;

        const foods = this.getExternalFoods();
        const key = String(food.id);
        const index = foods.findIndex(item => String(item.id) === key);

        if (index >= 0) {
            foods[index] = { ...foods[index], ...food };
        } else {
            foods.unshift(food);
        }

        this.saveExternalFoods(foods);
        return food;
    }

    getAllFoods() {
        const map = new Map();
        [...this.getExternalFoods(), ...FOOD_DATABASE].forEach(food => {
            const key = String(food.id);
            if (!map.has(key)) map.set(key, food);
        });
        return Array.from(map.values());
    }

    getFoodById(foodId) {
        const key = String(foodId);
        return this.getAllFoods().find(food => String(food.id) === key) || null;
    }

    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    getFoodActionArg(foodId) {
        return JSON.stringify(String(foodId));
    }

    getFoodEmoji(category) {
        const emojiMap = {
            protein: '🍗',
            grains: '🌾',
            fruits: '🍎',
            vegetables: '🥦',
            dairy: '🥛',
            beverages: '🥤',
            snacks: '🍪',
            'fast-food': '🍔',
            indian: '🍛',
            'indian-drinks': '🧋',
            'indian-snacks': '🍪'
        };
        return emojiMap[category] || '📦';
    }

    inferCategoryFromProduct(product) {
        const haystack = [
            product.categories,
            ...(product.categories_tags || []),
            product.product_name,
            product.product_name_en,
            product.brands
        ].filter(Boolean).join(' ').toLowerCase();

        if (/(drink|beverage|juice|soda|cola|lassi|chaas|tea|coffee|sharbat|milkshake)/.test(haystack)) {
            return /(lassi|chaas|shikanji|jaljeera|aam panna|sharbat|rooh afza|frooti|maaza|slice|thums up|limca|paper boat|amul|real|tropicana|minute maid)/.test(haystack)
                ? 'indian-drinks'
                : 'beverages';
        }

        if (/(biscuit|cookie|chips|namkeen|snack|kurkure|bhujia|sev|cracker|makhana|chikki)/.test(haystack)) {
            return /(namkeen|kurkure|bhujia|sev|makhana|chikki|parle|britannia|sunfeast|haldiram|bikaji|balaji)/.test(haystack)
                ? 'indian-snacks'
                : 'snacks';
        }

        if (/(curry|dal|paneer|biryani|roti|naan|paratha|masala|indian|poha|upma|idli|dosa)/.test(haystack)) {
            return 'indian';
        }

        return 'snacks';
    }

    parseOpenFoodFactsProduct(product, fallbackId) {
        const nutr = product.nutriments || {};
        const calories = Number(
            nutr['energy-kcal_serving'] ??
            nutr['energy-kcal_100g'] ??
            nutr['energy-kcal'] ??
            0
        );
        const protein = Number(nutr.proteins_serving ?? nutr.proteins_100g ?? nutr.proteins ?? 0);
        const carbs = Number(nutr.carbohydrates_serving ?? nutr.carbohydrates_100g ?? nutr.carbohydrates ?? 0);
        const fat = Number(nutr.fat_serving ?? nutr.fat_100g ?? nutr.fat ?? 0);
        const fiber = Number(nutr.fiber_serving ?? nutr.fiber_100g ?? nutr.fiber ?? 0);
        const sugar = Number(nutr.sugars_serving ?? nutr.sugars_100g ?? nutr.sugars ?? 0);
        const sodiumRaw = Number(nutr.sodium_serving ?? nutr.sodium_100g ?? nutr.sodium ?? 0);
        const cholRaw = Number(nutr.cholesterol_serving ?? nutr.cholesterol_100g ?? nutr.cholesterol ?? 0);

        if (!calories && !protein && !carbs && !fat) return null;

        const category = this.inferCategoryFromProduct(product);
        const barcode = product.code || fallbackId || '';

        return {
            id: barcode ? `ext_${barcode}` : `ext_${fallbackId || Date.now()}`,
            name: product.product_name_en || product.product_name || `Food ${fallbackId || ''}`.trim(),
            brand: product.brands || 'Open Food Facts',
            category,
            emoji: this.getFoodEmoji(category),
            serving: product.serving_size || '1 serving',
            calories: Math.round(calories),
            protein: Math.round(protein * 10) / 10,
            carbs: Math.round(carbs * 10) / 10,
            fat: Math.round(fat * 10) / 10,
            fiber: Math.round(fiber * 10) / 10,
            sugar: Math.round(sugar * 10) / 10,
            sodium: Math.round((sodiumRaw > 0 ? sodiumRaw * 1000 : 0)),
            cholesterol: Math.round((cholRaw > 0 ? cholRaw * 1000 : 0)),
            barcode,
            source: 'api'
        };
    }

    filterFoods(foods, query = '', category = 'all') {
        let results = foods;

        if (category !== 'all') {
            results = results.filter(food => food.category === category);
        }

        const normalizedQuery = query.trim().toLowerCase();
        if (!normalizedQuery) return results;

        return results.filter(food => {
            const haystack = [food.name, food.brand, food.category, food.barcode]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();
            return haystack.includes(normalizedQuery);
        });
    }

    async fetchExternalFoodsByQuery(query, category = 'all') {
        const normalizedQuery = query.trim().toLowerCase();
        if (normalizedQuery.length < 2) return [];

        const cacheKey = `${normalizedQuery}::${category}`;
        if (this.externalQueryCache.has(cacheKey)) {
            return this.externalQueryCache.get(cacheKey);
        }

        const endpoints = [
            `https://in.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=20&fields=code,product_name,product_name_en,brands,serving_size,categories,categories_tags,nutriments`,
            `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=20&fields=code,product_name,product_name_en,brands,serving_size,categories,categories_tags,nutriments`
        ];

        const collected = [];
        const seen = new Set();

        for (const url of endpoints) {
            try {
                const res = await fetch(url);
                if (!res.ok) continue;
                const data = await res.json();
                for (const product of data.products || []) {
                    const parsed = this.parseOpenFoodFactsProduct(product, product.code);
                    if (!parsed) continue;
                    if (category !== 'all' && parsed.category !== category) continue;
                    const key = String(parsed.id);
                    if (seen.has(key)) continue;
                    seen.add(key);
                    this.upsertExternalFood(parsed);
                    collected.push(parsed);
                }
            } catch {
                // ignore endpoint failures
            }
        }

        this.externalQueryCache.set(cacheKey, collected);
        return collected;
    }

    async searchFoods(query = '', category = 'all', limit = 50) {
        const normalizedQuery = query.trim();
        let foods = this.filterFoods(this.getAllFoods(), normalizedQuery, category);

        if (normalizedQuery) {
            const externalFoods = await this.fetchExternalFoodsByQuery(normalizedQuery, category);
            const merged = new Map();
            [...externalFoods, ...foods].forEach(food => {
                const key = String(food.id);
                if (!merged.has(key)) merged.set(key, food);
            });
            foods = this.filterFoods(Array.from(merged.values()), normalizedQuery, category);
        }

        return foods.slice(0, limit);
    }

    // ==================== EVENT BINDING ====================
    bindEvents() {
        // Sidebar navigation
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => this.navigateTo(item.dataset.page));
        });

        // Date navigation
        document.getElementById('prevDay').addEventListener('click', () => this.changeDate(-1));
        document.getElementById('nextDay').addEventListener('click', () => this.changeDate(1));

        // Hamburger
        document.getElementById('hamburgerBtn').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Quick Add
        document.getElementById('quickAddBtn').addEventListener('click', () => this.openQuickAdd());

        // Barcode scanner
        document.getElementById('openBarcodeBtn')?.addEventListener('click', () => this.openBarcodeModal());
        document.getElementById('barcodeLookupBtn')?.addEventListener('click', () => {
            const barcode = (document.getElementById('manualBarcodeInput')?.value || '').trim();
            if (barcode) this.handleDetectedBarcode(barcode);
        });
        document.getElementById('manualBarcodeInput')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const barcode = (e.target.value || '').trim();
                if (barcode) this.handleDetectedBarcode(barcode);
            }
        });

        // Food Search (main page)
        const searchInput = document.getElementById('foodSearchInput');
        searchInput.addEventListener('input', (e) => {
            this.renderSearchResults(e.target.value);
            document.getElementById('searchClear').classList.toggle('visible', e.target.value.length > 0);
        });
        document.getElementById('searchClear').addEventListener('click', () => {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        });

        // Filter chips
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.renderSearchResults(searchInput.value, chip.dataset.cat);
            });
        });

        // Modal food search
        document.getElementById('modalFoodSearch').addEventListener('input', (e) => {
            this.renderModalFoodResults(e.target.value);
        });

        // Serving input change
        document.getElementById('servingInput').addEventListener('input', () => {
            this.updateNutritionPreview();
        });

        // Goals form
        document.getElementById('goalsForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveGoalsFromForm();
        });

        // Create Meal search
        document.getElementById('createMealSearch').addEventListener('input', (e) => {
            this.renderCreateMealResults(e.target.value);
        });

        // Close sidebar on outside click (mobile)
        document.getElementById('mainContent').addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('open');
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMealModal();
                this.closeQuickAdd();
                this.closeCreateMealModal();
                this.closeFoodDetail();
                this.closeBarcodeModal();
            }
        });
    }

    // ==================== NAVIGATION ====================
    navigateTo(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
        document.getElementById(`page-${page}`).classList.add('active');
        document.querySelector(`[data-page="${page}"]`).classList.add('active');
        document.getElementById('sidebar').classList.remove('open');

        // Refresh content on navigation
        if (page === 'dashboard') this.renderDashboard();
        if (page === 'diary') this.renderDiary();
        if (page === 'progress') this.renderProgress();
        if (page === 'meals') this.renderSavedMeals();
    }

    changeDate(delta) {
        this.currentDate.setDate(this.currentDate.getDate() + delta);
        this.updateDateDisplay();
        this.renderDashboard();
        this.renderDiary();
        this.renderWeeklyChart();
    }

    updateDateDisplay() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const dateStr = this.currentDate.toDateString() === today.toDateString()
            ? `Today, ${this.currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`
            : this.currentDate.toLocaleDateString('en-US', options);
        document.getElementById('currentDate').textContent = dateStr;
    }

    // ==================== DASHBOARD RENDERING ====================
    renderDashboard() {
        const data = this.getDayData();
        const goals = this.getGoals();
        const totals = this.calculateTotals(data);

        // Calories
        const remaining = Math.max(0, goals.calories - totals.calories + data.exercise);
        document.getElementById('calRemaining').textContent = remaining;
        document.getElementById('calGoal').textContent = goals.calories;
        document.getElementById('calFood').textContent = totals.calories;
        document.getElementById('calExercise').textContent = data.exercise;

        // Calorie Ring
        const calPercent = Math.min(1, totals.calories / goals.calories);
        const circumference = 2 * Math.PI * 85;
        const offset = circumference - (calPercent * circumference);
        const ring = document.getElementById('calorieRing');
        ring.style.strokeDashoffset = offset;
        ring.style.stroke = calPercent > 1 ? '#d63031' : calPercent > 0.8 ? '#fdcb6e' : '#00b894';

        // Color the remaining text
        const calRemEl = document.getElementById('calRemaining');
        if (totals.calories > goals.calories) {
            calRemEl.style.color = '#d63031';
            calRemEl.textContent = Math.abs(goals.calories - totals.calories + data.exercise);
            document.querySelector('.cal-label').textContent = 'Over';
        } else {
            calRemEl.style.color = '#00b894';
            document.querySelector('.cal-label').textContent = 'Remaining';
        }

        // Macros
        this.updateMacroRing('protein', totals.protein, goals.protein);
        this.updateMacroRing('carbs', totals.carbs, goals.carbs);
        this.updateMacroRing('fat', totals.fat, goals.fat);

        // Macro Bars
        document.getElementById('proteinBar').style.width = `${Math.min(100, (totals.protein / goals.protein) * 100)}%`;
        document.getElementById('carbsBar').style.width = `${Math.min(100, (totals.carbs / goals.carbs) * 100)}%`;
        document.getElementById('fatBar').style.width = `${Math.min(100, (totals.fat / goals.fat) * 100)}%`;

        // Meal Summary
        ['breakfast', 'lunch', 'dinner', 'snacks'].forEach(meal => {
            const mealCals = data.meals[meal].reduce((sum, f) => sum + f.calories, 0);
            document.getElementById(`${meal}Cals`).textContent = `${mealCals} cal`;
        });

        // Water
        document.getElementById('waterCurrent').textContent = data.water;
        document.getElementById('waterCountMini').textContent = data.water;
        this.renderWaterGlasses();

        // Micronutrients
        this.updateMicroBar('fiber', totals.fiber, goals.fiber);
        this.updateMicroBar('sugar', totals.sugar, goals.sugar);
        this.updateMicroBar('sodium', totals.sodium, goals.sodium);
        this.updateMicroBar('chol', totals.cholesterol, goals.cholesterol);

        document.getElementById('fiberVal').textContent = `${Math.round(totals.fiber)} / ${goals.fiber}g`;
        document.getElementById('sugarVal').textContent = `${Math.round(totals.sugar)} / ${goals.sugar}g`;
        document.getElementById('sodiumVal').textContent = `${Math.round(totals.sodium)} / ${goals.sodium}mg`;
        document.getElementById('cholVal').textContent = `${Math.round(totals.cholesterol)} / ${goals.cholesterol}mg`;
    }

    updateMacroRing(macro, current, goal) {
        const percent = Math.min(1, current / goal);
        const circumference = 2 * Math.PI * 32;
        const offset = circumference - (percent * circumference);
        document.getElementById(`${macro}Ring`).style.strokeDashoffset = offset;
        document.getElementById(`${macro}Percent`).textContent = `${Math.round(percent * 100)}%`;
        document.getElementById(`${macro}Current`).textContent = Math.round(current);
        document.getElementById(`${macro}Goal`).textContent = goal;
    }

    updateMicroBar(id, current, goal) {
        const percent = Math.min(100, (current / goal) * 100);
        document.getElementById(`${id}Bar`).style.width = `${percent}%`;
    }

    calculateTotals(data) {
        let totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 0, cholesterol: 0 };
        Object.values(data.meals).forEach(mealFoods => {
            mealFoods.forEach(food => {
                totals.calories += food.calories || 0;
                totals.protein += food.protein || 0;
                totals.carbs += food.carbs || 0;
                totals.fat += food.fat || 0;
                totals.fiber += food.fiber || 0;
                totals.sugar += food.sugar || 0;
                totals.sodium += food.sodium || 0;
                totals.cholesterol += food.cholesterol || 0;
            });
        });
        return totals;
    }

    // ==================== WATER TRACKING ====================
    renderWaterGlasses() {
        const data = this.getDayData();
        const goals = this.getGoals();
        const container = document.getElementById('waterGlasses');
        container.innerHTML = '';
        for (let i = 0; i < goals.water; i++) {
            const glass = document.createElement('div');
            glass.className = `water-glass ${i < data.water ? 'filled' : ''}`;
            glass.addEventListener('click', () => {
                const currentData = this.getDayData();
                currentData.water = i + 1;
                this.saveDayData(currentData);
                this.renderDashboard();
            });
            container.appendChild(glass);
        }
    }

    adjustWater(delta) {
        const data = this.getDayData();
        const goals = this.getGoals();
        data.water = Math.max(0, Math.min(goals.water, data.water + delta));
        this.saveDayData(data);
        this.renderDashboard();
        this.showToast(delta > 0 ? '💧 Water logged!' : '💧 Water removed', 'success');
    }

    // ==================== FOOD DIARY ====================
    renderDiary() {
        const data = this.getDayData();
        const totals = this.calculateTotals(data);

        ['breakfast', 'lunch', 'dinner', 'snacks'].forEach(meal => {
            const list = document.getElementById(`${meal}-list`);
            const mealFoods = data.meals[meal];
            const mealCal = mealFoods.reduce((sum, f) => sum + f.calories, 0);
            document.getElementById(`diary-${meal}-cal`).textContent = mealCal;

            if (mealFoods.length === 0) {
                list.innerHTML = '<div class="diary-food-empty">No foods logged yet. Click "+ Add Food" to get started.</div>';
            } else {
                list.innerHTML = mealFoods.map((food, index) => `
                    <div class="diary-food-item">
                        <div class="dfi-info">
                            <span class="dfi-name">${food.emoji || '🍽️'} ${food.name}</span>
                            <span class="dfi-serving">${food.servings || 1} × ${food.serving || 'serving'}</span>
                        </div>
                        <div class="dfi-macros">
                            <span class="dfi-macro p">P ${Math.round(food.protein)}g</span>
                            <span class="dfi-macro c">C ${Math.round(food.carbs)}g</span>
                            <span class="dfi-macro f">F ${Math.round(food.fat)}g</span>
                        </div>
                        <span class="dfi-cal">${Math.round(food.calories)}</span>
                        <button class="dfi-delete" onclick="app.removeFood('${meal}', ${index})" title="Remove">🗑️</button>
                    </div>
                `).join('');
            }
        });

        // Update diary totals
        document.getElementById('dt-calories').textContent = Math.round(totals.calories);
        document.getElementById('dt-protein').textContent = `${Math.round(totals.protein)}g`;
        document.getElementById('dt-carbs').textContent = `${Math.round(totals.carbs)}g`;
        document.getElementById('dt-fat').textContent = `${Math.round(totals.fat)}g`;
        document.getElementById('dt-fiber').textContent = `${Math.round(totals.fiber)}g`;
        document.getElementById('dt-sugar').textContent = `${Math.round(totals.sugar)}g`;
    }

    removeFood(meal, index) {
        const data = this.getDayData();
        const food = data.meals[meal][index];
        data.meals[meal].splice(index, 1);
        this.saveDayData(data);
        this.renderDiary();
        this.renderDashboard();
        this.showToast(`🗑️ Removed ${food.name}`, 'info');
    }

    // ==================== FOOD SEARCH ====================
    async renderSearchResults(query, category = 'all') {
        const container = document.getElementById('searchResults');
        const requestToken = ++this.searchRequestToken;
        const results = await this.searchFoods(query, category, 50);

        if (requestToken !== this.searchRequestToken) return;

        if (results.length === 0) {
            container.innerHTML = `
                <div class="search-empty">
                    <span class="search-empty-icon">🔍</span>
                    <h3>No foods found</h3>
                    <p>Try a different search term or use Quick Add to log custom entries.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = results.map(food => `
            <div class="search-result-item" onclick='app.showFoodDetail(${this.getFoodActionArg(food.id)})'>
                <span class="sri-emoji">${food.emoji}</span>
                <div class="sri-info">
                    <span class="sri-name">${this.escapeHtml(food.name)}</span>
                    <span class="sri-brand">${this.escapeHtml(food.brand)} • ${this.escapeHtml(food.serving)}</span>
                    <div class="sri-macros">
                        <span class="sri-macro dfi-macro p">P ${food.protein}g</span>
                        <span class="sri-macro dfi-macro c">C ${food.carbs}g</span>
                        <span class="sri-macro dfi-macro f">F ${food.fat}g</span>
                    </div>
                </div>
                <div style="text-align:right">
                    <span class="sri-cal">${food.calories}</span>
                    <span class="sri-cal-unit">cal</span>
                </div>
                <button class="sri-add-btn" onclick='event.stopPropagation(); app.quickLogFood(${this.getFoodActionArg(food.id)})' title="Quick log to next meal">+</button>
            </div>
        `).join('');
    }

    quickLogFood(foodId) {
        const food = this.getFoodById(foodId);
        if (!food) return;

        // Determine which meal based on time
        const hour = new Date().getHours();
        let meal = 'snacks';
        if (hour < 11) meal = 'breakfast';
        else if (hour < 15) meal = 'lunch';
        else if (hour < 20) meal = 'dinner';

        const data = this.getDayData();
        data.meals[meal].push({
            ...food, servings: 1,
            loggedAt: new Date().toISOString()
        });
        this.saveDayData(data);
        this.renderDashboard();
        this.renderDiary();
        this.showToast(`✅ ${food.name} added to ${meal}!`, 'success');
    }

    showFoodDetail(foodId) {
        const food = this.getFoodById(foodId);
        if (!food) return;

        document.getElementById('foodDetailTitle').textContent = `${food.emoji} ${food.name}`;
        document.getElementById('foodDetailContent').innerHTML = `
            <div style="margin-bottom:16px">
                <div style="font-size:13px;color:var(--text-secondary)">${this.escapeHtml(food.brand)} • ${this.escapeHtml(food.serving)}</div>
            </div>
            <div class="nutrition-preview" style="margin-bottom:20px">
                <div class="np-item cal"><span class="np-val">${food.calories}</span><span class="np-label">Calories</span></div>
                <div class="np-item pro"><span class="np-val">${food.protein}g</span><span class="np-label">Protein</span></div>
                <div class="np-item carb"><span class="np-val">${food.carbs}g</span><span class="np-label">Carbs</span></div>
                <div class="np-item fat"><span class="np-val">${food.fat}g</span><span class="np-label">Fat</span></div>
            </div>
            <h4 style="margin-bottom:12px;font-size:14px">Full Nutrition</h4>
            <div style="display:grid;gap:8px">
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--border)">
                    <span>Fiber</span><span style="font-weight:600">${food.fiber}g</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--border)">
                    <span>Sugar</span><span style="font-weight:600">${food.sugar}g</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--border)">
                    <span>Sodium</span><span style="font-weight:600">${food.sodium}mg</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0">
                    <span>Cholesterol</span><span style="font-weight:600">${food.cholesterol}mg</span>
                </div>
            </div>
            <div style="margin-top:16px;display:flex;gap:8px">
                <button class="primary-btn" onclick='app.closeFoodDetail(); app.openMealModalForFood(${this.getFoodActionArg(food.id)});' style="flex:1">+ Add to Meal</button>
            </div>
        `;
        document.getElementById('foodDetailModal').classList.add('active');
    }

    closeFoodDetail() {
        document.getElementById('foodDetailModal').classList.remove('active');
    }

    // ==================== BARCODE SCANNER ====================
    async openBarcodeModal() {
        document.getElementById('barcodeModal')?.classList.add('active');
        const statusEl = document.getElementById('barcodeStatus');
        if (statusEl) statusEl.textContent = 'Starting camera...';
        await this.startBarcodeScanner();
    }

    closeBarcodeModal() {
        document.getElementById('barcodeModal')?.classList.remove('active');
        this.stopBarcodeScanner();
    }

    async startBarcodeScanner() {
        const videoEl = document.getElementById('barcodeVideo');
        const statusEl = document.getElementById('barcodeStatus');

        if (!videoEl) return;

        try {
            this.scannerStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { ideal: 'environment' },
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });

            videoEl.srcObject = this.scannerStream;
            await videoEl.play();

            if (!('BarcodeDetector' in window)) {
                if (statusEl) statusEl.textContent = 'Camera active. Auto-scan is not supported on this browser. Enter barcode manually below.';
                return;
            }

            const formats = ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128', 'code_39'];
            const supported = await window.BarcodeDetector.getSupportedFormats();
            const finalFormats = formats.filter(f => supported.includes(f));

            this.barcodeDetector = new window.BarcodeDetector({
                formats: finalFormats.length ? finalFormats : undefined
            });

            if (statusEl) statusEl.textContent = 'Point the barcode inside the frame...';

            this.scanInterval = setInterval(async () => {
                if (!this.barcodeDetector || videoEl.readyState < 2) return;
                try {
                    const barcodes = await this.barcodeDetector.detect(videoEl);
                    if (!barcodes?.length) return;

                    const value = (barcodes[0].rawValue || '').trim();
                    if (value) this.handleDetectedBarcode(value);
                } catch {
                    // keep scanner running
                }
            }, 700);
        } catch {
            if (statusEl) statusEl.textContent = 'Camera access failed. Please allow permission and use manual barcode input.';
        }
    }

    stopBarcodeScanner() {
        if (this.scanInterval) {
            clearInterval(this.scanInterval);
            this.scanInterval = null;
        }

        const videoEl = document.getElementById('barcodeVideo');
        if (videoEl) {
            try { videoEl.pause(); } catch {}
            videoEl.srcObject = null;
        }

        if (this.scannerStream) {
            this.scannerStream.getTracks().forEach(track => track.stop());
            this.scannerStream = null;
        }
    }

    async handleDetectedBarcode(barcode) {
        const now = Date.now();
        if (this.lastScannedBarcode === barcode && (now - this.lastScanAt < 4000)) return;
        this.lastScannedBarcode = barcode;
        this.lastScanAt = now;

        const statusEl = document.getElementById('barcodeStatus');
        if (statusEl) statusEl.textContent = `Detected: ${barcode}. Fetching nutrition...`;

        const lookupBtn = document.getElementById('barcodeLookupBtn');
        if (lookupBtn) lookupBtn.disabled = true;

        try {
            const product = await this.fetchProductByBarcode(barcode);
            if (!product) {
                if (statusEl) statusEl.textContent = `No product found for barcode: ${barcode}`;
                this.showToast(`❌ Barcode ${barcode} not found`, 'error');
                return;
            }

            const parsed = this.parseBarcodeProduct(product, barcode);
            if (!parsed) {
                if (statusEl) statusEl.textContent = 'Product found, but nutrition data is unavailable.';
                this.showToast('⚠️ Barcode found but nutrition data is missing', 'error');
                return;
            }

            this.upsertExternalFood(parsed);

            const data = this.getDayData();
            const hour = new Date().getHours();
            let meal = 'snacks';
            if (hour < 11) meal = 'breakfast';
            else if (hour < 15) meal = 'lunch';
            else if (hour < 20) meal = 'dinner';

            data.meals[meal].push({
                ...parsed,
                servings: 1,
                serving: parsed.serving || '1 serving',
                loggedAt: new Date().toISOString(),
                source: 'barcode'
            });
            this.saveDayData(data);

            this.renderDashboard();
            this.renderDiary();
            this.renderSearchResults(document.getElementById('foodSearchInput')?.value || '');

            if (statusEl) statusEl.textContent = `Added: ${parsed.name} (${parsed.calories} cal)`;
            this.showToast(`📦 ${parsed.name} added to ${meal}`, 'success');
        } catch {
            if (statusEl) statusEl.textContent = 'Lookup failed. Please try again.';
            this.showToast('⚠️ Barcode lookup failed', 'error');
        } finally {
            if (lookupBtn) lookupBtn.disabled = false;
        }
    }

    async fetchProductByBarcode(barcode) {
        const endpoints = [
            `https://in.openfoodfacts.org/api/v2/product/${encodeURIComponent(barcode)}.json`,
            `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(barcode)}.json`
        ];

        for (const url of endpoints) {
            try {
                const res = await fetch(url);
                if (!res.ok) continue;
                const data = await res.json();
                if (data?.status === 1 && data?.product) {
                    return data.product;
                }
            } catch {
                // try next endpoint
            }
        }

        return null;
    }

    parseBarcodeProduct(product, barcode) {
        const parsed = this.parseOpenFoodFactsProduct({ ...product, code: product.code || barcode }, barcode);
        return parsed ? { ...parsed, source: 'barcode' } : null;
    }

    openMealModalForFood(foodId) {
        const hour = new Date().getHours();
        let meal = 'snacks';
        if (hour < 11) meal = 'breakfast';
        else if (hour < 15) meal = 'lunch';
        else if (hour < 20) meal = 'dinner';
        this.openMealModal(meal);
        // Auto-select the food
        setTimeout(() => {
            const food = this.getFoodById(foodId);
            if (food) this.selectFoodInModal(food);
        }, 100);
    }

    // ==================== MEAL MODAL ====================
    openMealModal(meal) {
        this.currentMeal = meal;
        this.selectedFood = null;
        const mealNames = { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner', snacks: 'Snacks' };
        document.getElementById('mealModalTitle').textContent = `Add Food to ${mealNames[meal]}`;
        document.getElementById('modalFoodSearch').value = '';
        document.getElementById('modalSelectedFood').style.display = 'none';
        document.getElementById('addFoodBtn').disabled = true;
        this.renderModalFoodResults('');
        document.getElementById('mealModal').classList.add('active');
        document.getElementById('modalFoodSearch').focus();
    }

    closeMealModal() {
        document.getElementById('mealModal').classList.remove('active');
        this.currentMeal = null;
        this.selectedFood = null;
    }

    async renderModalFoodResults(query) {
        const container = document.getElementById('modalFoodResults');
        const requestToken = ++this.modalSearchRequestToken;
        const results = await this.searchFoods(query, 'all', 30);

        if (requestToken !== this.modalSearchRequestToken) return;

        container.innerHTML = results.map(food => `
            <div class="modal-food-item" onclick='app.selectFoodInModal(app.getFoodById(${this.getFoodActionArg(food.id)}))'>
                <span>${food.emoji}</span>
                <span class="mfi-name">${this.escapeHtml(food.name)}</span>
                <span class="mfi-cal">${food.calories} cal</span>
            </div>
        `).join('');
    }

    selectFoodInModal(food) {
        this.selectedFood = food;
        document.getElementById('modalSelectedFood').style.display = 'block';
        document.getElementById('selectedFoodInfo').innerHTML = `
            <div class="selected-food-name">${food.emoji} ${food.name}</div>
            <div class="selected-food-brand">${food.brand}</div>
        `;
        document.getElementById('servingSizeLabel').textContent = `1 serving (${food.serving})`;
        document.getElementById('servingInput').value = 1;
        document.getElementById('addFoodBtn').disabled = false;
        this.updateNutritionPreview();

        // Highlight selected in list
        document.querySelectorAll('.modal-food-item').forEach(item => item.classList.remove('selected'));
    }

    updateNutritionPreview() {
        if (!this.selectedFood) return;
        const servings = parseFloat(document.getElementById('servingInput').value) || 1;
        const f = this.selectedFood;

        document.getElementById('nutritionPreview').innerHTML = `
            <div class="np-item cal"><span class="np-val">${Math.round(f.calories * servings)}</span><span class="np-label">Calories</span></div>
            <div class="np-item pro"><span class="np-val">${Math.round(f.protein * servings)}g</span><span class="np-label">Protein</span></div>
            <div class="np-item carb"><span class="np-val">${Math.round(f.carbs * servings)}g</span><span class="np-label">Carbs</span></div>
            <div class="np-item fat"><span class="np-val">${Math.round(f.fat * servings)}g</span><span class="np-label">Fat</span></div>
        `;
    }

    addFoodToMeal() {
        if (!this.selectedFood || !this.currentMeal) return;
        const servings = parseFloat(document.getElementById('servingInput').value) || 1;
        const f = this.selectedFood;

        const entry = {
            id: f.id,
            name: f.name,
            brand: f.brand,
            emoji: f.emoji,
            serving: f.serving,
            servings: servings,
            calories: Math.round(f.calories * servings),
            protein: Math.round(f.protein * servings * 10) / 10,
            carbs: Math.round(f.carbs * servings * 10) / 10,
            fat: Math.round(f.fat * servings * 10) / 10,
            fiber: Math.round(f.fiber * servings * 10) / 10,
            sugar: Math.round(f.sugar * servings * 10) / 10,
            sodium: Math.round(f.sodium * servings),
            cholesterol: Math.round(f.cholesterol * servings),
            loggedAt: new Date().toISOString()
        };

        const data = this.getDayData();
        data.meals[this.currentMeal].push(entry);
        this.saveDayData(data);

        this.closeMealModal();
        this.renderDashboard();
        this.renderDiary();
        this.showToast(`✅ ${f.name} added to ${this.currentMeal}!`, 'success');
    }

    // ==================== QUICK ADD ====================
    openQuickAdd() {
        document.getElementById('qaName').value = '';
        document.getElementById('qaCal').value = '';
        document.getElementById('qaProtein').value = '';
        document.getElementById('qaCarbs').value = '';
        document.getElementById('qaFat').value = '';
        document.getElementById('quickAddModal').classList.add('active');
        document.getElementById('qaName').focus();
    }

    closeQuickAdd() {
        document.getElementById('quickAddModal').classList.remove('active');
    }

    submitQuickAdd() {
        const meal = document.getElementById('qaMeal').value;
        const name = document.getElementById('qaName').value || 'Quick Add Entry';
        const calories = parseInt(document.getElementById('qaCal').value) || 0;
        const protein = parseInt(document.getElementById('qaProtein').value) || 0;
        const carbs = parseInt(document.getElementById('qaCarbs').value) || 0;
        const fat = parseInt(document.getElementById('qaFat').value) || 0;

        if (calories === 0 && protein === 0 && carbs === 0 && fat === 0) {
            this.showToast('⚠️ Please enter at least one value', 'error');
            return;
        }

        const entry = {
            name, emoji: '⚡', serving: 'custom',
            servings: 1, calories, protein, carbs, fat,
            fiber: 0, sugar: 0, sodium: 0, cholesterol: 0,
            loggedAt: new Date().toISOString()
        };

        const data = this.getDayData();
        data.meals[meal].push(entry);
        this.saveDayData(data);

        this.closeQuickAdd();
        this.renderDashboard();
        this.renderDiary();
        this.showToast(`⚡ Quick add: ${calories} cal to ${meal}`, 'success');
    }

    // ==================== WEEKLY CHART ====================
    renderWeeklyChart() {
        const container = document.getElementById('weeklyChart');
        const goals = this.getGoals();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let bars = [];

        for (let i = 6; i >= 0; i--) {
            const d = new Date(this.currentDate);
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            const dayData = this.getDayData(key);
            const totals = this.calculateTotals(dayData);
            const isToday = i === 0;

            bars.push({
                day: days[d.getDay()],
                cal: totals.calories,
                isToday,
                isOver: totals.calories > goals.calories
            });
        }

        const maxCal = Math.max(goals.calories, ...bars.map(b => b.cal)) || 1;

        container.innerHTML = bars.map(bar => {
            const height = Math.max(4, (bar.cal / maxCal) * 150);
            return `
                <div class="chart-bar-wrap ${bar.isToday ? 'today' : ''}">
                    <span class="chart-bar-val">${bar.cal || '-'}</span>
                    <div class="chart-bar ${bar.isOver ? 'over' : ''}" style="height:${height}px"></div>
                    <span class="chart-bar-label">${bar.day}</span>
                </div>
            `;
        }).join('');
    }

    // ==================== PROGRESS PAGE ====================
    renderProgress() {
        this.render7DayAverage();
        this.renderHistoryChart();
        this.renderPieChart();
        this.calculateStreak();
        this.renderStreakCalendar();
    }

    render7DayAverage() {
        let totalCal = 0, totalP = 0, totalC = 0, totalF = 0;
        let count = 0;

        for (let i = 0; i < 7; i++) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            const dayData = this.getDayData(key);
            const totals = this.calculateTotals(dayData);
            if (totals.calories > 0) {
                totalCal += totals.calories;
                totalP += totals.protein;
                totalC += totals.carbs;
                totalF += totals.fat;
                count++;
            }
        }

        document.getElementById('avg7Cal').textContent = count > 0 ? Math.round(totalCal / count) : '-';
        document.getElementById('avg7Protein').textContent = count > 0 ? `${Math.round(totalP / count)}g` : '-';
        document.getElementById('avg7Carbs').textContent = count > 0 ? `${Math.round(totalC / count)}g` : '-';
        document.getElementById('avg7Fat').textContent = count > 0 ? `${Math.round(totalF / count)}g` : '-';
    }

    renderHistoryChart() {
        const container = document.getElementById('historyChart');
        const goals = this.getGoals();
        let bars = [];

        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            const dayData = this.getDayData(key);
            const totals = this.calculateTotals(dayData);
            bars.push({
                label: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                cal: totals.calories,
                isOver: totals.calories > goals.calories
            });
        }

        const maxCal = Math.max(goals.calories, ...bars.map(b => b.cal)) || 1;

        container.innerHTML = bars.map(bar => {
            const height = Math.max(4, (bar.cal / maxCal) * 130);
            const color = bar.isOver
                ? 'linear-gradient(to top, #d63031, #fab1a0)'
                : bar.cal > 0
                    ? 'linear-gradient(to top, #00b894, #55efc4)'
                    : 'var(--border)';
            return `
                <div class="hc-bar-wrap">
                    <span class="hc-bar-val">${bar.cal || '-'}</span>
                    <div class="hc-bar" style="height:${height}px;background:${color}"></div>
                    <span class="hc-bar-label">${bar.label}</span>
                </div>
            `;
        }).join('');
    }

    renderPieChart() {
        const canvas = document.getElementById('macroPieChart');
        const ctx = canvas.getContext('2d');
        const data = this.getDayData();
        const totals = this.calculateTotals(data);

        const totalMacrosCal = (totals.protein * 4) + (totals.carbs * 4) + (totals.fat * 9);

        ctx.clearRect(0, 0, 250, 250);

        if (totalMacrosCal === 0) {
            // Empty state
            ctx.beginPath();
            ctx.arc(125, 125, 80, 0, 2 * Math.PI);
            ctx.fillStyle = '#e0e0e0';
            ctx.fill();
            ctx.fillStyle = '#636e72';
            ctx.font = '14px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('No data yet', 125, 130);
        } else {
            const proteinCal = totals.protein * 4;
            const carbsCal = totals.carbs * 4;
            const fatCal = totals.fat * 9;

            const slices = [
                { val: proteinCal, color: '#e17055', label: 'Protein' },
                { val: carbsCal, color: '#0984e3', label: 'Carbs' },
                { val: fatCal, color: '#fdcb6e', label: 'Fat' },
            ];

            let startAngle = -Math.PI / 2;
            slices.forEach(slice => {
                const sliceAngle = (slice.val / totalMacrosCal) * 2 * Math.PI;
                ctx.beginPath();
                ctx.moveTo(125, 125);
                ctx.arc(125, 125, 90, startAngle, startAngle + sliceAngle);
                ctx.closePath();
                ctx.fillStyle = slice.color;
                ctx.fill();
                startAngle += sliceAngle;
            });

            // Inner circle (donut)
            ctx.beginPath();
            ctx.arc(125, 125, 50, 0, 2 * Math.PI);
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--bg-card').trim() || '#ffffff';
            ctx.fill();

            // Center text
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text').trim() || '#2d3436';
            ctx.font = 'bold 18px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(`${Math.round(totals.calories)}`, 125, 122);
            ctx.font = '11px Inter';
            ctx.fillStyle = '#636e72';
            ctx.fillText('calories', 125, 138);

            // Legend
            document.getElementById('pieLegend').innerHTML = slices.map(s => {
                const pct = Math.round((s.val / totalMacrosCal) * 100);
                return `
                    <div class="pie-legend-item">
                        <div class="pie-legend-dot" style="background:${s.color}"></div>
                        <span>${s.label}: ${pct}%</span>
                    </div>
                `;
            }).join('');
        }
    }

    calculateStreak() {
        let streak = 0;
        const today = new Date();

        for (let i = 0; i < 365; i++) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            const dayData = this.getDayData(key);
            const totals = this.calculateTotals(dayData);

            if (totals.calories > 0) {
                streak++;
            } else if (i > 0) {
                break;
            }
        }

        document.getElementById('streakCount').textContent = streak;
        document.getElementById('streakBig').textContent = streak;
    }

    renderStreakCalendar() {
        const container = document.getElementById('streakCalendar');
        const today = new Date();
        let cells = [];

        for (let i = 27; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            const dayData = this.getDayData(key);
            const totals = this.calculateTotals(dayData);
            const isToday = i === 0;
            const logged = totals.calories > 0;

            cells.push(`
                <div class="streak-day ${logged ? 'logged' : ''} ${isToday ? 'today' : ''}">
                    ${d.getDate()}
                </div>
            `);
        }

        container.innerHTML = cells.join('');
    }

    // ==================== GOALS ====================
    loadGoals() {
        const goals = this.getGoals();
        document.getElementById('goalCalories').value = goals.calories;
        document.getElementById('goalProtein').value = goals.protein;
        document.getElementById('goalCarbs').value = goals.carbs;
        document.getElementById('goalFat').value = goals.fat;
        document.getElementById('goalWater').value = goals.water;
        document.getElementById('goalFiber').value = goals.fiber;
        document.getElementById('goalSugar').value = goals.sugar;
        document.getElementById('goalSodium').value = goals.sodium;
    }

    saveGoalsFromForm() {
        const goals = {
            calories: parseInt(document.getElementById('goalCalories').value) || 2000,
            protein: parseInt(document.getElementById('goalProtein').value) || 150,
            carbs: parseInt(document.getElementById('goalCarbs').value) || 250,
            fat: parseInt(document.getElementById('goalFat').value) || 65,
            water: parseInt(document.getElementById('goalWater').value) || 8,
            fiber: parseInt(document.getElementById('goalFiber').value) || 25,
            sugar: parseInt(document.getElementById('goalSugar').value) || 50,
            sodium: parseInt(document.getElementById('goalSodium').value) || 2300,
            cholesterol: 300
        };
        this.saveGoals(goals);
        this.renderDashboard();
        this.showToast('🎯 Goals updated!', 'success');
    }

    applyMacroSplit(type) {
        const calories = parseInt(document.getElementById('goalCalories').value) || 2000;
        let pPct, cPct, fPct;

        switch (type) {
            case 'balanced': pPct = 0.30; cPct = 0.40; fPct = 0.30; break;
            case 'lowcarb': pPct = 0.40; cPct = 0.20; fPct = 0.40; break;
            case 'highprotein': pPct = 0.40; cPct = 0.35; fPct = 0.25; break;
            case 'keto': pPct = 0.20; cPct = 0.05; fPct = 0.75; break;
            default: return;
        }

        document.getElementById('goalProtein').value = Math.round((calories * pPct) / 4);
        document.getElementById('goalCarbs').value = Math.round((calories * cPct) / 4);
        document.getElementById('goalFat').value = Math.round((calories * fPct) / 9);

        document.querySelectorAll('.calc-preset').forEach(b => b.classList.remove('active'));
        document.querySelector(`[data-split="${type}"]`).classList.add('active');

        this.showToast(`📐 Macros updated to ${type} split`, 'info');
    }

    // ==================== SETTINGS ====================
    loadSettings() {
        const settings = this.getSettings();
        if (settings.theme === 'dark') {
            document.body.classList.add('dark');
        }
    }

    loadProfileSettings() {
        const settings = this.getSettings();
        document.getElementById('settingName').value = settings.name || '';
        document.getElementById('settingWeight').value = settings.weight || '';
        document.getElementById('settingHeight').value = settings.height || '';
        document.getElementById('settingAge').value = settings.age || '';
        document.getElementById('settingActivity').value = settings.activity || '1.55';

        // Theme buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === settings.theme);
        });
    }

    setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
        const settings = this.getSettings();
        settings.theme = theme;
        this.saveSettings(settings);

        // Re-render pie chart for theme
        this.renderPieChart();
        this.showToast(`${theme === 'dark' ? '🌙' : '☀️'} Theme updated!`, 'info');
    }

    calculateTDEE() {
        const weight = parseFloat(document.getElementById('settingWeight').value);
        const height = parseFloat(document.getElementById('settingHeight').value);
        const age = parseFloat(document.getElementById('settingAge').value);
        const activity = parseFloat(document.getElementById('settingActivity').value);

        if (!weight || !height || !age) {
            this.showToast('⚠️ Please fill in weight, height, and age', 'error');
            return;
        }

        // Mifflin-St Jeor (male estimate, adjust for gender if needed)
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        const tdee = Math.round(bmr * activity);

        document.getElementById('tdeeValue').textContent = tdee;
        document.getElementById('tdeeResult').style.display = 'flex';

        // Save settings
        const settings = this.getSettings();
        settings.weight = weight;
        settings.height = height;
        settings.age = age;
        settings.activity = activity;
        this.saveSettings(settings);
    }

    applyTDEE() {
        const tdee = parseInt(document.getElementById('tdeeValue').textContent);
        if (tdee) {
            document.getElementById('goalCalories').value = tdee;
            this.navigateTo('goals');
            this.showToast('📊 TDEE applied as calorie goal!', 'success');
        }
    }

    exportData() {
        const data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('nutritrack_')) {
                data[key] = JSON.parse(localStorage.getItem(key));
            }
        }

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nutritrack_backup_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('📥 Data exported!', 'success');
    }

    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                Object.entries(data).forEach(([key, val]) => {
                    localSto
                    rage.setItem(key, JSON.stringify(val));
                });
                this.showToast('📤 Data imported! Refreshing...', 'success');
                setTimeout(() => location.reload(), 1000);
            } catch {
                this.showToast('⚠️ Invalid file format', 'error');
            }
        };
        reader.readAsText(file);
    }

    clearAllData() {
        if (confirm('⚠️ This will permanently delete ALL your nutrition data. Are you sure?')) {
            const keys = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('nutritrack_')) keys.push(key);
            }
            keys.forEach(k => localStorage.removeItem(k));
            this.showToast('🗑️ All data cleared!', 'info');
            setTimeout(() => location.reload(), 1000);
        }
    }

    // ==================== SAVED MEALS ====================
    openCreateMealModal() {
        this.createMealItems = [];
        document.getElementById('newMealName').value = '';
        document.getElementById('createMealSearch').value = '';
        document.getElementById('createMealResults').innerHTML = '';
        document.getElementById('createMealItemsList').innerHTML = '<div class="diary-food-empty">No items added yet</div>';
        document.getElementById('createMealModal').classList.add('active');
    }

    closeCreateMealModal() {
        document.getElementById('createMealModal').classList.remove('active');
        this.createMealItems = [];
    }

    async renderCreateMealResults(query) {
        const container = document.getElementById('createMealResults');
        if (!query.trim()) { container.innerHTML = ''; return; }

        const requestToken = ++this.createMealSearchRequestToken;
        const results = await this.searchFoods(query, 'all', 15);

        if (requestToken !== this.createMealSearchRequestToken) return;

        container.innerHTML = results.map(food => `
            <div class="modal-food-item" onclick='app.addToCreateMeal(${this.getFoodActionArg(food.id)})'>
                <span>${food.emoji}</span>
                <span class="mfi-name">${this.escapeHtml(food.name)}</span>
                <span class="mfi-cal">${food.calories} cal</span>
            </div>
        `).join('');
    }

    addToCreateMeal(foodId) {
        const food = this.getFoodById(foodId);
        if (!food) return;
        this.createMealItems.push({ ...food, servings: 1 });
        this.renderCreateMealItemsList();
    }

    renderCreateMealItemsList() {
        const container = document.getElementById('createMealItemsList');
        if (this.createMealItems.length === 0) {
            container.innerHTML = '<div class="diary-food-empty">No items added yet</div>';
            return;
        }
        container.innerHTML = this.createMealItems.map((item, i) => `
            <div class="cml-item">
                <span>${item.emoji}</span>
                <span class="cml-item-name">${item.name}</span>
                <span class="cml-item-cal">${item.calories} cal</span>
                <button class="cml-remove" onclick="app.removeFromCreateMeal(${i})">✕</button>
            </div>
        `).join('');
    }

    removeFromCreateMeal(index) {
        this.createMealItems.splice(index, 1);
        this.renderCreateMealItemsList();
    }

    saveCustomMeal() {
        const name = document.getElementById('newMealName').value.trim();
        if (!name) {
            this.showToast('⚠️ Please enter a meal name', 'error');
            return;
        }
        if (this.createMealItems.length === 0) {
            this.showToast('⚠️ Please add at least one food item', 'error');
            return;
        }

        const meals = this.getSavedMeals();
        const totalCal = this.createMealItems.reduce((s, f) => s + f.calories, 0);
        meals.push({
            id: Date.now(),
            name,
            items: this.createMealItems,
            totalCalories: totalCal,
            createdAt: new Date().toISOString()
        });
        this.saveSavedMeals(meals);
        this.closeCreateMealModal();
        this.renderSavedMeals();
        this.showToast(`🍽️ "${name}" saved!`, 'success');
    }

    renderSavedMeals() {
        const meals = this.getSavedMeals();
        const container = document.getElementById('savedMealsList');

        if (meals.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">🍽️</span>
                    <h3>No saved meals yet</h3>
                    <p>Create meal combos for quick logging!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = meals.map(meal => `
            <div class="saved-meal-card">
                <div class="smc-header">
                    <span class="smc-name">🍽️ ${meal.name}</span>
                    <span class="smc-cal">${meal.totalCalories} cal</span>
                </div>
                <div class="smc-items">${meal.items.map(i => i.name).join(', ')}</div>
                <div class="smc-actions">
                    <button class="primary-btn" style="font-size:12px;padding:8px 12px" onclick="app.logSavedMeal(${meal.id})">Log This Meal</button>
                    <button class="danger-btn red" style="font-size:12px;padding:8px 12px" onclick="app.deleteSavedMeal(${meal.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    logSavedMeal(mealId) {
        const meals = this.getSavedMeals();
        const meal = meals.find(m => m.id === mealId);
        if (!meal) return;

        // Determine which diary meal
        const hour = new Date().getHours();
        let targetMeal = 'snacks';
        if (hour < 11) targetMeal = 'breakfast';
        else if (hour < 15) targetMeal = 'lunch';
        else if (hour < 20) targetMeal = 'dinner';

        const data = this.getDayData();
        meal.items.forEach(item => {
            data.meals[targetMeal].push({
                ...item,
                loggedAt: new Date().toISOString()
            });
        });
        this.saveDayData(data);
        this.renderDashboard();
        this.renderDiary();
        this.showToast(`🍽️ "${meal.name}" logged to ${targetMeal}!`, 'success');
    }

    deleteSavedMeal(mealId) {
        let meals = this.getSavedMeals();
        meals = meals.filter(m => m.id !== mealId);
        this.saveSavedMeals(meals);
        this.renderSavedMeals();
        this.showToast('🗑️ Meal deleted', 'info');
    }

    // ==================== TOAST NOTIFICATIONS ====================
    showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}

export default NutriTrackApp;
