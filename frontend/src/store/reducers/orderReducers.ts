import { ActionType } from "../action-types";
import { Action, OrderDesign, OrderMobile, OrderWeb } from "../actions";

interface OrderState {
  orderWeb: OrderWeb[];
  orderMobile: OrderMobile[];
  orderDesign: OrderDesign[];
  loading: boolean;
  error: string;
}

const initialState: OrderState = {
  orderWeb: [],
  orderMobile: [],
  orderDesign: [],
  loading: false,
  error: "",
};

const orderReducer = (
  state: OrderState = initialState,
  action: Action
): OrderState => {
  switch (action.type) {
    case ActionType.CREATE_ORDERWEB_SUCCESS:
      return {
        ...state,
        orderWeb: [...state.orderWeb, action.payload.order],
        loading: false,
      };
    case ActionType.CREATE_ORDERWEB_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default orderReducer;
