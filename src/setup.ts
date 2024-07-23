import { UserAuthWithEmailAndPasswordFirebaseAdapter } from "@core/adapters/auth/firebase";
import { ProductRepositoryDrizzleAdapter, UserRepositoryDrizzleAdapter } from "@core/adapters/drizzle";
import {
  getProductsGroupByCategoriesUseCase,
  saveAllProductsUseCase,
  saveAuthUserUseCase,
  signInAuthUserWithEmailAndPasswordUseCase,
  signOutUserUseCase,
  signUpAuthUserWithEmailAndPasswordUseCase,
} from "@core/domain/useCases";
import { ProductRepository, UserRepository } from "@core/ports";
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
import { firebaseConfig, tursoConfig } from "./config";
import * as schema from "@core/adapters/drizzle/schema";

initializeApp(firebaseConfig);
const auth = getAuth();
const turso = createClient(tursoConfig);
const db = drizzle(turso, { schema });
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const userAuthWithEmailAndPassword = new UserAuthWithEmailAndPasswordFirebaseAdapter(auth);
const userRepository: UserRepository = new UserRepositoryDrizzleAdapter(db);
const productRepository: ProductRepository = new ProductRepositoryDrizzleAdapter(db);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const onAuthStateChanged = (callback: NextOrObserver<User>) => onAuthStateChangedFirebase(auth, callback);
export const signInWithEmailAndPassword = signInAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signUpWithEmailAndPassword = signUpAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signOut = signOutUserUseCase(userAuthWithEmailAndPassword);
export const saveUser = saveAuthUserUseCase(userRepository);
export const saveAllProducts = saveAllProductsUseCase(productRepository);
export const getProductsGroupByCategories = getProductsGroupByCategoriesUseCase(productRepository);
