import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SignUpFormFields, schema } from "../components/Authentication/SignUp/sign-up.schema";
import { selectUser, signUpStart } from "@store/user";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useAuthError } from "./useAuthError.hook";

function useSignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUser, error } = useAppSelector(selectUser);
  const { register, handleSubmit, formState, setError, getValues } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });
  useAuthError({
    error,
    setError: (field, message) => {
      setError(field as keyof SignUpFormFields, { message });
    },
  });

  useEffect(() => {
    if (currentUser) {
      toast.success("User has been created successfully!");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const onSubmit: SubmitHandler<SignUpFormFields> = ({ email, password }) => {
    const displayName = getValues("displayName");
    dispatch(signUpStart(email, password, displayName));
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
}

export default useSignUp;
