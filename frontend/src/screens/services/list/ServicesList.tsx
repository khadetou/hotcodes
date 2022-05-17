import { useState, useRef } from "react";
import Bigcards from "@/components/Bigcards";
import Ui from "/public/images/services/ui.svg";
import marketing from "/public/images/services/marketing.svg";
import web from "/public/images/services/web.svg";
import mobile from "/public/images/services/mobile.svg";
import React from "react";
import Image from "next/image";
import ai from "/public/images/tools/ai.svg";
import xd from "/public/images/tools/xd.svg";
import framer from "/public/images/tools/framer.svg";
import figma from "/public/images/tools/figma.svg";
import photoshop from "/public/images/tools/photoshop.svg";
import Titlebold from "@/components/Title/titlebold";
import Subtitle from "@/components/Title/subtitle";
import { animations } from "@/components/images/design";
import frontend from "@/components/images/frontend";
import backend from "@/components/images/backend";
import mobileDev from "@/components/images/mobile";
import hybrid from "@/components/images/hybrid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SmallCards from "@/components/smallcards";
import vidbg from "/public/videos/vid-bg.png";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { useTranslation } from "next-i18next";

const ServicesList = () => {
  const { t } = useTranslation("service");

  const services = [
    {
      title: t("serviceList.design.title"),
      toptitle: t("serviceList.design.topTitle"),
      subtitle: t("serviceList.design.subTitle"),
      link: "/orders/design",
      image: Ui,
    },
    {
      title: t("serviceList.marketing.title"),
      toptitle: t("serviceList.marketing.topTitle"),
      subtitle: t("serviceList.marketing.subTitle"),
      link: "/orders/marketing",
      image: marketing,
    },
    {
      title: t("serviceList.web.title"),
      toptitle: t("serviceList.web.topTitle"),
      subtitle: t("serviceList.web.subTitle"),
      link: "/orders/web",
      image: web,
    },
    {
      title: t("serviceList.mobile.title"),
      toptitle: t("serviceList.mobile.topTitle"),
      subtitle: t("serviceList.mobile.subTitle"),
      link: "/orders/mobile",
      image: mobile,
    },
  ];
  const DesignTools = [
    {
      title: "Illustrator",
      image: ai,
      desc: t("serviceList.tools.design.illustrator"),
    },
    {
      title: "XD",
      image: xd,
      desc: t("serviceList.tools.design.xd"),
    },
    {
      title: "Framer",
      image: framer,
      desc: t("serviceList.tools.design.framer"),
    },
    {
      title: "Figma",
      image: figma,
      desc: t("serviceList.tools.design.figma"),
    },
    {
      title: "Photoshop",
      image: photoshop,
      desc: t("serviceList.tools.design.photoshop"),
    },
  ];

  const [play, setPlay] = useState(false);
  const playRef = useRef<HTMLVideoElement | null>(null);

  const setPlayVideo = () => {
    if (playRef.current) {
      playRef.current.play();
    }
  };

  const setPauseVideo = () => {
    if (playRef.current) {
      console.log(playRef);
      playRef.current.pause();
    }
  };

  return (
    <section className="mb-[160px]">
      <div className="mt-[80px] lg:mt-[160px] flex flex-col items-center">
        <div className="containers grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {services.map(({ title, toptitle, subtitle, image, link }, index) => (
            <div key={index}>
              <Bigcards
                toptitle={toptitle}
                image={image}
                subtitle={subtitle}
                title={title}
                link={link}
              />
            </div>
          ))}
        </div>
        <Titlebold
          title={t("serviceList.title.design.h1")}
          className=" leading-[88px] md:-mb-3"
          pclassName="md:mt-[22px]"
          p={t("serviceList.title.design.p")}
        />
        <Subtitle sub1="Ux/Ui" sub2="Design tools" className="md:mt-4" />
      </div>
      <Swiper
        className="!h-[586px] md:mt-[15px] mb-[80px] "
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1025: {
            slidesPerView: 4,
          },
          821: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          539: {
            slidesPerView: 2,
          },
        }}
      >
        {DesignTools.map(({ title, image, desc }, index) => (
          <SwiperSlide key={index}>
            <SmallCards
              p={desc}
              src={image}
              title={title}
              className="mb-[30px]"
              link="Learn more"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`containers  flex flex-col items-center relative  w-full max-h-[86%] pointer-events-none h-auto -mb-[14px]`}
      >
        <Subtitle sub1="Animation" sub2="tools" className="mb-4" />
        <div className="h-auto relative w-full my-0 mx-auto  hidden md:block max-w-[1301px] ">
          <Image src={vidbg} />
          <div className="h-auto absolute  -z-20 left-1/2 w-full -translate-x-1/2 my-0 mx-auto max-w-[1301px] top-[0.25%]">
            <video
              src="/videos/bg-video1.mp4"
              muted
              playsInline
              ref={playRef}
              autoPlay
              onPlay={() => setPlay(false)}
              onPause={() => setPlay(true)}
              loop
              className="w-[83.9%] m-auto align-[initial] object-contain"
            />
          </div>
          <div className="absolute top-[69%] text-white text-[50px] right-[15%] ">
            {play ? (
              <IoPlayCircleOutline onClick={setPlayVideo} />
            ) : (
              <IoPauseCircleOutline onClick={setPauseVideo} />
            )}
          </div>
        </div>
        <div className="flex  flex-wrap">
          {animations.map(({ title, image }, index) => (
            <SmallCards
              key={index}
              p="Figma is a flexible tool that allows to build incredible design"
              src={image}
              title={title}
              className="mb-[30px]"
              link="Learn more"
            />
          ))}
        </div>
        <Titlebold
          title="Web Development"
          className=" leading-[88px] md:-mb-3"
          pclassName="md:mt-[22px]"
          p=" We use the best tools in order to deliver quality"
        />
        <Subtitle sub1="Frontend" sub2="tools" className="md:mt-4" />
      </div>
      <Swiper
        className="!h-[586px] md:mt-[15px] mb-[80px] "
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1025: {
            slidesPerView: 4,
          },
          821: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          539: {
            slidesPerView: 2,
          },
        }}
      >
        {frontend.map(({ title, image }, index) => (
          <SwiperSlide key={index}>
            <SmallCards
              p="Figma is a flexible tool that allows to build incredible design"
              src={image}
              title={title}
              className="mb-[30px]"
              link="Learn more"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="containers flex items-center justify-center">
        <Subtitle sub1="Backend" sub2="tools" className="md:mt-4" />
      </div>
      <Swiper
        className="!h-[586px] md:mt-[15px] mb-[80px] "
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1025: {
            slidesPerView: 4,
          },
          821: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          539: {
            slidesPerView: 2,
          },
        }}
      >
        {backend.map(({ title, image }, index) => (
          <SwiperSlide key={index}>
            <SmallCards
              p="Figma is a flexible tool that allows to build incredible design"
              src={image}
              title={title}
              className="mb-[30px]"
              link="Learn more"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="containers flex flex-col items-center justify-center">
        <Titlebold
          title="Mobile Development"
          className=" leading-[88px] md:-mb-3"
          pclassName="md:mt-[22px]"
          p=" We use the best tools in order to deliver quality"
        />
        <Subtitle sub1="Native" sub2="Apps" className="md:mt-4" />
        <div className="flex flex-wrap">
          {mobileDev.map(({ title, image }, index) => (
            <SmallCards
              key={index}
              p="Figma is a flexible tool that allows to build incredible design"
              src={image}
              title={title}
              className="mb-[30px] mr-5"
              link="Learn more"
            />
          ))}
        </div>
        <Subtitle sub1="Hybrid" sub2="Apps" className="md:mt-4" />
        <div className="flex flex-wrap">
          {hybrid.map(({ title, image }, index) => (
            <SmallCards
              key={index}
              p="Figma is a flexible tool that allows to build incredible design"
              src={image}
              title={title}
              className="mb-[30px] mr-5"
              link="Learn more"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
