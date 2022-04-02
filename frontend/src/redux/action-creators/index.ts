import { Dispatch } from "redux";
import { Action, User } from "../actions";
import axios from "axios";
import { ActionType } from "../action-types";
import { setAuthToken } from "../../utils/setAuthToken";

interface Data {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export const RegisterUser = ({
  firstName,
  lastName,
  email,
  password,
  phone,
}: Data) => {
  return async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      phone,
    });
    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/signup",
        body,
        config
      );
      console.log(data);
      dispatch({
        type: ActionType.REGISTER_SUCCESS,
        success: true,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.REGISTER_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};

export const LoginUser = ({ email, password }: Data) => {
  return async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });
    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/signin",
        body,
        config
      );

      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: {
          token: data.accessToken,
          user: data.user,
        },
      });
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
    } catch (error: any) {
      dispatch({
        type: ActionType.LOGIN_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};

export const SetSuccess = (success: boolean) => {
  return {
    type: ActionType.SET_SUCCESS,
    success,
  };
};

export const LogoutUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT_SUCCESS,
    });
    if (localStorage.token) {
      localStorage.removeItem("token");
    }
  };
};
