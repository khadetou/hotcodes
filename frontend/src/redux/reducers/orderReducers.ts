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
    default:
      return state;
  }
};

export default orderReducer;
