import Contact from "@/components/Contact";
import Header from "@/components/header";
import Banner from "@/screens/about/Banner";
import Presentation from "@/screens/about/presentation";
import Team from "@/screens/about/team";
import React from "react";

const About = () => {
  return (
    <>
      <Header />
      <Banner />
      <Presentation />
      <Team />
      <Contact />
    </>
  );
};

export default About;
