// validateEnv.ts
import { z } from "zod";

const envSchema = z.object({
  VITE_FIREBASE_API_KEY: z.string().min(1),
  VITE_FIREBASE_AUTH_DOMAIN: z.string().min(1),
  VITE_FIREBASE_PROJECT_ID: z.string().min(1),
  VITE_FIREBASE_STORAGE_BUCKET: z.string().min(1),
  VITE_FIREBASE_MESSAGING_SENDER_ID: z.string().min(1),
  VITE_FIREBASE_APP_ID: z.string().min(1),
  VITE_TURSO_DATABASE_URL: z.string().url(),
  VITE_TURSO_AUTH_TOKEN: z.string().min(1),
});

export const validateEnvironment = () => {
  const parsedEnvironment = envSchema.safeParse(import.meta.env);
  if (!parsedEnvironment.success) {
    console.error("Invalid environment variables", parsedEnvironment.error.format());
    throw new Error("Invalid environment variables");
  }
  return parsedEnvironment.data;
};
