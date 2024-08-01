import { CartState } from "@store/cart";
import { CartItem } from "./CartItem";
import { Product } from "./Product";

export class Cart {
  static add(cart: CartState["cart"], productToAdd: Product): CartState["cart"] {
    const cartItem = cart[productToAdd.id];

    if (cartItem) {
      cartItem.increment();

      return { ...cart };
    }

    return { ...cart, [productToAdd.id]: new CartItem(productToAdd) };
  }

  static remove(cart: CartState["cart"], cartItemToUpdate: Product): CartState["cart"] {
    const cartItem = cart[cartItemToUpdate.id];

    if (cartItem) {
      cartItem.decrement();

      if (cartItem.quantity === 0) {
        return Cart.drop(cart, cartItemToUpdate);
      }
    }

    return { ...cart };
  }

  static drop(cart: CartState["cart"], cartItemToRemove: Product): CartState["cart"] {
    const { id } = cartItemToRemove;
    return {
      ...cart,
      [id]: undefined,
    };
  }

  static getTotalItems(cart: CartState["cart"]) {
    return Object.values(cart).reduce((previous, current) => previous + (current?.quantity ?? 0), 0);
  }

  static getTotalPrice(cart: CartState["cart"]) {
    return Object.values(cart).reduce(
      (previous, current) => previous + (current?.price ?? 0) * (current?.quantity ?? 0),
      0,
    );
  }
}
