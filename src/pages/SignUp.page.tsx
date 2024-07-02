import Button from "@/components/Button/Button.component";
import FormError from "@/components/Form/FormError/FormError.components";
import FormInput from "@/components/Form/FormInput.component";
import H1 from "@/components/Heading/H1.component";
import H2 from "@/components/Heading/H2.component";
import Layout from "@/layouts/Layout";
import { FIREBASE_EMAIL_EXISTS, FIREBASE_WEAK_PASSWORD } from "@/utils/firebase/auth-error-codes.constants";
import { MESSAGE_EMAIL_EXISTS, MESSAGE_WEAK_PASSWORD } from "@/utils/firebase/auth-error-messages.constants";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "@/utils/firebase/firebase.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { useForm, SubmitHandler, GlobalError } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const schema = z
  .object({
    displayName: z.string().min(3).default(""),
    email: z.string().email().default(""),
    password: z
      .string()
      .min(8)
      .max(20)
      .regex(/(?=.*\d).*/, {
        message: "Must contain a number",
      })
      .regex(/(?=.*[a-z]).*/, {
        message: "Must contain a lowercase letter",
      })
      .regex(/(?=.*[A-Z]).*/, {
        message: "Must contain a uppercase letter",
      })
      .default(""),
    confirmPassword: z.string().default(""),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

type SignUpFormFields = z.infer<typeof schema>;

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
    handleSubmit,
    formState: { errors, isSubmitting, isValidating, dirtyFields },
    reset,
    setError,
    getValues,
  } = useForm<SignUpFormFields>({
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
      <H1>Create new account</H1>
      <div className="max-w-96 mx-auto">
        <H2 className="text-3xl">I do not have an account</H2>
        <p>Sign up with your email and password</p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
    </Layout>
  );
}

export default SignUp;
