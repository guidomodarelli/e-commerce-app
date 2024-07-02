import H1 from "@/components/Heading/H1.component";
import Layout from "@/layouts/Layout";
import { Link } from "react-router-dom";

interface Page404Props {}

function Page404({}: Page404Props) {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <H1>Page not found!</H1>
        <Link to={"/"} className="underline text-blue-600">
          Go to home
        </Link>
      </div>
    </Layout>
  );
}

export default Page404;
