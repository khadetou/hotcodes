import Form from "@/components/orders/form";
import Banner from "@/screens/mobile/Banner";
import { useActions } from "@/hooks/useActions";
import Header from "@/components/header";
import Presentation from "@/screens/mobile/presentation";
import Footer from "@/components/footer/Footer";

const Mobile = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Header />
      <Banner />
      <Presentation />
      <Form title="What are we building" Action={CreateOrderWeb} />
      <Footer />
    </>
  );
};

export default Mobile;
