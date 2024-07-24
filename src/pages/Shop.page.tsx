import H1 from "@/components/Heading/H1.component";
import Shop from "@/components/shop/Shop.component";
import Layout from "@/layouts/Layout";
import { Link } from "react-router-dom";

interface ShopProps {}

function ShopPage({}: ShopProps) {
  return (
    <Layout>
      <Link to={"/shop"}>
        <H1>Shop</H1>
      </Link>
      <Shop />
    </Layout>
  );
}

export default ShopPage;
