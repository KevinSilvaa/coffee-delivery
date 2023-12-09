// Strategic Imports
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  addItemAction,
  removeItemAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  checkoutCartAction,
} from "../reducers/cart/action";
import { cartReducer, Item, Order } from "../reducers/cart/reducer";
import { NewOrderFormData } from "../pages/Cart";

interface CartContextType {
  cart: Item[];
  orders: Order[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item["id"]) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  checkoutCart: (order: NewOrderFormData) => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}


export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    }, (initialState) => {
      const storedStateAsJSON = localStorage.getItem("@coffee-delivery:cart-state-1.0.0");

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    },
  )

  const navigate = useNavigate()

  const { cart, orders } = cartState;

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item["id"]) {
    dispatch(removeItemAction(itemId));
  }

  function incrementItemQuantity(itemId: Item["id"]) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: Item["id"]) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  function checkoutCart(order: NewOrderFormData) {
    dispatch(checkoutCartAction(order, navigate));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        removeItem,
        decrementItemQuantity,
        incrementItemQuantity,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
