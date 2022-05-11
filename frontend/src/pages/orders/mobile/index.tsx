import Form from "@/components/orders/form";
import Banner from "@/screens/mobile/Banner";
import { useActions } from "@/hooks/useActions";
import Header from "@/components/header";

const Mobile = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Header />
      <Banner />
      <Form title="What are we building" Action={CreateOrderWeb} />
    </>
  );
};

export default Mobile;
