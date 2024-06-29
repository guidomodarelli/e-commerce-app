import Button from "@/components/Button/Button.component";
import FormInput from "@/components/Form/FormInput.component";
import H1 from "@/components/Heading/H1.component";
import H2 from "@/components/Heading/H2.component";
import Layout from "@/layouts/Layout";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { signInWithGooglePopup, createUserDocumentFromAuth } from "@utils/firebase/firebase.utils";

// const logGoogleUser = async () => {
//   const { user } = await signInWithGooglePopup();
//   const userDocumentReference = await createUserDocumentFromAuth(user);
//   console.log(userDocumentReference);
// };

function SignIn() {
  const { register, handleSubmit } = useForm();

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
          <FormInput label="Email" register={register("email")} />
          <FormInput label="Password" register={register("password")} />
          <div className="flex gap-2">
            <Button type="submit">Sign In</Button>
            <Button variant="google">Sign In with Google</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
