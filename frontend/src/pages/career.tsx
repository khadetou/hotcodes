import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import CarreerScreen from "@/screens/Carreer";
import React from "react";

const career = () => {
  return (
    <>
      <Header
        bgClassName="!bg-transparent shadow-lg"
        className="!text-dark "
        buttonClassName="bg-grad-text-2 text-white "
      />
      <CarreerScreen />
      <Footer />
    </>
  );
};

export default career;
