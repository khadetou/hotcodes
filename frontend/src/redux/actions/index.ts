import { ActionType } from "../action-types";

export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  roles: string[];
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
} | null;

interface RegisterSuccessAction {
  type: ActionType.REGISTER_SUCCESS;
}

interface RegisterFailureAction {
  type: ActionType.REGISTER_FAILURE;
  error: string;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    token: string;
    user: User;
  };
}

interface LoginFailureAction {
  type: ActionType.LOGIN_FAILURE;
  error: string;
}

interface LogoutSuccessAction {
  type: ActionType.LOGOUT_SUCCESS;
}

interface SetSuccessAction {
  type: ActionType.SET_SUCCESS;
  success: boolean;
}

export type Action =
  | RegisterSuccessAction
  | RegisterFailureAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutSuccessAction
  | SetSuccessAction;
