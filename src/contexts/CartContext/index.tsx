import { CartItem } from "@core/domain/entities/CartItem";
import { Product } from "@core/domain/entities/Product";
import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import { INITIAL_STATE } from "./CartState";
import { SET_CART_IS_CLOSE, SET_CART_IS_OPEN, SET_CART_ITEMS } from "./CartAction";
import { cartReducer } from "./CartReducer";

interface CartContextType {
  isCartOpen: boolean;
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
  openCart: () => {},
  closeCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

export const useCart = () => {
  return useContext(CartContext);
};

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

interface CartProviderProps extends PropsWithChildren {}

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const value: CartContextType = {
    ...state,
    openCart() {
      dispatch({ type: SET_CART_IS_OPEN });
    },
    closeCart() {
      dispatch({ type: SET_CART_IS_CLOSE });
    },
    addItemToCart(productToAdd: Product) {
      dispatch({ type: SET_CART_ITEMS, payload: addCartItem(state.cartItems, productToAdd) });
    },
    removeItemFromCart(cartItemToRemove: Product) {
      dispatch({ type: SET_CART_ITEMS, payload: removeCartItem(state.cartItems, cartItemToRemove) });
    },
    clearItemFromCart(cartItemToClear: Product) {
      dispatch({ type: SET_CART_ITEMS, payload: clearCartItem(state.cartItems, cartItemToClear) });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
