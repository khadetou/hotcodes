import Contact from "@/components/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import React from "react";
import Banner from "screens/services/Banner";
import ServicesList from "screens/services/list/ServicesList";

const Services = () => {
  return (
    <>
      <Header />
      <Banner />
      <ServicesList />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
