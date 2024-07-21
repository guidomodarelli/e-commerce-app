import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { UserAuthWithEmailAndPasswordFirebaseAdapter } from "./core/adapters/UserAuthWithEmailAndPasswordFirebaseAdapter";
import { UserRepositoryTursoAdapter } from "./core/adapters/UserRepositoryTursoAdapter";
import { SaveAuthUserUseCase } from "./core/domain/useCases/SaveAuthUserUseCase";
import { signInAuthUserWithEmailAndPasswordUseCase } from "./core/domain/useCases/SignInAuthUserWithEmailAndPasswordUseCase";
import { signOutUserUseCase } from "./core/domain/useCases/SignOutUser";
import { signUpAuthUserWithEmailAndPasswordUseCase } from "./core/domain/useCases/SignUpAuthUserWithEmailAndPasswordUseCase";
import { UserRepository } from "./core/ports/UserRepository.port";
import { createClient } from "@libsql/client";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_APP_ID as string,
};
initializeApp(firebaseConfig);
const auth = getAuth();

export const turso = createClient({
  url: import.meta.env.VITE_TURSO_DATABASE_URL as string,
  authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN as string,
});

const userAuthWithEmailAndPassword = new UserAuthWithEmailAndPasswordFirebaseAdapter(auth);
const userRepository: UserRepository = new UserRepositoryTursoAdapter(turso);

export const signInWithEmailAndPassword = signInAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signUpWithEmailAndPassword = signUpAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signOut = signOutUserUseCase(userAuthWithEmailAndPassword);
export const saveUser = SaveAuthUserUseCase(userRepository);
