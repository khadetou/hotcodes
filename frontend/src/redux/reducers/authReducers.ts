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
  user: null,
  error: "",
};

const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionType.REGISTER_SUCCESS:
    case ActionType.UPDATE_USER_PROFILE_SUCCESS:
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
    case ActionType.UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ActionType.LOGIN_FAILURE:
    case ActionType.LOAD_USER_FAILURE:
      typeof window !== "undefined" && localStorage.removeItem("token");
      return {
        ...state,
        error: action.error,
        token: "",
        loading: false,
        user: null,
      };

    case ActionType.LOGOUT_SUCCESS:
      typeof window !== "undefined" && localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        user: null,
        isAuthenticated: false,
      };

    case ActionType.LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case ActionType.SET_SUCCESS:
      return {
        ...state,
        success: action.success,
      };

    case ActionType.SEND_CONFIRMITION_EMAIL_SUCCESS:
      return {
        ...state,
        success: true,
        token: action.message,
        loading: false,
      };

    case ActionType.SEND_CONFIRMITION_EMAIL_FAILURE:
    case ActionType.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ActionType.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
