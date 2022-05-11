import Header from "@/components/header";
import Banner from "@/screens/web/Banner";
import Presentation from "@/screens/web/presentation";
import { NextPage } from "next";
import Form from "../../../components/orders/form";
import { useActions } from "../../../hooks/useActions";

const OrderWeb: NextPage = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Header
        bgClassName="!bg-[#F6F9FD]"
        className="!text-dark shadow-md"
        buttonClassName="border-dark"
      />
      <Banner />
      <Presentation />
      <Form title="What are we building" Action={CreateOrderWeb} />
    </>
  );
};

export default OrderWeb;
