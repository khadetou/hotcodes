import Form from "@/components/orders/form";
import Banner from "@/screens/design/Banner";
import { useActions } from "@/hooks/useActions";
import React from "react";

const Design = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Banner />
      <Form title="Order" Action={CreateOrderWeb} />
    </>
  );
};

export default Design;
