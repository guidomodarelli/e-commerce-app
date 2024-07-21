import { saveUser } from "@/setup";
import { createAuthUserWithEmailAndPassword } from "@/utils/firebase/firebase.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FIREBASE_EMAIL_EXISTS, FIREBASE_WEAK_PASSWORD } from "@utils/firebase/constants/auth-error-codes.constants";
import { MESSAGE_EMAIL_EXISTS, MESSAGE_WEAK_PASSWORD } from "@utils/firebase/constants/auth-error-messages.constants";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SignUpFormFields, schema } from "./sign-up.schema";
import { User } from "@/core/domain/entities/User";

interface FieldMessage {
  field: keyof SignUpFormFields;
  message: string;
}

const handleSignUpError = (error: FirebaseError): FieldMessage | null => {
  switch (error.code) {
    case FIREBASE_WEAK_PASSWORD:
      return { field: "password", message: MESSAGE_WEAK_PASSWORD };
    case FIREBASE_EMAIL_EXISTS:
      return { field: "email", message: MESSAGE_EMAIL_EXISTS };
    default:
      console.error(error);
      return null;
  }
};

function useSignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset, setError, getValues } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });

  const onSuccessSignUp = () => {
    reset();
    toast.success("User has been created successfully!");
    navigate("/");
  };

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(data.email, data.password);
      const user = new User({
        id: userCredential.user.uid,
        ...userCredential.user,
      });
      await saveUser(user, {
        displayName: getValues("displayName"),
      });
      onSuccessSignUp();
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorInfo = handleSignUpError(error);
        if (errorInfo) {
          const { field, message } = errorInfo;
          setError(field, { message });
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
