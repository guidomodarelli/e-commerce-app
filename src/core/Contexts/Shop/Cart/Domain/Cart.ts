import { OmitStrict } from "@core/Contexts/Shared/Domain/OmitStrict";
import { CartItem } from "./CartItem";

type CartItemRequest = OmitStrict<CartItem, "quantity">;

export class Cart {
  static add(cart: CartItem[], productToAdd: CartItemRequest): CartItem[] {
    let cartItem = cart.find((item) => item.id === productToAdd.id);

    if (cartItem) {
      cartItem.quantity += 1;

      return [...cart];
    } else {
      cartItem = {
        ...productToAdd,
        quantity: 1,
      };
    }

    return [...cart, cartItem];
  }

  static remove(cart: CartItem[], cartItemToUpdate: CartItemRequest): CartItem[] {
    const cartItem = cart.find((item) => item.id === cartItemToUpdate.id);

    if (cartItem) {
      cartItem.quantity -= 1;

      if (cartItem.quantity === 0) {
        return Cart.drop(cart, cartItemToUpdate);
      }
    }

    return [...cart];
  }

  static drop(cart: CartItem[], cartItemToRemove: CartItemRequest): CartItem[] {
    return cart.filter((item) => item.id !== cartItemToRemove.id);
  }

  static getTotalItems(cart: CartItem[]) {
    return cart.reduce((previous, current) => previous + current.quantity, 0);
  }

  static getTotalPrice(cart: CartItem[]) {
    return cart.reduce((previous, current) => previous + current.price * current.quantity, 0);
  }
}
