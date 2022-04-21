import React from "react";
import Title from "../Services/title";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import ProcesImg from "/public/images/processtext.svg";
import ProcessImgfr from '/public/images/processtextfr.svg'

const Process = () => {
  const { t } = useTranslation("common");
  const {locale} = useRouter();
  return (
    <div className="containers flex flex-col items-center ">
      <Title
        title={t("process.h1")}
        p={t("process.p")}
        className="text-transparent bg-grad-text-2 bg-clip-text "
      />

      <div className="mt-[51px]">
        {locale === "en" ?<Image src={ProcesImg} className="flex items-center" />: <Image src={ProcessImgfr} className="flex items-center" /> }
      </div>
    </div>
  );
};

export default Process;
