import { CartItem } from "@/core/domain/entities/CartItem";
import { Product } from "@/core/domain/entities/Product";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItem[];
  addItemToCart: (newItem: Product) => void;
  removeItemFromCart: (item: Product) => void;
  clearItemFromCart: (item: Product) => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => false,
  openCart: () => {},
  closeCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

interface CartProviderProps extends PropsWithChildren {}

function CartProvider({ children }: CartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addCartItem = (cartItems: CartItem[], productToAdd: Product): CartItem[] => {
    const cartItem = cartItems.find((item) => item.id === productToAdd.id);

    if (cartItem) {
      cartItem.quantity += 1;

      return [...cartItems];
    }

    return [
      ...cartItems,
      {
        ...productToAdd,
        quantity: 1,
      },
    ];
  };

  const removeCartItem = (cartItems: CartItem[], cartItemToRemove: Product): CartItem[] => {
    const cartItem = cartItems.find((item) => item.id === cartItemToRemove.id);

    if (cartItem) {
      cartItem.quantity -= 1;

      if (cartItem.quantity === 0) {
        return cartItems.filter((item) => item.id !== cartItemToRemove.id);
      }
    }

    return [...cartItems];
  };
  const clearCartItem = (cartItems: CartItem[], cartItemToClear: Product): CartItem[] => {
    return cartItems.filter((item) => item.id !== cartItemToClear.id);
  };

  const value: CartContextType = {
    isCartOpen,
    openCart() {
      setIsCartOpen(true);
    },
    closeCart() {
      setIsCartOpen(false);
    },
    setIsCartOpen,
    cartItems,
    addItemToCart(productToAdd: Product) {
      setCartItems(addCartItem(cartItems, productToAdd));
    },
    removeItemFromCart(cartItemToRemove: Product) {
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
    },
    clearItemFromCart(cartItemToRemove: Product) {
      setCartItems(clearCartItem(cartItems, cartItemToRemove));
    },
    totalItems: cartItems.reduce((previous, current) => previous + current.quantity, 0),
    totalPrice: cartItems.reduce((previous, current) => previous + current.price * current.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
