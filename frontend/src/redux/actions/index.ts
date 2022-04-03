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

interface UpdateUserProfileSuccessAction {
  type: ActionType.UPDATE_USER_PROFILE_SUCCESS;
}
interface UpdateUserProfileFailureAction {
  type: ActionType.UPDATE_USER_PROFILE_FAILURE;
  error: string;
}

interface LoadUserSuccessAction {
  type: ActionType.LOAD_USER;
  payload: {
    user: User;
  };
}

interface LoadUserFaillureAction {
  type: ActionType.LOAD_USER_FAILURE;
  error: string;
}

interface LogoutSuccessAction {
  type: ActionType.LOGOUT_SUCCESS;
}

interface SetSuccessAction {
  type: ActionType.SET_SUCCESS;
  success: boolean;
}

interface SendConfirmationEmailSuccessAction {
  type: ActionType.SEND_CONFIRMITION_EMAIL_SUCCESS;
  message: string;
}

interface SendConfirmationEmailFailureAction {
  type: ActionType.SEND_CONFIRMITION_EMAIL_FAILURE;
  error: string;
}

interface ResetPasswordSuccessAction {
  type: ActionType.RESET_PASSWORD_SUCCESS;
  payload: {
    user: User;
  };
}

interface ResetPasswordFailureAction {
  type: ActionType.RESET_PASSWORD_FAILURE;
  error: string;
}

export type Action =
  | RegisterSuccessAction
  | RegisterFailureAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutSuccessAction
  | LoadUserSuccessAction
  | LoadUserFaillureAction
  | UpdateUserProfileSuccessAction
  | UpdateUserProfileFailureAction
  | SendConfirmationEmailSuccessAction
  | SendConfirmationEmailFailureAction
  | ResetPasswordSuccessAction
  | ResetPasswordFailureAction
  | SetSuccessAction;
