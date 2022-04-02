import { ActionType } from "../action-types";
import { Action, User } from "../actions";

interface AuthState {
  isAuthenticated: boolean;
  success: boolean;
  loading: boolean;
  token: string;
  user: User;
  error: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  success: false,
  loading: true,
  token: "",
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    roles: [],
  },
  error: "",
};

const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionType.REGISTER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      };
    case ActionType.LOGIN_SUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case ActionType.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ActionType.LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        error: action.error,
        token: "",
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
