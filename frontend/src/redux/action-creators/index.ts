import { Dispatch } from "redux";
import { Action, User } from "../actions";
import axios from "axios";
import { ActionType } from "../action-types";
import { setAuthToken } from "../../utils/setAuthToken";
import cookie from "js-cookie";
import { Router } from "next/router";

interface Data {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

export const LoadUser = () => {
  if (typeof localStorage !== "undefined" && localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get("http://localhost:5000/auth");
      dispatch({
        type: ActionType.LOAD_USER,
        payload: {
          user: data,
        },
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.LOAD_USER_FAILURE,
        error: err,
      });
    }
  };
};

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

export const LoginUser = ({ email, password }: Login) => {
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

      setCookie("token", data.accessToken);
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: {
          token: data.accessToken,
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

export const SetSuccess = (success: boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_SUCCESS,
      success,
    });
  };
};

export const LogoutUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    removeCookie("token");
    dispatch({
      type: ActionType.LOGOUT_SUCCESS,
    });
    if (localStorage.token) {
      localStorage.removeItem("token");
    }
  };
};

export const setCookie = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};

export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};
const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
};

const getCookieFromServer = (key: string, req: any) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c: any) => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
};

export const getCookie = (key: string, req: any) => {
  return typeof window !== "undefined"
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};
