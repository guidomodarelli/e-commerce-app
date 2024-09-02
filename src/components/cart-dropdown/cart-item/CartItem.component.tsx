import { CartItem as CartItemType } from "@core/Contexts/Shop/Cart/Domain";
import styles from "./cart-item.module.css";
import { formatCurrency } from "@utils/format-currency";
import { memo } from "react";

interface CartItemProps {
  cartItem: CartItemType;
}

const CartItem = memo(function CartItem({ cartItem }: CartItemProps) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className={styles["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x {formatCurrency(price)}
        </span>
      </div>
    </div>
  );
});

export default CartItem;
