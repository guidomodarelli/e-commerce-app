import {
  FIREBASE_INVALID_EMAIL,
  FIREBASE_INVALID_LOGIN_CREDENTIALS,
  FIREBASE_INVALID_PASSWORD,
  FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER,
} from "@utils/firebase/constants/auth-error-codes.constants";
import {
  MESSAGE_INVALID_LOGIN_CREDENTIALS,
  MESSAGE_TOO_MANY_ATTEMPTS_TRY_LATER,
} from "@utils/firebase/constants/auth-error-messages.constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { saveUser, signInWithEmailAndPassword, signInWithGoogle } from "@/setup";
import { User } from "@core/domain/entities";
const schema = z.object({
  email: z.string().email().default(""),
  password: z.string().min(8).default(""),
});

type SignInFormFields = z.infer<typeof schema>;

const handleFirebaseError = (error: FirebaseError) => {
  switch (error.code) {
    case FIREBASE_INVALID_PASSWORD:
    case FIREBASE_INVALID_EMAIL:
    case FIREBASE_INVALID_LOGIN_CREDENTIALS:
      return MESSAGE_INVALID_LOGIN_CREDENTIALS;
    case FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER:
      return MESSAGE_TOO_MANY_ATTEMPTS_TRY_LATER;
    default:
      return null;
  }
};

function useSignInForm() {
  const navigate = useNavigate();
  const { register, reset, setError, handleSubmit, formState } = useForm<SignInFormFields>({
    resolver: zodResolver(schema),
  });

  const onSuccessSignIn = () => {
    reset();
    toast.success("You are logged in successfully!");
    navigate("/");
  };

  const signInWithGoogleHandler = async () => {
    const userCredential = await signInWithGoogle();
    const user = new User({
      id: userCredential.user.uid,
      ...userCredential.user,
    });
    await saveUser(user);
    onSuccessSignIn();
  };

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      await signInWithEmailAndPassword(data.email, data.password);
      onSuccessSignIn();
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseError(error);
        if (errorMessage) setError("root", { message: errorMessage });
      } else {
        console.error(error);
      }
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
    signInWithGoogle: signInWithGoogleHandler,
  };
}

export default useSignInForm;
