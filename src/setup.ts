import {
  CategoryRepositoryDrizzleAdapter,
  ProductRepositoryDrizzleAdapter,
  UserAuthSignOutFirebaseAdapter,
  UserAuthWithEmailAndPasswordFirebaseAdapter,
  UserFactoryFirebaseAdapter,
  UserRepositoryDrizzleAdapter,
} from "@core/adapters";
import * as schema from "@core/adapters/drizzle/schema";
import {
  getCategoriesUseCase,
  getProductsUseCase,
  saveAllProductsUseCase,
  saveAuthUserUseCase,
  signInAuthUserWithEmailAndPasswordUseCase,
  signOutUserUseCase,
  signUpAuthUserWithEmailAndPasswordUseCase,
} from "@core/domain/useCases";
import { CategoryRepository, ProductRepository, UserRepository } from "@core/ports";
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

initializeApp(firebaseConfig);
const auth = getAuth();
const turso = createClient(tursoConfig);
const db = drizzle(turso, { schema });
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const userAuthWithEmailAndPassword = new UserAuthWithEmailAndPasswordFirebaseAdapter(auth);
const userAuthSignOut = new UserAuthSignOutFirebaseAdapter(auth);
const userRepository: UserRepository = new UserRepositoryDrizzleAdapter(db);
const productRepository: ProductRepository = new ProductRepositoryDrizzleAdapter(db);
const categoryRepository: CategoryRepository = new CategoryRepositoryDrizzleAdapter(db);

export const signInWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, provider);
  return UserFactoryFirebaseAdapter.create(user);
};
export const onAuthStateChanged = (callback: NextOrObserver<User>) => onAuthStateChangedFirebase(auth, callback);
export const signInWithEmailAndPassword = signInAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signUpWithEmailAndPassword = signUpAuthUserWithEmailAndPasswordUseCase(userAuthWithEmailAndPassword);
export const signOut = signOutUserUseCase(userAuthSignOut);
export const saveUser = saveAuthUserUseCase(userRepository);
export const saveAllProducts = saveAllProductsUseCase(productRepository);
export const getProducts = getProductsUseCase(productRepository);
export const getCategories = getCategoriesUseCase(categoryRepository);
