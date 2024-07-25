import { CartItem } from "@core/domain/entities/CartItem";
import { Product } from "@core/domain/entities/Product";
import { PropsWithChildren, Reducer, createContext, useContext, useReducer } from "react";
import { CartState, INITIAL_STATE } from "./CartState";

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

const SET_CART_IS_OPEN = "SET_CART_IS_OPEN";
const SET_CART_IS_CLOSE = "SET_CART_IS_CLOSE";
const SET_CART_ITEMS = "SET_CART_ITEMS";

type CartAction =
  | Action<typeof SET_CART_IS_OPEN>
  | Action<typeof SET_CART_IS_CLOSE>
  | ActionPayload<typeof SET_CART_ITEMS, Pick<CartState, "cartItems" | "totalPrice" | "totalItems">>;

const cartReducer: Reducer<CartState, CartAction> = (state, action) => {
  const { type } = action;
  switch (type) {
    case SET_CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: true,
      };
    case SET_CART_IS_CLOSE:
      return {
        ...state,
        isCartOpen: false,
      };
    case SET_CART_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

interface CartProviderProps extends PropsWithChildren {}

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItems = (newCartItems: CartItem[]) => {
    const newTotalItems = newCartItems.reduce((previous, current) => previous + current.quantity, 0);
    const newTotalPrice = newCartItems.reduce((previous, current) => previous + current.price * current.quantity, 0);

    dispatch({
      type: SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice,
      },
    });
  };

  const value: CartContextType = {
    ...state,
    openCart() {
      dispatch({ type: SET_CART_IS_OPEN });
    },
    closeCart() {
      dispatch({ type: SET_CART_IS_CLOSE });
    },
    addItemToCart(productToAdd: Product) {
      const newCartItems = addCartItem(state.cartItems, productToAdd);
      updateCartItems(newCartItems);
    },
    removeItemFromCart(cartItemToRemove: Product) {
      const newCartItems = removeCartItem(state.cartItems, cartItemToRemove);
      updateCartItems(newCartItems);
    },
    clearItemFromCart(cartItemToClear: Product) {
      const newCartItems = clearCartItem(state.cartItems, cartItemToClear);
      updateCartItems(newCartItems);
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
