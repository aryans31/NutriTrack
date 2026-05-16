// Temporarily disable Firebase auth support.
// All functions are stubbed so the app can run in guest mode.

export function isFirebaseConfigured() {
    return false;
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
    return null;
}

export function subscribeToAuthChanges(/* callback */) {
    // Return a no-op unsubscribe function
    return () => {};
}

export async function registerWithEmail(/* email, password */) {
    return Promise.reject(new Error('Auth disabled'));
}

export async function loginWithEmail(/* email, password */) {
    return Promise.reject(new Error('Auth disabled'));
}

export async function loginWithGoogle() {
    return Promise.reject(new Error('Auth disabled'));
}

export async function logoutCurrentUser() {
    return Promise.reject(new Error('Auth disabled'));
}
