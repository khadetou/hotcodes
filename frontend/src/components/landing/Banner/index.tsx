import Image from "next/image";
import { useTranslation } from "next-i18next";

import Button from "@/components/button/Button";
import sideImage from "/public/images/sideimage.png";
import Circular from "@/components/button/circular";

const Banner = () => {
  const { t } = useTranslation("common");

  return (
    <section className="h-[890px] flex items-center bg-grad-back blend relative ">
      <div className="flex  flex-col items-center lg:flex-row translate-y-[-50%] md:mb-[75px] xsm:mb-[103px] lg:transform-none containers -mt-9">
        <div className="max-w-[734px] mb-4 lg:mb-[-9.5rem]">
          <h1 className="text-white capitalize text-[32px] leading-[1.2] xxs:text-[40px]   md:text-[40px] xs:text-[47px] lg:text-[64px]  2xl:text-[101px]  2xl:leading-none  font-light">
            {t("banner.h1")}
          </h1>
          <p className="text-white  xl:leading-snug text-[14px] leading-[1.2] xs:text-[18px] font-light text-lg mb-5 mt-[10px] sm:my-[10px] xl:font-medium  max-w-[635px]">
            {t("banner.p")}
          </p>
          <div className="flex md:mt-6">
            <Button
              className="xxs:text-[14px] py-0 px-[12px] xxs:px-[17px] xxs:py-[11px] lg:py-[15px] lg:px-[24px] xs:text-[15px] md:text-[18px] text-[12px] md:px-[19px] lg:text-2xl lg:font-bold "
              rounded="rounded-full"
              bg="bg-white"
              text="text-primary"
              value={t("banner.button")}
              shadow="shadow-btn"
              font="font-bold"
            />
            <div className="md:ml-6 ml-[7px]">
              <Circular className="rounded-full p-[7px] xs:px-4 xs:py-4 xxs:p-[11px] bg-white text-primary shadow-btn lg:p-5" />
              <span className="text-white xxs:text-[14px] md:text-base xs:text-[14px] font-normal ml-[10px] text-[10px] lg:text-lg lg:font-semibold uppercase">
                {t("banner.video")}
              </span>
            </div>
          </div>
        </div>
        <div className=" md:w-[228px] -mb-[65px] mt-[24px] w-[278px] md:mb-0 lg:w-[691px] xxs:w-[370px] xxs:mt-[10px] ">
          <div className="absolute lg:top-1/2 lg:translate-y-[-36%]  ">
            <Image src={sideImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
