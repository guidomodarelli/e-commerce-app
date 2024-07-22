import { validateEnvironment } from "./validate-envs";

const env = validateEnvironment();

export const firebaseConfig = {
  apiKey: env.VITE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_ID,
};

export const tursoConfig = {
  url: env.VITE_TURSO_DATABASE_URL,
  authToken: env.VITE_TURSO_AUTH_TOKEN,
};
