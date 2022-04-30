import Form from "@/components/orders/form";
import Banner from "@/screens/design/Banner";
import { useActions } from "@/hooks/useActions";
import Cards from "@/screens/design/Cards";

const Design = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Banner />
      <Cards />
      <Form title="What are we building" Action={CreateOrderWeb} />
    </>
  );
};

export default Design;
