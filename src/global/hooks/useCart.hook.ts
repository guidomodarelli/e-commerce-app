import { CartContext } from "@global/contexts/Cart.context";
import { useContext } from "react";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
