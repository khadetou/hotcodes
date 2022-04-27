import Bigcards from "@/components/Bigcards";
import Ui from "/public/images/services/ui.svg";
import marketing from "/public/images/services/marketing.svg";
import web from "/public/images/services/web.svg";
import mobile from "/public/images/services/mobile.svg";
import React from "react";
import Titlebold from "@/components/Title/titlebold";
import Subtitle from "@/components/Title/subtitle";
import DesignTools from "@/components/images/design";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SmallCards from "@/components/smallcards";

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
    <section>
      <div className="mt-[80px] lg:mt-[160px] flex flex-col items-center">
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
        <Titlebold
          title="Design tools"
          className=" leading-[88px] -mb-3"
          p=" We use the best tools in order to deliver quality"
        />
        <Subtitle sub1="Ux/Ui" sub2="Design tools" className="mt-7" />
      </div>
      <Swiper
        className="!h-[500px] mt-[15px] "
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          541: {
            slidesPerView: 4,
          },
        }}
      >
        {DesignTools.map(({ title, image }, index) => (
          <SwiperSlide key={index}>
            <SmallCards
              p="Figma is a flexible tool that allows to build incredible design"
              src={image}
              title={title}
              className="mb-[47px]"
              link="Learn more"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesList;
