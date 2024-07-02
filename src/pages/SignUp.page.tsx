import SignUpForm from "@/components/Authentication/SignUp/SignUpForm.component";
import H1 from "@/components/Heading/H1.component";
import Layout from "@/layouts/Layout";

function SignUp() {
  return (
    <Layout>
      <H1>Create new account</H1>
      <SignUpForm />
    </Layout>
  );
}

export default SignUp;
