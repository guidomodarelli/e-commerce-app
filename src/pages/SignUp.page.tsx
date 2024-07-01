import Button from "@/components/Button/Button.component";
import FormError from "@/components/Form/FormError/FormError.components";
import FormInput from "@/components/Form/FormInput.component";
import H1 from "@/components/Heading/H1.component";
import H2 from "@/components/Heading/H2.component";
import Layout from "@/layouts/Layout";
import { EMAIL_EXISTS, WEAK_PASSWORD } from "@/utils/firebase/auth-error-codes.constants";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "@/utils/firebase/firebase.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { useForm, SubmitHandler, GlobalError } from "react-hook-form";
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

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
          case WEAK_PASSWORD: {
            setError("password", {
              message: "The password provided is too weak",
            });
            break;
          }
          case EMAIL_EXISTS: {
            setError("email", {
              message: "The account already exists for this email",
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
      <H1>Sign Up Page</H1>
      <div className="max-w-96 mx-auto">
        <H2 className="text-3xl">I do not have an account</H2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Display Name"
            inputAttributes={{ ...register("displayName") }}
            value={watch("displayName")}
            error={(errors.displayName as GlobalError)?.message}
          />
          <FormInput
            label="Email"
            inputAttributes={{ ...register("email") }}
            value={watch("email")}
            error={(errors.email as GlobalError)?.message}
          />
          <FormInput
            label="Password"
            inputAttributes={{ ...register("password") }}
            value={watch("password")}
            error={(errors.password as GlobalError)?.message}
          />
          <FormInput
            label="Confirm Password"
            inputAttributes={{ ...register("confirmPassword") }}
            value={watch("confirmPassword")}
            error={(errors.confirmPassword as GlobalError)?.message}
          />
          <div className="flex justify-end">
            <Button type="submit">Sign Up</Button>
          </div>
          {errors.root && <FormError className="mt-3">{errors.root.message}</FormError>}
        </form>
      </div>
    </Layout>
  );
}

export default SignUp;
