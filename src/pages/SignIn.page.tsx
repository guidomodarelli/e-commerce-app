import SignInForm from "@/components/Authentication/SignIn/SignIn.component";
import H1 from "@/components/Heading/H1.component";
import Layout from "@/layouts/Layout";

function SignIn() {
  return (
    <Layout>
      <H1>Sign In</H1>
      <SignInForm />
    </Layout>
  );
}

export default SignIn;
