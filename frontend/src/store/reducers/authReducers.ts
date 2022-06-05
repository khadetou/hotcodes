import { ActionType } from "../action-types";
import { Action, User } from "../actions";

interface AuthState {
  isAuthenticated: boolean;
  success: boolean;
  loading: boolean;
  token: string;
  user: User;
  userId: User;
  users: User[];
  error: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  success: false,
  loading: true,
  token: "",
  user: null,
  userId: null,
  users: [],
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

    case ActionType.LOGIN_FAILURE:
    case ActionType.LOAD_USER_FAILURE:
      typeof window !== "undefined" && localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        user: null,
        isAuthenticated: false,
        error: action.error,
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

    case ActionType.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };

    case ActionType.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };

    case ActionType.GET_USER_SUCCESS_BY_ID:
      return {
        ...state,
        userId: action.payload.user,
        loading: false,
      };

    case ActionType.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(
          (user) => user?._id !== action.payload.user!._id
        ),
        loading: false,
      };

    case ActionType.GET_ALL_USERS_FAILURE:
    case ActionType.GET_USER_FAILURE_BY_ID:
    case ActionType.GET_ALL_ORDERWEB_FAILURE:
    case ActionType.GET_ALL_ORDERMOBILE_FAILURE:
    case ActionType.GET_ORDERWEB_BY_ID_FAILURE:
    case ActionType.GET_ORDERWEB_FAILURE:
    case ActionType.GET_ORDERDESIGN_FAILURE:
    case ActionType.GET_ORDERMOBILE_FAILURE:
    case ActionType.GET_ORDERWEB_BY_ID_FAILURE:
    case ActionType.GET_ORDERDESIGN_BY_ID_FAILURE:
    case ActionType.GET_ORDERMOBILE_BY_ID_FAILURE:
    case ActionType.DELETE_USER_FAILURE:
    case ActionType.DELETE_ORDERWEB_FAILURE:
    case ActionType.DELETE_ORDERMOBILE_FAILURE:
    case ActionType.DELETE_ORDERDESIGN_FAILURE:
    case ActionType.SEND_CONFIRMITION_EMAIL_FAILURE:
    case ActionType.RESET_PASSWORD_FAILURE:
    case ActionType.REGISTER_FAILURE:
    case ActionType.UPDATE_USER_PROFILE_FAILURE:
    case ActionType.UPDATE_ORDERWEB_FAILURE:
    case ActionType.UPDATE_ORDERMOBILE_FAILURE:
    case ActionType.UPDATE_ORDERDESIGN_FAILURE:
    case ActionType.CREATE_ORDERDESIGN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
