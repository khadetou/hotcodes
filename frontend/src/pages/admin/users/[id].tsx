import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { wrapper } from "../../../redux";
import { getCookie, LoadUserSsr } from "../../../redux/action-creators";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { useEffect } from "react";
import { useRouter } from "next/router";

const User: NextPage = () => {
  const { GetUserById } = useActions();
  const { userId } = useTypedSelector((state) => state.authReducer);
  const router = useRouter();

  useEffect(() => {
    GetUserById(router.query.id as string);
  }, [router]);
  return <div>User</div>;
};

export default User;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx): Promise<any> => {
    const token = getCookie("token", ctx.req);
    if (token) {
      await store.dispatch(LoadUserSsr(token));
      const { user } = store.getState().authReducer;

      if (!user!.roles.includes("admin")) {
        return {
          redirect: {
            destination: "/",
            permanentf: false,
          },
        };
      }
      return {
        props: {
          user,
        },
      };
    }

    return {
      props: {},
    };
  });
