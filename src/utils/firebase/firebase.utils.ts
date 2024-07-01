import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  type User as UserAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvgEKxTTGOf42T_nqMsad_Hiwih3hWiHc",
  authDomain: "e-commerce-ztm-react.firebaseapp.com",
  projectId: "e-commerce-ztm-react",
  storageBucket: "e-commerce-ztm-react.appspot.com",
  messagingSenderId: "405680499412",
  appId: "1:405680499412:web:8e4212c235e09021b32941",
};

export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

interface AdditionalAuthInformation {
  displayName?: UserAuth["displayName"];
}

export const createUserDocumentFromAuth = async (
  userAuth: UserAuth,
  additionalInformation: AdditionalAuthInformation = {},
) => {
  const userDocumentReference = doc(database, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocumentReference);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocumentReference, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      const _error = error as Error;
      console.error("error creating the user", _error.message);
    }
  }

  return userDocumentReference;
};

export const createAuthUserWithEmailAndPassword = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
