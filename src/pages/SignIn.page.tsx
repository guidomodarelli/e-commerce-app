import SignInForm from "@/components/Authentication/SignIn/SignInForm.component";
import UserNotAuthenticated from "@/components/Authentication/UserNotAuthenticated/UserNotAuthenticated.component";
import H1 from "@/components/Heading/H1.component";
import Layout from "@/layouts/Layout";

function SignIn() {
  return (
    <UserNotAuthenticated>
      <Layout>
        <H1>Sign In</H1>
        <SignInForm />
      </Layout>
    </UserNotAuthenticated>
  );
}

export default SignIn;
