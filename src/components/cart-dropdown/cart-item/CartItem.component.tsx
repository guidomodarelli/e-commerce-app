import { CartItem as CartItemType } from "@core/domain/entities";
import styles from "./cart-item.module.css";

interface CartItemProps {
  cartItem: CartItemType;
}

function CartItem({ cartItem }: CartItemProps) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className={styles["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x{" "}
          {Intl.NumberFormat("EN-en", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
