import { CartItem } from "./CartItem";
import { Product } from "./Product";

export class Cart {
  static add(cartItems: CartItem[], productToAdd: Product): CartItem[] {
    const cartItem = cartItems.find((item) => item.id === productToAdd.id);

    if (cartItem) {
      cartItem.increment();

      return [...cartItems];
    }

    return [...cartItems, new CartItem(productToAdd)];
  }

  static updateOrRemove(cartItems: CartItem[], cartItemToUpdate: Product): CartItem[] {
    const cartItem = cartItems.find((item) => item.id === cartItemToUpdate.id);

    if (cartItem) {
      cartItem.decrement();

      if (cartItem.quantity === 0) {
        return Cart.remove(cartItems, cartItemToUpdate);
      }
    }

    return [...cartItems];
  }

  static remove(cartItems: CartItem[], cartItemToRemove: Product): CartItem[] {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  static getTotalItems(cartItems: CartItem[]) {
    return cartItems.reduce((previous, current) => previous + current.quantity, 0);
  }

  static getTotalPrice(cartItems: CartItem[]) {
    return cartItems.reduce((previous, current) => previous + current.price * current.quantity, 0);
  }
}
