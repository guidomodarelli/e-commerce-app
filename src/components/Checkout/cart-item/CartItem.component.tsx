import { CartItem as CartItemType } from "@core/domain/entities";
import styles from "./cart-item.module.css";
import { formatCurrency } from "@utils/format-currency";
import { useDispatch } from "react-redux";
import { useCart } from "@store/cart";

interface CartItemProps {
  cartItem: CartItemType;
}

function CartItem({ cartItem }: CartItemProps) {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const { addItemToCart, removeItemFromCart, dropItemFromCart } = useCart(dispatch);

  const clearItemHandler = () => {
    dropItemFromCart(cartItem);
  };

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <article className={styles["checkout-item-container"]}>
      <picture className={styles["image-container"]}>
        <img src={imageUrl} alt={name} />
      </picture>
      <span className={styles.name}>{name}</span>
      <div className={styles.quantity}>
        <div className={styles.arrow} onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <span className={styles.price}>{formatCurrency(price)}</span>
      <span className={styles.price}>{formatCurrency(price * quantity)}</span>
      <div className={styles["remove-button"]} onClick={clearItemHandler}>
        &#10005;
      </div>
    </article>
  );
}

export default CartItem;
