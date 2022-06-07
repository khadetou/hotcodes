import type { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useActions } from "@/hooks/useActions";
import { setAuthToken } from "@/utils/setAuthToken";
import { wrapper } from "store/index";
import { getCookie, LoadUserSsr } from "store/action-creators";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import SEO from "@/components/Seo";
import Banner from "screens/landing/Banner";
import Services from "screens/landing/Services";
import Presentation from "screens/landing/presentation";
import Process from "screens/landing/process";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
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
  }, [token, LogoutUser]);
  return (
    <>
      <Header />
      <SEO />
      <Banner />
      <Services />
      <Presentation />
      <Process />
      <Contact />
      <Footer />
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
            props: {
              ...(await serverSideTranslations(locale!, ["common", "header"])),
            },
            redirect: {
              destination: "/me/update_profile",
              permanent: false,
            },
          };
        }
        return {
          props: {
            ...(await serverSideTranslations(locale!, [
              "common",
              "header",
              "footer",
            ])),
            user,
          },
        };
      }
    }

    return {
      props: {
        ...(await serverSideTranslations(locale!, [
          "common",
          "header",
          "footer",
        ])),
      },
    };
  });
