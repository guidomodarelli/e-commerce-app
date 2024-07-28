import { CartItem as CartItemType } from "@core/domain/entities";
import styles from "./cart-item.module.css";
import { formatCurrency } from "@utils/format-currency";

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
          {quantity} x {formatCurrency(price)}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
