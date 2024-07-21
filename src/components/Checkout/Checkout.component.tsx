import { useCart } from "@global/contexts/Cart.context";
import CartItem from "./cart-item/CartItem.component";
import "./checkout.styles.css";

interface CheckoutProps {}

function Checkout({}: CheckoutProps) {
  const { cartItems, totalPrice } = useCart();

  return (
    <section className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Unit</span>
        </div>
        <div className="header-block">
          <span>SubTotal</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
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
