// TODO: delete .env and validate env vars with a schema

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_APP_ID as string,
};

export const tursoConfig = {
  url: import.meta.env.VITE_TURSO_DATABASE_URL as string,
  authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN as string,
};
