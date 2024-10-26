export const config = {
  baseName: import.meta.env.VITE_APP_BASE_NAME,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  localStorageAuthTokenKey: import.meta.env.VITE_LOCAL_STORAGE_SESSION_KEY,
  localStorageRefreshTokenKey: import.meta.env.VITE_LOCAL_STORAGE_SESSION_REFRESH_KEY,
  cryptoSecret: import.meta.env.VITE_CRYPTO_SECRET,
  googleApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  googleClientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
  googleRedirectUri: import.meta.env.VITE_APP_GOOGLE_REDIRECT_URI,
  appleClientId: import.meta.env.VITE_APP_APPLE_CLIENT_ID,
  appleRedirectUri: import.meta.env.VITE_APP_APPLE_REDIRECT_URI,
  mixpanelToken: import.meta.env.VITE_MIXPANEL_TOKEN,
  stripePublishableKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
};
