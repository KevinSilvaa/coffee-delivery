// Strategic Imports
import { produce } from "immer";
import { ActionTypes, Actions } from "./action";
import { NewOrderFormData} from "../../pages/Cart"

export interface Item {
  id: string;
  quantity: number;
}

export interface Order extends NewOrderFormData {
  id: number;
  items: Item[];
}

interface CartState {
  cart: Item[];
  orders: Order[];
}

export function cartReducer(state: CartState, action: Actions) {
  switch(action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const isItemAlreadyAdded = draft.cart.find(
          item => item.id === action.payload.item.id
        );

        isItemAlreadyAdded 
        ? 
        isItemAlreadyAdded.quantity += action.payload.item.quantity
        :
        draft.cart.push(action.payload.item);
      });

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemIdToRemove = draft.cart.findIndex(
          item => item.id === action.payload.itemId
        );

        draft.cart.splice(itemIdToRemove, 1);
      });

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrementQuantity = draft.cart.find(
          item => item.id === action.payload.itemId
        );

        if (itemToIncrementQuantity?.id) {
          itemToIncrementQuantity.quantity += 1;
        }
      });

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrementQuantity = draft.cart.find(
          item => item.id === action.payload.itemId
        )

        if (itemToDecrementQuantity?.id && itemToDecrementQuantity.quantity > 1) {
          itemToDecrementQuantity.quantity -= 1;
        }
      });

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }

        draft.orders.push(newOrder);
        draft.cart = [];

        action.payload.callback(`/order/${newOrder.id}/success`);
      });

    default:
      return state
  }
}
