import SignUpForm from "@/components/Authentication/SignUp/SignUpForm.component";
import UserNotAuthenticated from "@/components/Authentication/UserNotAuthenticated/UserNotAuthenticated.component";
import H1 from "@/components/Heading/H1.component";
import Layout from "@/layouts/Layout";

function SignUp() {
  return (
    <UserNotAuthenticated>
      <Layout>
        <H1>Create new account</H1>
        <SignUpForm />
      </Layout>
    </UserNotAuthenticated>
  );
}

export default SignUp;
