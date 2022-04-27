import { useState, useRef } from "react";
import Bigcards from "@/components/Bigcards";
import Ui from "/public/images/services/ui.svg";
import marketing from "/public/images/services/marketing.svg";
import web from "/public/images/services/web.svg";
import mobile from "/public/images/services/mobile.svg";
import React from "react";
import Image from "next/image";
import Titlebold from "@/components/Title/titlebold";
import Subtitle from "@/components/Title/subtitle";
import DesignTools, { animations } from "@/components/images/design";
import frontend from "@/components/images/frontend";
import backend from "@/components/images/backend";
import mobileDev from "@/components/images/mobile";
import hybrid from "@/components/images/hybrid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SmallCards from "@/components/smallcards";
import vidbg from "/public/videos/vid-bg.png";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";

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
  console.log(playRef.current);
  return (
    <section className="mb-[160px]">
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
          className=" leading-[88px] md:-mb-3"
          pclassName="md:mt-[22px]"
          p=" We use the best tools in order to deliver quality"
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
        {DesignTools.map(({ title, image }, index) => (
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
