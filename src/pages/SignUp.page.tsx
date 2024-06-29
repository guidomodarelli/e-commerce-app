// import { signInWithGooglePopup, createUserDocumentFromAuth } from "@utils/firebase/firebase.utils";
import Button from "@/components/Button/Button.component";
import FormInput from "@/components/Form/FormInput.component";
import H1 from "@/components/Heading/H1.component";
import H2 from "@/components/Heading/H2.component";
import Layout from "@/layouts/Layout";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

// const logGoogleUser = async () => {
//   const { user } = await signInWithGooglePopup();
//   const userDocumentReference = await createUserDocumentFromAuth(user);
//   console.log(userDocumentReference);
// };

function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Layout>
      <H1>Sign Up Page</H1>
      <div className="max-w-96 mx-auto">
        <H2 className="text-3xl">I do not have an account</H2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput label="Display Name" register={register("displayName")} />
          <FormInput label="Email" register={register("email")} />
          <FormInput label="Password" register={register("password")} />
          <FormInput label="Confirm Password" register={register("confirm-password")} />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </Layout>
  );
}

export default SignUp;
