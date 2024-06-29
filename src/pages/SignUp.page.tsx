// import { signInWithGooglePopup, createUserDocumentFromAuth } from "@utils/firebase/firebase.utils";
import FormInput from "@/components/Form/FormInput.component";
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
    <main>
      <h1 className="text-4xl">I do not have an account</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Display Name" register={register("displayName")} />
        <FormInput label="Email" register={register("email")} />
        <FormInput label="Password" register={register("password")} />
        <FormInput label="Confirm Password" register={register("confirm-password")} />
      </form>
    </main>
  );
}

export default SignUp;
