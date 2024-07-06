import { CartItem } from "@/global/types/cart-item.types";
import { Product } from "@/global/types/products.types";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItem[];
  addItemToCart: (newItem: Product) => void;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => false,
  openCart: () => {},
  closeCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

interface CartProviderProps extends PropsWithChildren {}

function CartProvider({ children }: CartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addCartItem = (cartItems: CartItem[], productToAdd: Product): CartItem[] => {
    const cartItemIndex = cartItems.findIndex((item) => item.id === productToAdd.id);

    if (cartItemIndex !== -1) {
      const cartItem = cartItems[cartItemIndex];

      cartItems[cartItemIndex] = {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
