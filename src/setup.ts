import {
  errorAuthHandlerUseCase,
  signInWithEmailAndPasswordUseCase,
  signInWithGoogleUseCase,
  signOutUserUseCase,
  signUpAuthUserWithEmailAndPasswordUseCase,
} from "@core/Contexts/Shop/Auth/Application";
import {
  AuthServiceFirebaseAdapter,
  ErrorHandlerAuthFirebaseAdapter,
  UserAuthSignInProviderFirebaseAdapter,
  UserAuthSignOutFirebaseAdapter,
  UserAuthWithEmailAndPasswordFirebaseAdapter,
} from "@core/Contexts/Shop/Auth/Infrastructure/firebase";
import { schema } from "@core/Contexts/Shop/Shared/Infrastructure/drizzle";
import { getCurrentUserUseCase, saveUserUseCase } from "@core/Contexts/Shop/User/Application";
import { UserRepository } from "@core/Contexts/Shop/User/Domain";
import { UserRepositoryDrizzleAdapter } from "@core/Contexts/Shop/User/Infrastructure";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig, tursoConfig } from "./config";
import { getProductsUseCase } from "@core/Contexts/Shop/Product/Application";
import { getCategoriesUseCase } from "@core/Contexts/Shop/Category/Application";
import { ProductRepositoryDrizzleAdapter } from "@core/Contexts/Shop/Product/Infrastructure";
import { CategoryRepositoryDrizzleAdapter } from "@core/Contexts/Shop/Category/Infrastructure";
import { ProductRepository } from "@core/Contexts/Shop/Product/Domain";
import { CategoryRepository } from "@core/Contexts/Shop/Category/Domain";

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
export const saveUser = saveUserUseCase(userRepository);
export const getProducts = getProductsUseCase(productRepository);
export const getCategories = getCategoriesUseCase(categoryRepository);
export const errorAuthHandler = errorAuthHandlerUseCase(errorHandler);
