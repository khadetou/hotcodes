import UsersScreens from "@/screens/dashboard/usersScreen";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "store/action-creators";

const Orders = () => {
  return (
    <>
      <UsersScreens />
    </>
  );
};

export default Orders;
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
