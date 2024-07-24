import { useCart } from "@/contexts/Cart.context";
import CartItem from "./cart-item/CartItem.component";
import "./checkout.styles.css";

interface CheckoutProps {}

function Checkout({}: CheckoutProps) {
  const { cartItems, totalPrice } = useCart();

  const headers: string[] = ["Product", "Description", "Quantity", "Unit", "SubTotal", "Remove"];

  return (
    <section className="checkout-container">
      <div className="checkout-header">
        {headers.map((header, index) => (
          <div key={`${header}-${index.toString()}`} className="header-block">
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">
        Total:{" "}
        {Intl.NumberFormat("EN-en", {
          style: "currency",
          currency: "USD",
        }).format(totalPrice)}
      </span>
    </section>
  );
}

export default Checkout;
