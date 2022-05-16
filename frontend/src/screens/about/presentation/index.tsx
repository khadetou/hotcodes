import React from "react";

import WhoWeAre from "/public/images/about/who-we-are.png";
import Mission from "/public/images/about/mission.png";
import Vision from "/public/images/about/vision.png";

import { useTranslation } from "next-i18next";
import Field from "./field";

const Presentation = () => {
  const { t } = useTranslation("about");

  const presentations = [
    {
      title: "",
      h1: t("presentation.aboutUs.h1"),
      paragraph: t("presentation.aboutUs.p"),
      button: "",
      src: WhoWeAre,
      style: "lg:flex-row-reverse",
      flip: "",
    },
    {
      title: "",
      h1: t("presentation.mission.h1"),
      paragraph: t("presentation.mission.p"),
      button: "",
      src: Mission,
      style: "lg:flex-row",
      flip: "flip-y",
    },
    {
      title: "",
      h1: t("presentation.vision.h1"),
      paragraph: t("presentation.vision.p"),
      button: t("presentation.marketing.button"),
      src: Vision,
      style: "lg:flex-row-reverse",
      flip: "",
    },
  ];

  return (
    <section className="mt-[148px]">
      <div className="containers">
        {presentations.map(
          ({ title, h1, paragraph, src, button, style, flip }, idx) => (
            <Field
              key={idx}
              src={src}
              title={title}
              h1={h1}
              paragraph={paragraph}
              button={button}
              style={style}
              flip={flip}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Presentation;
