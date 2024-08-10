import { zodResolver } from "@hookform/resolvers/zod";
import { FIREBASE_EMAIL_EXISTS, FIREBASE_WEAK_PASSWORD } from "@utils/firebase/constants/auth-error-codes.constants";
import { MESSAGE_EMAIL_EXISTS, MESSAGE_WEAK_PASSWORD } from "@utils/firebase/constants/auth-error-messages.constants";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SignUpFormFields, schema } from "../components/Authentication/SignUp/sign-up.schema";
import { selectUser, signUpStart } from "@store/user";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/store";

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
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectUser);
  const { register, handleSubmit, formState, setError, getValues } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (currentUser) {
      toast.success("User has been created successfully!");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const onSubmit: SubmitHandler<SignUpFormFields> = ({ email, password }) => {
    try {
      const displayName = getValues("displayName");
      dispatch(signUpStart(email, password, displayName));
      // FIXME don't catch errors
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
