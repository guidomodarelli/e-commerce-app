import H1 from "@/components/Heading/H1.component";
import Shop from "@/components/shop/Shop.component";
import Layout from "@/layouts/Layout";

interface ShopProps {}

function ShopPage({}: ShopProps) {
  return (
    <Layout>
      <H1>Shop</H1>
      <Shop />
    </Layout>
  );
}

export default ShopPage;
