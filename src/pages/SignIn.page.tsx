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
  FIREBASE_INVALID_EMAIL,
  FIREBASE_INVALID_LOGIN_CREDENTIALS,
  FIREBASE_INVALID_PASSWORD,
  FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER,
} from "@/utils/firebase/auth-error-codes.constants";
import { Link } from "react-router-dom";
import {
  MESSAGE_INVALID_LOGIN_CREDENTIALS,
  MESSAGE_TOO_MANY_ATTEMPTS_TRY_LATER,
} from "@/utils/firebase/auth-error-messages.constants";

const schema = z.object({
  email: z.string().email().default(""),
  password: z.string().min(8).default(""),
});

type SignInFormFields = z.infer<typeof schema>;

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating, dirtyFields },
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
    console.log("onSubmit");
    try {
      const response = await signInAuthUserWithEmailAndPassword(data.email, data.password);
      console.log(response);
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

  return (
    <Layout>
      <H1>Sign In</H1>
      <div className="max-w-96 mx-auto">
        <H2 className="text-3xl">Already have an account?</H2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email"
            inputAttributes={{
              ...register("email"),
            }}
            dirty={dirtyFields.email}
            error={(errors.email as GlobalError)?.message}
          />
          <FormInput
            label="Password"
            inputAttributes={{
              ...register("password"),
            }}
            dirty={dirtyFields.password}
            error={(errors.password as GlobalError)?.message}
          />
          <p className="mb-2">
            Do you not have an account?{" "}
            <Link className="underline text-blue-700" to="/signUp">
              Create one
            </Link>
          </p>
          <div className="flex gap-4 justify-between sm:flex-row flex-col">
            <Button loading={isSubmitting || isValidating} type="submit">
              Sign In
            </Button>
            <Button type="button" variant="google" onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
          {errors.root ? <FormError className="mt-3">{errors.root.message}</FormError> : <></>}
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
