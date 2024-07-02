import {
  FIREBASE_INVALID_EMAIL,
  FIREBASE_INVALID_LOGIN_CREDENTIALS,
  FIREBASE_INVALID_PASSWORD,
  FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER,
} from "@/utils/firebase/auth-error-codes.constants";
import {
  MESSAGE_INVALID_LOGIN_CREDENTIALS,
  MESSAGE_TOO_MANY_ATTEMPTS_TRY_LATER,
} from "@/utils/firebase/auth-error-messages.constants";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "@/utils/firebase/firebase.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().default(""),
  password: z.string().min(8).default(""),
});

type SignInFormFields = z.infer<typeof schema>;

function useSignIn() {
  const { register, reset, setError, handleSubmit, formState } = useForm<SignInFormFields>({
    resolver: zodResolver(schema),
  });

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    reset();
  };

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      await signInAuthUserWithEmailAndPassword(data.email, data.password);
      reset();
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case FIREBASE_INVALID_PASSWORD:
          case FIREBASE_INVALID_EMAIL:
          case FIREBASE_INVALID_LOGIN_CREDENTIALS: {
            setError("root", {
              message: MESSAGE_INVALID_LOGIN_CREDENTIALS,
            });
            break;
          }
          case FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER: {
            setError("root", {
              message: MESSAGE_TOO_MANY_ATTEMPTS_TRY_LATER,
            });
            break;
          }
          default: {
            console.error("FirebaseError:", error);
          }
        }
      } else {
        console.error(error);
      }
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
    signInWithGoogle,
  };
}

export default useSignIn;
