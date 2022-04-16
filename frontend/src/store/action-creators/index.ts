import { Dispatch } from "redux";
import { Action, OrderWeb, User } from "../actions";
import axios from "axios";
import { ActionType } from "../action-types";
import { setAuthToken } from "../../utils/setAuthToken";
import cookie from "js-cookie";

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

//Load user with localeStorage
export const LoadUser = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get("http://localhost:5000/auth/user");
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

//LOAD USER WITH SSR
export const LoadUserSsr = (token: string) => {
  if (typeof localStorage !== "undefined" && localStorage.token) {
    setAuthToken("localStorage.token");
  }
  return async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
        contentType: "application/json",
      },
    };

    try {
      const { data } = await axios.get(
        "http://localhost:5000/auth/user",
        config
      );

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

//REGISTER USER
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

export const GoogleLoginUser = (googleData: any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return async (dispatch: Dispatch<Action>) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        token: googleData.tokenId,
      });

      const { data } = await axios.post(
        "http://localhost:5000/auth/google/signin",
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
    } catch (err: any) {
      dispatch({
        type: ActionType.LOGIN_FAILURE,
        error: err,
      });
    }
  };
};

//LOGIN USER

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

//LOGOUT USER

export const LogoutUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    removeCookie("token");
    dispatch({
      type: ActionType.LOGOUT_SUCCESS,
    });
    if (typeof localStorage !== "undefined" && localStorage.token) {
      localStorage.removeItem("token");
    }
  };
};

//UPDATE USER
export const UpdateUserProfile = (user: User) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName: user!.firstName,
      lastName: user!.lastName,
      email: user!.email,
      phone: user!.phone,
      password: user!.password,
    });

    try {
      const { data } = await axios.put(
        `http://localhost:5000/auth/update/profile`,
        body,
        config
      );
      dispatch({
        type: ActionType.UPDATE_USER_PROFILE_SUCCESS,
        payload: {
          user: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_USER_PROFILE_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};

//SEND CONFIRMATION EMAIL
export const SendConfirmationEmail = (email: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
    });

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/forgot-password",
        body,
        config
      );
      dispatch({
        type: ActionType.SEND_CONFIRMITION_EMAIL_SUCCESS,
        message: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEND_CONFIRMITION_EMAIL_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};

//RESET PASSWORD
export const ResetPassword = (password: string, token: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      password,
    });

    try {
      const { data } = await axios.put(
        `http://localhost:5000/auth/confirm-email/${token}`,
        body,
        config
      );
      dispatch({
        type: ActionType.RESET_PASSWORD_SUCCESS,
        payload: {
          user: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.RESET_PASSWORD_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};

//GET ALL USERS ADMIN
export const GetAllUsers = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get("http://localhost:5000/auth/users");
      dispatch({
        type: ActionType.GET_ALL_USERS_SUCCESS,
        payload: {
          users: data,
        },
      });
    } catch (error: any) {
      console.log({ error });
      dispatch({
        type: ActionType.GET_ALL_USERS_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};

//GET USER BY ID ADMIN
export const GetUserById = (id: string) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/auth/user/${id}`);
      dispatch({
        type: ActionType.GET_USER_SUCCESS_BY_ID,
        payload: {
          user: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_USER_FAILURE_BY_ID,
        error: error.response.data.error,
      });
    }
  };
};

//DELETE USER ADMIN
export const DeleteUser = (id: string) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/auth/user/${id}`
      );
      dispatch({
        type: ActionType.DELETE_USER_SUCCESS,
        payload: {
          user: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_USER_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};

//SET COOKIE

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

//------------------------ORDERS------------------------

//CREATE ORDER WEB
export const CreateOrderWeb = (orderWeb: OrderWeb) => {
  return async (dispatch: Dispatch<Action>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {
      goal,
      appName,
      description,
      functionnality,
      platform,
      typeapp,
      design,
    } = orderWeb;

    const body = JSON.stringify({
      goal,
      appName,
      description,
      functionnality,
      platform,
      typeapp,
      design,
    });

    try {
      const { data } = await axios.post(
        "http://localhost:5000/orderweb",
        body,
        config
      );
      dispatch({
        type: ActionType.CREATE_ORDERWEB_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      console.log({ error });
      dispatch({
        type: ActionType.CREATE_ORDERWEB_FAILURE,
        error: error.response.data.error,
      });
    }
  };
};