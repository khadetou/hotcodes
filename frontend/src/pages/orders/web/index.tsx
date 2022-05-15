import Footer from "@/components/footer/Footer";
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
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <Banner />
      <Presentation />
      <Form title="What are we building" Action={CreateOrderWeb} />
      <Footer />
    </>
  );
};

export default OrderWeb;
