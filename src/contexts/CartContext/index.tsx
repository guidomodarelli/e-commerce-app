import { Cart, CartItem, Product } from "@core/domain/entities";
import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import { SET_CART_IS_CLOSE, SET_CART_IS_OPEN, SET_CART_ITEMS } from "./CartAction";
import { cartReducer } from "./CartReducer";
import { INITIAL_STATE } from "./CartState";

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
      dispatch({ type: SET_CART_ITEMS, payload: Cart.add(state.cartItems, productToAdd) });
    },
    removeItemFromCart(cartItemToUpdate: Product) {
      dispatch({ type: SET_CART_ITEMS, payload: Cart.updateOrRemove(state.cartItems, cartItemToUpdate) });
    },
    clearItemFromCart(cartItemToRemove: Product) {
      dispatch({ type: SET_CART_ITEMS, payload: Cart.remove(state.cartItems, cartItemToRemove) });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
