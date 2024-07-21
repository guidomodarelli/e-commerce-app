import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signInWithPopup,
  User,
} from "firebase/auth";
import { UserRepositoryDrizzleAdapter } from "@core/adapters/drizzle/UserRepositoryDrizzleAdapter";
import { UserAuthWithEmailAndPasswordFirebaseAdapter } from "@core/adapters/UserAuthWithEmailAndPasswordFirebaseAdapter";
import { UserRepository } from "@core/ports/UserRepository.port";
import { ProductRepository } from "@core/ports/ProductRepository.port";
import { ProductRepositoryDrizzleAdapter } from "@core/adapters/drizzle/ProductRepositoryDrizzleAdapter";
import {
  saveAllProductsUseCase,
  SaveAuthUserUseCase,
  signInAuthUserWithEmailAndPasswordUseCase,
  signOutUserUseCase,
  signUpAuthUserWithEmailAndPasswordUseCase,
} from "@core/domain/useCases";
import { firebaseConfig, tursoConfig } from "./config";

initializeApp(firebaseConfig);
const auth = getAuth();
const turso = createClient(tursoConfig);
const db = drizzle(turso);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const userAuthWithEmailAndPassword = new UserAuthWithEmailAndPasswordFirebaseAdapter(auth);
const userRepository: UserRepository = new UserRepositoryDrizzleAdapter(db);
const productRepository: ProductRepository = new ProductRepositoryDrizzleAdapter(db);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const onAuthStateChanged = (callback: NextOrObserver<User>) => onAuthStateChangedFirebase(auth, callback);
export const signInWithEmailAndPassword = signInAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signUpWithEmailAndPassword = signUpAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signOut = signOutUserUseCase(userAuthWithEmailAndPassword);
export const saveUser = SaveAuthUserUseCase(userRepository);
export const saveAllProducts = saveAllProductsUseCase(productRepository);
