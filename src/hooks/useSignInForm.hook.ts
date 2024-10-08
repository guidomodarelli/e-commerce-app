import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { emailSignInStart, googleSignInStart, selectUser } from "@store/user";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useAuthError } from "./useAuthError.hook";

const schema = z.object({
  email: z.string().email().default(""),
  password: z.string().min(8).default(""),
});

type SignInFormFields = z.infer<typeof schema>;

function useSignInForm() {
  const dispatch = useAppDispatch();
  const { currentUser, error } = useAppSelector(selectUser);
  const navigate = useNavigate();
  const {
    register,
    setError: setFormError,
    handleSubmit,
    formState,
  } = useForm<SignInFormFields>({
    resolver: zodResolver(schema),
  });

  const setError = useCallback(
    (field: string, message: string) => {
      setFormError(field as keyof SignInFormFields, { message });
    },
    [setFormError],
  );

  useAuthError({ error, setError });

  useEffect(() => {
    if (currentUser) {
      toast.success("You are logged in successfully!");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const signInWithGoogleHandler = () => {
    dispatch(googleSignInStart());
  };

  const onSubmit: SubmitHandler<SignInFormFields> = ({ email, password }) => {
    dispatch(emailSignInStart(email, password));
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
    signInWithGoogle: signInWithGoogleHandler,
  };
}

export default useSignInForm;
