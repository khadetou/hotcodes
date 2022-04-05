import { NextPage } from "next";
import Form from "../../../components/orders/form";
import { useActions } from "../../../hooks/useActions";

const OrderWeb: NextPage = () => {
  const { CreateOrderWeb } = useActions();
  return (
    <>
      <Form title="Orders" Action={CreateOrderWeb} />
    </>
  );
};

export default OrderWeb;
