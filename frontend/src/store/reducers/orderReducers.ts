import { ActionType } from "../action-types";
import {
  Action,
  OrderDesign,
  OrderMarketing,
  OrderMobile,
  OrderWeb,
} from "../actions";

interface OrderState {
  orderWeb: OrderWeb[];
  orderMobile: OrderMobile[];
  orderDesign: OrderDesign[];
  orderMarketing: OrderMarketing[];
  success: boolean;
  loading: boolean;
  error: string;
}

const initialState: OrderState = {
  orderWeb: [],
  orderMobile: [],
  orderDesign: [],
  orderMarketing: [],
  success: false,
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
        success: true,
        orderWeb: [...state.orderWeb, action.payload.order],
        loading: false,
      };

    case ActionType.CREATE_ORDERDESIGN_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: [...state.orderDesign, action.payload.order],
        loading: false,
      };
    case ActionType.CREATE_ORDERMOBILE_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: [...state.orderMobile, action.payload.order],
        loading: false,
      };
    case ActionType.CREATE_ORDERMARKETING_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: [...state.orderMarketing, action.payload.order],
        loading: false,
      };

      case ActionType.SET_SUCCESS:
      return {
        ...state,
        success: action.success,
      };

    case ActionType.CREATE_ORDERDESIGN_FAILURE:
    case ActionType.CREATE_ORDERMARKETING_FAILURE:
    case ActionType.CREATE_ORDERWEB_FAILURE:
    case ActionType.CREATE_ORDERMOBILE_FAILURE:
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
