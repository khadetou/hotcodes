import React from "react";
import Title from "../Services/title";
import { useTranslation } from "next-i18next";

const Process = () => {
  const { t } = useTranslation("common");
  return (
    <div className="containers ">
      <Title
        title={t("process.h1")}
        p={t("process.p")}
        className="text-transparent bg-grad-text-2 bg-clip-text "
      />
    </div>
  );
};

export default Process;
