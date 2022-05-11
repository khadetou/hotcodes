import Form from "@/components/orders/form";
import Banner from "@/screens/design/Banner";
import { useActions } from "@/hooks/useActions";
import Cards from "@/screens/design/Cards";
import Header from "@/components/header";

const Design = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <Form title="What are we building" Action={CreateOrderWeb} />
    </>
  );
};

export default Design;
