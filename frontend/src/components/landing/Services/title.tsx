import React from "react";
import { useTranslation } from "react-i18next";
const Title = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <h1 className="lg:text-[101px] text-[47px] md:text-[60px] md:mt-[66px] leading-none mt-[32px] lg:leading-[104px] font-light text-center lg:mt-[66px] text-transparent bg-clip-text bg-grad-text-1">
        {t("services.h1")}
      </h1>
    </div>
  );
};

export default Title;
