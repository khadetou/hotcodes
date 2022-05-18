import Form from "@/components/orders/form";
import Banner from "@/screens/design/Banner";
import { useActions } from "@/hooks/useActions";
import Cards from "@/screens/design/Cards";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Design = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <Form title="What are we building" Action={CreateOrderWeb} />
      <Footer />
    </>
  );
};

export default Design;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["about", "header"])),
    },
  };
};
