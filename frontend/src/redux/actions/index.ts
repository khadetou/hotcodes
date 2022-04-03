import { ActionType } from "../action-types";

export type User = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  roles: string[];
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
} | null;

export interface OrderDesign {
  _id?: string;
  userId: string;
  platform: string;
  typeapp: string;
  appName: string;
  description: string;
  Goal: string[];
  target: string;
  mood: string;
  wireframe: string;
  design: {
    public_id: string;
    url: string;
    format: string;
  }[];
  functionnality: [string];
}

export interface OrderWeb {
  _id?: string;
  userId: string;
  platform: string;
  typeapp: string;
  appName: string;
  description: string;
  Goal: string[];
  design: {
    public_id: string;
    url: string;
    format: string;
  }[];
  functionnality: [string];
}

export interface OrderMobile {
  _id?: string;
  userId: string;
  platform: string;
  typeapp: string;
  appName: string;
  description: string;
  Goal: string[];
  design: {
    public_id: string;
    url: string;
    format: string;
  }[];
  functionnality: [string];
}

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

interface GetAllUsersSuccessAction {
  type: ActionType.GET_ALL_USERS_SUCCESS;
  payload: {
    users: User[];
  };
}

interface GetAllUsersFailureAction {
  type: ActionType.GET_ALL_USERS_FAILURE;
  error: string;
}

interface GetUserSuccessByIdAction {
  type: ActionType.GET_USER_SUCCESS_BY_ID;
  payload: {
    user: User;
  };
}

interface GetUserFailureByIdAction {
  type: ActionType.GET_USER_FAILURE_BY_ID;
  error: string;
}

interface DeleteUserSuccessAction {
  type: ActionType.DELETE_USER_SUCCESS;
  payload: {
    user: User;
  };
}

interface DeleteUserFailureAction {
  type: ActionType.DELETE_USER_FAILURE;
  error: string;
}

interface CreateOrderWebSuccessAction {
  type: ActionType.CREATE_ORDERWEB_SUCCESS;
  payload: {
    order: OrderWeb;
  };
}

interface CreateOrderWebFailureAction {
  type: ActionType.CREATE_ORDERWEB_FAILURE;
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
  | SetSuccessAction
  | GetAllUsersSuccessAction
  | GetAllUsersFailureAction
  | GetUserSuccessByIdAction
  | GetUserFailureByIdAction
  | DeleteUserSuccessAction
  | DeleteUserFailureAction
  | CreateOrderWebSuccessAction
  | CreateOrderWebFailureAction;
