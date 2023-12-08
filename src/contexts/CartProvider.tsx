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

interface OrdersContextProviderProps {
  children: ReactNode;
}


export function CartContextProvider({ children }: OrdersContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    }, (initialState) => {
      const storageStateAsJSON = localStorage.getItem("@coffee-delivery:cart-state-1.0.0");

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON);
      }

      return initialState;
    }
  )
  
  const navigate = useNavigate()

  const { cart, orders } = cartState;

  useEffect(() => {}, [])

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

  return (
    <CartContext.Provider value={{
      cart,
      orders,
      addItem,
      removeItem,
      decrementItemQuantity,
      incrementItemQuantity,
      checkoutCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}
