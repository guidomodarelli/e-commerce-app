import { CartContext } from "@/contexts/Cart.context";
import { useContext } from "react";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
