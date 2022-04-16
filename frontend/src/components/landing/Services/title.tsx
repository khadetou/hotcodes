import React from "react";
import { useTranslation } from "react-i18next";
const Title = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center">
      <h1 className="lg:text-[101px] xxs:text-[47px] md:text-[60px] md:mt-[66px] leading-none text-[32px] mt-[32px] lg:leading-[104px] font-light text-center lg:mt-[66px] text-transparent bg-clip-text bg-grad-text-1">
        {t("services.h1")}
      </h1>
      <p className="text-center text-[14px] md:text-[20px] leading-[26px] text-dark max-w-[750px] font-medium mt-[22px]">
        {t("services.p")}
      </p>
    </div>
  );
};

export default Title;
