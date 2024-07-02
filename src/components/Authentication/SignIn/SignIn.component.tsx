import Button from "@/components/Button/Button.component";
import FormError from "@/components/Form/FormError/FormError.components";
import FormInput from "@/components/Form/FormInput.component";
import H2 from "@/components/Heading/H2.component";
import { GlobalError } from "react-hook-form";
import { Link } from "react-router-dom";
import useSignIn from "./useSignIn.hook";

function SignInForm() {
  const {
    register,
    formState: { dirtyFields, errors, isSubmitting, isValidating },
    onSubmit,
    signInWithGoogle,
  } = useSignIn();

  return (
    <div className="max-w-96 mx-auto">
      <H2 className="text-3xl">Already have an account?</H2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
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
        <p className="mb-4">
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
  );
}

export default SignInForm;
