import OrdersScreen from "@/screens/dashboard/ordersScreen";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import { getCookie } from "store/action-creators";

const Orders = () => {
  return (
    <>
      <OrdersScreen />
    </>
  );
};

export default Orders;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie("token", ctx.req);
  if (token) {
    if (jwtDecode<any>(token).exp > Date.now() / 1000) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
