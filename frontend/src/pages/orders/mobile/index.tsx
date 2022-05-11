import Form from "@/components/orders/form";
import Banner from "@/screens/mobile/Banner";
import { useActions } from "@/hooks/useActions";
import Header from "@/components/header";
import Presentation from "@/screens/mobile/presentation";

const Mobile = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Header />
      <Banner />
      <Presentation />
      <Form title="What are we building" Action={CreateOrderWeb} />
    </>
  );
};

export default Mobile;
