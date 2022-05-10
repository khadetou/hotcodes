import Image from "next/image";
import { useTranslation } from "next-i18next";

import Button from "@/components/button/Button";
import sideImage from "/public/images/sideimage.png";
import Circular from "@/components/button/circular";
import DesignBanner from "/public/images/Design-banner.png";
const Banner = () => {
  const { t } = useTranslation("common");

  return (
    <section className="h-[890px] flex items-center bg-grad-back blend relative ">
      <div className="flex  flex-col items-center lg:flex-row translate-y-[-50%] md:mb-[110px] xsm:mb-[103px] lg:transform-none containers -mt-9">
        <div className="max-w-[734px] w-full mb-4 lg:mb-[-9.5rem]">
          <h1 className="text-white  w-full text-[32px] leading-[1.2] xxs:text-[40px]  md:text-[40px] xs:text-[47px] lg:text-[64px]  2xl:text-[89px]  2xl:leading-none  font-light">
            We Create and build Incredible design
          </h1>
          <p className="text-white  xl:leading-snug text-[14px] leading-[1.2] xs:text-[18px] font-light text-lg mb-5 mt-[10px] sm:my-[10px] xl:font-medium  max-w-[635px]">
            We build modern design that respect all the rules of ui/ux desing.
            If you want your website to be as this day and age websites and to
            be profetionnal you are on the right place.
          </p>
          <div className="flex items-center  md:mt-6">
            <button className="bg-white max-h-[50px] text-dark text-sm xxs:text-base py-2 px-4  xxs:px-10 xxs:py-[11px] font-bold rounded-full shadow-btn">
              Start Now
            </button>
            <div className="md:ml-6 ml-[7px]">
              <Circular className="rounded-full p-[12px] xs:px-4 xs:py-4 xxs:p-[11px] bg-white text-primary shadow-btn lg:p-4" />
              <span className="text-white xxs:text-[14px] md:text-base xs:text-[14px] font-normal ml-[5px] text-[10px] lg:text-lg lg:font-semibold uppercase">
                Watch the video
              </span>
            </div>
          </div>
        </div>
        <div className=" md:w-[228px] -mb-[65px] mt-[24px] w-[278px] md:mb-0 lg:w-[691px] xxs:w-[370px] xxs:mt-[10px] ">
          <div className="absolute lg:top-1/2 lg:translate-y-[-48%]  ">
            <Image src={DesignBanner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
