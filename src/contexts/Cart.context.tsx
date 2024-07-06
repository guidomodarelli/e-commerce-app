import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  openCart: () => void;
  closeCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => false,
  openCart: () => {},
  closeCart: () => {},
});

interface CartProviderProps extends PropsWithChildren {}

function CartProvider({ children }: CartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const value = {
    isCartOpen,
    openCart: () => {
      setIsCartOpen(true);
    },
    closeCart: () => {
      setIsCartOpen(false);
    },
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
