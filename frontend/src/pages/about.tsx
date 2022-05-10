import Contact from "@/components/Contact";
import Banner from "@/screens/about/Banner";
import Presentation from "@/screens/about/presentation";
import Team from "@/screens/about/team";
import React from "react";

const About = () => {
  return (
    <>
      <Banner />
      <Presentation />
      <Team />
      <Contact />
    </>
  );
};

export default About;
