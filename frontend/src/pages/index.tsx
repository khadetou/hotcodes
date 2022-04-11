import type { GetServerSideProps, NextPage } from "next";
import { useActions } from "@/hooks/useActions";
import { setAuthToken } from "@/utils/setAuthToken";
import { wrapper } from "@/redux/index";
import { getCookie, LoadUserSsr } from "@/redux/action-creators";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

typeof localStorage !== "undefined" && setAuthToken(localStorage.token);

interface IProps {
  token: string;
}

const Home: NextPage<IProps> = ({ token }) => {
  const { LogoutUser } = useActions();
  const logout = () => LogoutUser();

  useEffect(() => {
    if (token) {
      LogoutUser();
    }
  }, [token]);

  return <div className="">hello world</div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx): Promise<any> => {
    const token = getCookie("token", ctx.req);

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        return {
          props: {
            token,
          },
        };
      } else {
        await store.dispatch(LoadUserSsr(token));
        const { user } = store.getState().authReducer;
        if (user && !user?.password) {
          return {
            redirect: {
              destination: "/me/update_profile",
              permanent: false,
            },
          };
        }
        return {
          props: {
            user,
          },
        };
      }
    }

    return {
      props: {},
    };
  });
