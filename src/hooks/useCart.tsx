// Strategic Imports
import { useContext } from "react";

// Context Imports
import { CartContext } from "../contexts/CartProvider";

export function useCart() {
  return useContext(CartContext);
}
