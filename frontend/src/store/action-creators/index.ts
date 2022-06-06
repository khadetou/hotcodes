import { Dispatch } from "redux";
import {
  Action,
  OrderDesign,
  OrderMarketing,
  OrderMobile,
  OrderWeb,
  User,
} from "../actions";
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
  setAuthToken(localStorage.token);
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
  setAuthToken("localStorage.token");

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
      plateform,
      typeapp,
      design,
    } = orderWeb;

    const body = JSON.stringify({
      goal,
      appName,
      description,
      functionnality,
      plateform,
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
        error: error.response.data.message,
      });
    }
  };
};

//CREATE ORDER DESIGN
export const CreateOrderDesign = (orderDesign: OrderDesign) => {
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
      plateform,
      typeapp,
      design,
    } = orderDesign;

    console.log(orderDesign);

    const body = JSON.stringify({
      goal,
      appName,
      description,
      functionnality,
      plateform,
      typeapp,
      design,
    });

    try {
      const { data } = await axios.post(
        "http://localhost:5000/orderdesign",
        body,
        config
      );
      dispatch({
        type: ActionType.CREATE_ORDERDESIGN_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      console.log({ error });
      dispatch({
        type: ActionType.CREATE_ORDERDESIGN_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};
//CREATE ORDER MOBILE
export const CreateOrderMobile = (orderMobile: OrderMobile) => {
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
      plateform,
      typeapp,
      design,
    } = orderMobile;

    const body = JSON.stringify({
      goal,
      appName,
      description,
      functionnality,
      plateform,
      typeapp,
      design,
    });

    try {
      const { data } = await axios.post(
        "http://localhost:5000/ordermobile",
        body,
        config
      );
      dispatch({
        type: ActionType.CREATE_ORDERMOBILE_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      console.log({ error });
      dispatch({
        type: ActionType.CREATE_ORDERMOBILE_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET  All ORDERS WEB
export const GetAllOrdersWeb = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get("http://localhost:5000/orderweb");
      dispatch({
        type: ActionType.GET_ALL_ORDERWEB_SUCCESS,
        payload: {
          orders: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_ORDERDESIGN_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET ALL ORDERS DESIGN
export const GetAllOrdersDesign = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get("http://localhost:5000/orderdesign");
      dispatch({
        type: ActionType.GET_ALL_ORDERDESIGN_SUCCESS,
        payload: {
          orders: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_ORDERDESIGN_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET ALL MOBILE ORDERS
export const GetAllOrdersMobile = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get("http://localhost:5000/ordermobile");
      dispatch({
        type: ActionType.GET_ALL_ORDERMOBILE_SUCCESS,
        payload: {
          orders: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_ORDERMOBILE_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET MY ORDERS WEB
export const GetMyOrdersWeb = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/orderweb/my`);
      dispatch({
        type: ActionType.GET_ORDERWEB_SUCCESS,
        payload: {
          orders: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_ORDERWEB_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET MY ORDERS DESIGN
export const GetMyOrdersDesign = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/ordersdesign/my`);
      dispatch({
        type: ActionType.GET_ORDERDESIGN_SUCCESS,
        payload: {
          orders: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_ORDERDESIGN_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET MY ORDERS MOBILE
export const GetMyOrdersMobile = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/ordersmobile/my`);
      dispatch({
        type: ActionType.GET_ORDERMOBILE_SUCCESS,
        payload: {
          orders: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_ORDERMOBILE_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET ORDER BY WEB
export const GetOrderWeb = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/orders/${id}`);
      dispatch({
        type: ActionType.GET_ORDERWEB_BY_ID_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ORDERWEB_BY_ID_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET ORDER BY DESIGN
export const GetOrderDesign = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/ordersdesign/${id}`
      );
      dispatch({
        type: ActionType.GET_ORDERDESIGN_BY_ID_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ORDERDESIGN_BY_ID_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//GET ORDER BY MOBILE
export const GetOrderMobile = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/ordersmobile/${id}`
      );
      dispatch({
        type: ActionType.GET_ORDERMOBILE_BY_ID_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ORDERMOBILE_BY_ID_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//UPDATE ORDER WEB
export const UpdateOrderWeb = (id: string, order: any) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/orders/${id}`,
        order
      );
      dispatch({
        type: ActionType.UPDATE_ORDERWEB_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_ORDERWEB_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//UPDATE ORDER DESIGN
export const UpdateOrderDesign = (id: string, order: any) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/ordersdesign/${id}`,
        order
      );
      dispatch({
        type: ActionType.UPDATE_ORDERDESIGN_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_ORDERDESIGN_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//UPDATE ORDER MOBILE
export const UpdateOrderMobile = (id: string, order: any) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/ordersmobile/${id}`,
        order
      );
      dispatch({
        type: ActionType.UPDATE_ORDERMOBILE_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_ORDERMOBILE_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//DELETE ORDER WEB
export const DeleteOrderWeb = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/orderweb/${id}`
      );
      dispatch({
        type: ActionType.DELETE_ORDERWEB_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_ORDERWEB_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//DELETE ORDER DESIGN
export const DeleteOrderDesign = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/orderdesign/${id}`
      );
      dispatch({
        type: ActionType.DELETE_ORDERDESIGN_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_ORDERDESIGN_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//DELETE ORDER MOBILE
export const DeleteOrderMobile = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/ordermobile/${id}`
      );
      dispatch({
        type: ActionType.DELETE_ORDERMOBILE_SUCCESS,
        payload: {
          order: data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_ORDERMOBILE_FAILURE,
        error: error.response.data.message,
      });
    }
  };
};

//DELETE MY ORDER WEB
// export const DeleteMyOrderWeb = (id: string) => {
//   return async (dispatch: Dispatch<Action>) => {
//     try {
//       const { data } = await axios.delete(`http://localhost:5000/orderweb/my/${id}`);
//       dispatch({
//         type: ActionType.DELETE_MYORDERWEB_SUCCESS,
//         payload: {
//           order: data,
//         },
//       });
//     } catch (error: any) {
//       dispatch({
//         type: ActionType.DELETE_MYORDERWEB_FAILURE,
//         error: error.response.data.message,
//       });
//     }
//   };
// }
