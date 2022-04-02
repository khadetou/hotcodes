import { Dispatch } from "redux";
import { Action, User } from "../actions";
import axios from "axios";
import { ActionType } from "../action-types";

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
      console.log(data);
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: {
          token: data.token,
          user: data.user,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.LOGIN_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};
