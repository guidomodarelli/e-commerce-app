import { Config } from "@libsql/client";
import { FirebaseOptions } from "firebase/app";
import { validateEnvironment } from "./validate-envs";

const env = validateEnvironment();

export const firebaseConfig: FirebaseOptions = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

export const tursoConfig: Config = {
  url: env.VITE_TURSO_DATABASE_URL,
  authToken: env.VITE_TURSO_AUTH_TOKEN,
};
