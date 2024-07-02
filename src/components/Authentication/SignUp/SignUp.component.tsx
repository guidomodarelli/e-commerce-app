import Button from "@/components/Button/Button.component";
import FormError from "@/components/Form/FormError/FormError.components";
import FormInput from "@/components/Form/FormInput.component";
import H2 from "@/components/Heading/H2.component";
import { GlobalError } from "react-hook-form";
import { Link } from "react-router-dom";
import { SignUpFormFields } from "./sign-up.schema";
import useSignUp from "./useSignUp.hook";

interface FormFields {
  label: string;
  value: keyof SignUpFormFields;
}

const formFields: FormFields[] = [
  {
    label: "Display Name",
    value: "displayName",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Password",
    value: "password",
  },
  {
    label: "Confirm password",
    value: "confirmPassword",
  },
];

function SignUp() {
  const {
    register,
    onSubmit,
    formState: { dirtyFields, errors, isSubmitting, isValidating },
  } = useSignUp();

  return (
    <div className="max-w-96 mx-auto">
      <H2 className="text-3xl">I do not have an account</H2>
      <p>Sign up with your email and password</p>
      <form onSubmit={onSubmit}>
        {formFields.map(({ value, label }) => (
          <FormInput
            key={value}
            label={label}
            inputAttributes={{ ...register(value) }}
            dirty={dirtyFields[value]}
            error={(errors[value] as GlobalError)?.message}
          />
        ))}
        <p className="mb-4">
          Already have an account?{" "}
          <Link className="underline text-blue-700" to="/signIn">
            Login
          </Link>
        </p>
        <div>
          <Button loading={isSubmitting || isValidating} type="submit">
            Sign Up
          </Button>
        </div>
        {errors.root ? <FormError className="mt-3">{errors.root.message}</FormError> : <></>}
      </form>
    </div>
  );
}

export default SignUp;
