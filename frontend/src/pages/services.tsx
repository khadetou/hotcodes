import Contact from "@/components/Contact";
import React from "react";
import Banner from "screens/services/Banner";
import ServicesList from "screens/services/list/ServicesList";

const Services = () => {
  return (
    <>
      <Banner />
      <ServicesList />
      <Contact />
    </>
  );
};

export default Services;
