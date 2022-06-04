import BlogScreen from "@/screens/dashboard/blogScreen";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React from "react";
import { getCookie } from "store/action-creators";

const Blog = () => {
  return (
    <>
      <BlogScreen />
    </>
  );
};

export default Blog;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie("token", ctx.req);
  if (token) {
    if (jwtDecode<any>(token).exp < Date.now() / 1000) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  } else {
    return {
      props: {},
    };
  }
  return {
    props: {},
  };
};
