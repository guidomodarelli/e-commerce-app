import { CartState } from "@store/cart";
import { CartItem } from "./CartItem";
import { Product } from "./Product";

export class Cart {
  static add(cart: CartState["cart"], productToAdd: Product): CartState["cart"] {
    const cartItem = cart.find((item) => item.id === productToAdd.id);

    if (cartItem) {
      cartItem.increment();

      return [...cart];
    }

    return [...cart, new CartItem(productToAdd)];
  }

  static remove(cart: CartState["cart"], cartItemToUpdate: Product): CartState["cart"] {
    const cartItem = cart.find((item) => item.id === cartItemToUpdate.id);

    if (cartItem) {
      cartItem.decrement();

      if (cartItem.quantity === 0) {
        return Cart.drop(cart, cartItemToUpdate);
      }
    }

    return [...cart];
  }

  static drop(cart: CartState["cart"], cartItemToRemove: Product): CartState["cart"] {
    return cart.filter((item) => item.id !== cartItemToRemove.id);
  }

  static getTotalItems(cart: CartState["cart"]) {
    return cart.reduce((previous, current) => previous + current.quantity, 0);
  }

  static getTotalPrice(cart: CartState["cart"]) {
    return cart.reduce((previous, current) => previous + current.price * current.quantity, 0);
  }
}
