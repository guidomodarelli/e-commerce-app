import {
  AuthServiceFirebaseAdapter,
  CategoryRepositoryDrizzleAdapter,
  ProductRepositoryDrizzleAdapter,
  UserAuthSignInProviderFirebaseAdapter,
  UserAuthSignOutFirebaseAdapter,
  UserAuthWithEmailAndPasswordFirebaseAdapter,
  UserRepositoryDrizzleAdapter,
} from "@core/adapters";
import * as schema from "@core/adapters/drizzle/schema";
import {
  getCategoriesUseCase,
  getProductsUseCase,
  onAuthStateChangeUseCase,
  saveAllProductsUseCase,
  saveAuthUserUseCase,
  signInAuthUserWithEmailAndPasswordUseCase,
  signInWithGoogleUseCase,
  signOutUserUseCase,
  signUpAuthUserWithEmailAndPasswordUseCase,
} from "@core/application/useCases";
import { CategoryRepository, ProductRepository, UserRepository } from "@core/ports";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig, tursoConfig } from "./config";

initializeApp(firebaseConfig);
const auth = getAuth();
const turso = createClient(tursoConfig);
const db = drizzle(turso, { schema });
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const userAuthSignInProvider = new UserAuthSignInProviderFirebaseAdapter(auth, provider);
const userAuthSignOut = new UserAuthSignOutFirebaseAdapter(auth);
const userRepository: UserRepository = new UserRepositoryDrizzleAdapter(db);
const userAuthWithEmailAndPassword = new UserAuthWithEmailAndPasswordFirebaseAdapter(auth, userRepository);
const authService = new AuthServiceFirebaseAdapter(auth, userRepository);
const productRepository: ProductRepository = new ProductRepositoryDrizzleAdapter(db);
const categoryRepository: CategoryRepository = new CategoryRepositoryDrizzleAdapter(db);

export const signInWithGoogle = signInWithGoogleUseCase(userAuthSignInProvider, authService);
export const onAuthStateChanged = onAuthStateChangeUseCase(authService);
export const signInWithEmailAndPassword = signInAuthUserWithEmailAndPasswordUseCase(
  userAuthWithEmailAndPassword,
  authService,
);
export const signUpWithEmailAndPassword = signUpAuthUserWithEmailAndPasswordUseCase(
  userAuthWithEmailAndPassword,
  authService,
);
export const signOut = signOutUserUseCase(userAuthSignOut, authService);
export const saveUser = saveAuthUserUseCase(userRepository);
export const saveAllProducts = saveAllProductsUseCase(productRepository);
export const getProducts = getProductsUseCase(productRepository);
export const getCategories = getCategoriesUseCase(categoryRepository);
