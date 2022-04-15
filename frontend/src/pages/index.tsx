import type { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useActions } from "@/hooks/useActions";
import { setAuthToken } from "@/utils/setAuthToken";
import { wrapper } from "@/redux/index";
import { getCookie, LoadUserSsr } from "@/redux/action-creators";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import SEO from "@/components/Seo";
import Banner from "@/components/landing/Banner";
import Services from "@/components/landing/Services";

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

  return (
    <>
      <SEO />
      <Banner />
      <Services />
      <div className="">hello world</div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx): Promise<any> => {
    const token = getCookie("token", ctx.req);
    const { locale } = ctx;
    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        return {
          props: {
            ...(await serverSideTranslations(locale!, ["common", "header"])),
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
            ...(await serverSideTranslations(locale!, ["common", "header"])),
            user,
          },
        };
      }
    }

    return {
      props: {
        ...(await serverSideTranslations(locale!, ["common", "header"])),
      },
    };
  });
