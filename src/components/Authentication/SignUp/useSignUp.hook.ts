import { FIREBASE_EMAIL_EXISTS, FIREBASE_WEAK_PASSWORD } from "@/utils/firebase/auth-error-codes.constants";
import { MESSAGE_EMAIL_EXISTS, MESSAGE_WEAK_PASSWORD } from "@/utils/firebase/auth-error-messages.constants";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "@/utils/firebase/firebase.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormFields, schema } from "./sign-up.schema";

function useSignUp() {
  const { register, handleSubmit, formState, reset, setError, getValues } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data: SignUpFormFields) => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(data.email, data.password);
      await createUserDocumentFromAuth(user, {
        displayName: getValues("displayName"),
      });
      reset();
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case FIREBASE_WEAK_PASSWORD: {
            setError("password", {
              message: MESSAGE_WEAK_PASSWORD,
            });
            break;
          }
          case FIREBASE_EMAIL_EXISTS: {
            setError("email", {
              message: MESSAGE_EMAIL_EXISTS,
            });
            break;
          }
          default: {
            console.error(error);
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
  };
}

export default useSignUp;
