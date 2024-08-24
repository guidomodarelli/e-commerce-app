import {
  errorAuthHandlerUseCase,
  saveUserAuthUseCase,
  signInWithEmailAndPasswordUseCase,
  signInWithGoogleUseCase,
  signOutUserUseCase,
  signUpAuthUserWithEmailAndPasswordUseCase,
} from "@core/auth/Application";
import {
  AuthServiceFirebaseAdapter,
  ErrorHandlerAuthFirebaseAdapter,
  UserAuthSignInProviderFirebaseAdapter,
  UserAuthSignOutFirebaseAdapter,
  UserAuthWithEmailAndPasswordFirebaseAdapter,
} from "@core/auth/Infrastructure/firebase";
import { getCategoriesUseCase } from "@core/category/Application";
import { CategoryRepository } from "@core/category/Domain";
import { CategoryRepositoryDrizzleAdapter } from "@core/category/Infrastructure";
import { getProductsUseCase, saveAllProductsUseCase } from "@core/product/Application";
import { ProductRepository } from "@core/product/Domain";
import { ProductRepositoryDrizzleAdapter } from "@core/product/Infrastructure";
import { schema } from "@core/Shared/Infrastructure/drizzle";
import { getCurrentUserUseCase } from "@core/user/Application";
import { UserRepository } from "@core/user/Domain";
import { UserRepositoryDrizzleAdapter } from "@core/user/Infrastructure";
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
const authService = new AuthServiceFirebaseAdapter(auth, userRepository);
const userAuthWithEmailAndPassword = new UserAuthWithEmailAndPasswordFirebaseAdapter(auth);
const productRepository: ProductRepository = new ProductRepositoryDrizzleAdapter(db);
const categoryRepository: CategoryRepository = new CategoryRepositoryDrizzleAdapter(db);
const errorHandler = new ErrorHandlerAuthFirebaseAdapter();

export const signInWithGoogle = signInWithGoogleUseCase(userAuthSignInProvider, authService);
export const getCurrentUser = getCurrentUserUseCase(authService);
export const signInWithEmailAndPassword = signInWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword, authService);
export const signUpWithEmailAndPassword = signUpAuthUserWithEmailAndPasswordUseCase(
  userAuthWithEmailAndPassword,
  authService,
);
export const signOut = signOutUserUseCase(userAuthSignOut, authService);
export const saveUserInRepository = saveUserAuthUseCase(userRepository);
export const saveAllProducts = saveAllProductsUseCase(productRepository);
export const getProducts = getProductsUseCase(productRepository);
export const getCategories = getCategoriesUseCase(categoryRepository);
export const errorAuthHandler = errorAuthHandlerUseCase(errorHandler);
