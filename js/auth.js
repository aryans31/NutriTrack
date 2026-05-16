import { initializeApp, getApp, getApps } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
};

const requiredKeys = ['apiKey', 'authDomain', 'projectId', 'appId'];

function hasFirebaseConfig() {
    return requiredKeys.every((key) => Boolean(firebaseConfig[key]));
}

let authInstance = null;

function getInitializedAuth() {
    if (!hasFirebaseConfig()) {
        throw new Error('Firebase auth is not configured for this project yet.');
    }

    if (!authInstance) {
        const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
        authInstance = getAuth(app);
    }

    return authInstance;
}

export function isFirebaseConfigured() {
    return hasFirebaseConfig();
}

export function getFirebaseEnvTemplate() {
    return [
        'VITE_FIREBASE_API_KEY=',
        'VITE_FIREBASE_AUTH_DOMAIN=',
        'VITE_FIREBASE_PROJECT_ID=',
        'VITE_FIREBASE_APP_ID=',
        'VITE_FIREBASE_MESSAGING_SENDER_ID='
    ].join('\n');
}

export function initAuthClient() {
    if (!hasFirebaseConfig()) {
        return null;
    }

    return getInitializedAuth();
}

export function subscribeToAuthChanges(callback) {
    const auth = getInitializedAuth();
    return onAuthStateChanged(auth, callback);
}

export async function registerWithEmail(email, password) {
    const auth = getInitializedAuth();
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function loginWithEmail(email, password) {
    const auth = getInitializedAuth();
    return signInWithEmailAndPassword(auth, email, password);
}

export async function loginWithGoogle() {
    const auth = getInitializedAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return signInWithPopup(auth, provider);
}

export async function logoutCurrentUser() {
    const auth = getInitializedAuth();
    return signOut(auth);
}
