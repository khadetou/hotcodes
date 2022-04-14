import Image from "next/image";
import { useTranslation } from "next-i18next";

import Button from "@/components/button/Button";
import sideImage from "/public/images/sideimage.png";
import Circular from "@/components/button/circular";

const Banner = () => {
  const { t } = useTranslation("common");

  return (
    <section className="h-[890px] flex items-center bg-grad-back blend relative ">
      <div className="flex flex-col items-center lg:flex-row translate-y-[-50%] md:mb-[75px] xsm:mb-[103px] lg:transform-none containers -mt-9">
        <div className="max-w-[734px] mb-4">
          <h1 className="text-white capitalize  leading-[1.2]  text-[33px] xs:text-[47px] xl:text-[67px] 2xl:text-[101px] 2xl:leading-none  font-light">
            {t("banner.h1")}
          </h1>
          <p className="text-white xl:leading-snug text-[14px] leading-[1.2] xs:text-[18px] font-light text-lg mb-5 mt-[10px] sm:my-[10px] xl:font-medium  max-w-[635px]">
            {t("banner.p")}
          </p>
          <div className="flex md:mt-6">
            <Button
              className="text-[11px] px-[8px] py-[10px] xs:text-[15px] md:text-[18px] md:px-[19px]"
              rounded="rounded-full"
              bg="bg-white"
              text="text-primary"
              value={t("banner.button")}
              shadow="shadow-btn"
              font="font-bold"
            />
            <div className="xs:ml-6 ml-2">
              <Circular className="rounded-full xs:px-4 xs:py-4 p-2 bg-white text-primary shadow-btn" />
              <span className="text-white text-[11px] md:text-base xs:text-[14px] font-normal ml-[10px] uppercase">
                {t("banner.video")}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[276px] md:w-[228px] -mb-[65px] md:mb-0 lg:w-[1000px] xs:w-[326px] mt-[10px] ">
          <div className="absolute lg:top-1/2 lg:translate-y-[-36%]  ">
            <Image src={sideImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
