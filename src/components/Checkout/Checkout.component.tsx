import { useCart } from "@/contexts/CartContext";
import CartItem from "./cart-item/CartItem.component";
import styles from "./checkout.module.css";
import { formatCurrency } from "@utils/format-currency";

interface Header {
  key: React.Key;
  title: string;
}

interface CheckoutProps {}

function Checkout({}: CheckoutProps) {
  const { cartItems, totalPrice } = useCart();

  const headers: Header[] = ["Product", "Description", "Quantity", "Unit", "SubTotal", "Remove"].map(
    (header, index) => ({
      title: header,
      key: `${header}-${index}`,
    }),
  );

  return (
    <section className={styles["checkout-container"]}>
      <div className={styles["checkout-header"]}>
        {headers.map(({ title, key }) => (
          <div key={key} className={styles["header-block"]}>
            <span>{title}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className={styles.total}>Total: {formatCurrency(totalPrice)}</span>
    </section>
  );
}

export default Checkout;
