import Form from "@/components/orders/form";
import Banner from "@/screens/marketing/Banner";
import { useActions } from "@/hooks/useActions";

import Header from "@/components/header";
import Presentation from "@/screens/marketing/presentation";
import Cards from "@/screens/marketing/Cards";

const Marketing = () => {
  const { CreateOrderWeb } = useActions();
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
      <Form title="What are we Selling" Action={CreateOrderWeb} />
    </>
  );
};

export default Marketing;
