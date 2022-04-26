import Bigcards from "@/components/Bigcards";
import Ui from "/public/images/services/ui.svg";
import marketing from "/public/images/services/marketing.svg";
import web from "/public/images/services/web.svg";
import mobile from "/public/images/services/mobile.svg";
import React from "react";

const ServicesList = () => {
  const services = [
    {
      title: "Design",
      toptitle: "Ui/Ux",
      subtitle: "Get the best ui/ux design experience.",
      image: Ui,
    },
    {
      title: "Marketing",
      toptitle: "Digital",
      subtitle: "Get the best digital marketing experience.",
      image: marketing,
    },
    {
      title: "Development",
      toptitle: "Web",
      subtitle: "Get the best web development experience.",
      image: web,
    },
    {
      title: "Development",
      toptitle: "Mobile",
      subtitle: "Get the best mobile development experience.",
      image: mobile,
    },
  ];
  return (
    <section className="mt-[80px] lg:mt-[160px]">
      <div className="containers grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {services.map(({ title, toptitle, subtitle, image }, index) => (
          <div key={index}>
            <Bigcards
              toptitle={toptitle}
              image={image}
              subtitle={subtitle}
              title={title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
