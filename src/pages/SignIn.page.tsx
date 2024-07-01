import Button from "@/components/Button/Button.component";
import FormInput from "@/components/Form/FormInput.component";
import H1 from "@/components/Heading/H1.component";
import H2 from "@/components/Heading/H2.component";
import Layout from "@/layouts/Layout";
import { GlobalError, SubmitHandler, useForm } from "react-hook-form";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "@utils/firebase/firebase.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FirebaseError } from "firebase/app";
import FormError from "@/components/Form/FormError/FormError.components";
import {
  INVALID_EMAIL,
  INVALID_LOGIN_CREDENTIALS,
  INVALID_PASSWORD,
} from "@/utils/firebase/auth-error-codes.constants";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email().default(""),
  password: z.string().min(8).default(""),
});

type SignInFormFields = z.infer<typeof schema>;

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setError,
  } = useForm<SignInFormFields>({
    resolver: zodResolver(schema),
  });

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    reset();
  };

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(data.email, data.password);
      console.log(response);
      reset();
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case INVALID_PASSWORD:
          case INVALID_EMAIL:
          case INVALID_LOGIN_CREDENTIALS: {
            setError("root", {
              message: "Incorrect email or password. Please try again with different credentials.",
            });
            break;
          }
          default: {
            console.log("FirebaseError:", error);
          }
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Layout>
      <H1 className="text-4xl">Sign In Page</H1>
      <div className="max-w-96 mx-auto">
        <H2 className="text-3xl">Already have an account?</H2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email"
            inputAttributes={{
              ...register("email"),
            }}
            value={watch("email")}
            error={(errors.email as GlobalError)?.message}
          />
          <FormInput
            label="Password"
            inputAttributes={{
              ...register("password"),
            }}
            value={watch("password")}
            error={(errors.password as GlobalError)?.message}
          />
          <p className="mb-2">
            Do you not have an account?{" "}
            <Link className="underline text-blue-700" to="/signUp">
              Create one
            </Link>
          </p>
          <div className="flex gap-4 justify-between">
            <Button type="submit">Sign In</Button>
            <Button type="button" variant="google" onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
          {errors.root && <FormError className="mt-3">{errors.root.message}</FormError>}
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
