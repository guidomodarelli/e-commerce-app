import Button from "@/components/Button/Button.component";
import FormInput from "@/components/Form/FormInput.component";
import H1 from "@/components/Heading/H1.component";
import H2 from "@/components/Heading/H2.component";
import Layout from "@/layouts/Layout";
import { FieldValues, GlobalError, SubmitHandler, useForm } from "react-hook-form";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "@utils/firebase/firebase.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  } = useForm<SignInFormFields>({
    resolver: zodResolver(schema),
  });

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
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
              value: watch("email"),
            }}
            error={(errors.email as GlobalError)?.message}
          />
          <FormInput
            label="Password"
            inputAttributes={{
              ...register("password"),
              value: watch("password"),
            }}
            error={(errors.password as GlobalError)?.message}
          />
          <div className="flex gap-4 justify-between">
            <Button type="submit">Sign In</Button>
            <Button type="button" variant="google" onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
