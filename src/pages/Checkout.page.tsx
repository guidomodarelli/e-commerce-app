import Checkout from "@/components/Checkout/Checkout.component";
import H1 from "@/components/Heading/H1.component";
import Layout from "@/layouts/Layout";

interface CheckoutPageProps {}

function CheckoutPage({}: CheckoutPageProps) {
  return (
    <Layout>
      <H1>Checkout</H1>
      <Checkout />
    </Layout>
  );
}

export default CheckoutPage;
