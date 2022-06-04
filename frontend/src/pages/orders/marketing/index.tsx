import Form from "@/components/orders/form";
import Banner from "@/screens/marketing/Banner";
import { useActions } from "@/hooks/useActions";

import Header from "@/components/header";
import Presentation from "@/screens/marketing/presentation";
import Cards from "@/screens/marketing/Cards";
import Footer from "@/components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Contact from "@/components/Contact";

const Marketing = () => {
  const { CreateOrderMarketing } = useActions();
  return (
    <>
      <Header
        bgClassName="!bg-transparent"
        className="!text-dark"
        buttonClassName="text-white !bg-grad-text-2 !rounded-full !shadow-shadow border-0"
      />
      <Banner />
      <Presentation />
      <Cards />
      {/* <Form title="What are we Selling" Action={CreateOrderMarketing} /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Marketing;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "header",
        "footer",
        "web",
      ])),
    },
  };
};
