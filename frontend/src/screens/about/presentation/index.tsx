import React from "react";

import WhoWeAre from "/public/images/about/who-we-are.png";
import Mission from "/public/images/about/mission.png";
import Vision from "/public/images/about/vision.png";

import { useTranslation } from "next-i18next";
import Field from "./field";

const Presentation = () => {
  const { t } = useTranslation("common");

  const presentations = [
    {
      title: t("presentation.design.title"),
      h1: t("presentation.design.h1"),
      paragraph: t("presentation.design.p"),
      button: t("presentation.design.button"),
      src: WhoWeAre,
      style: "lg:flex-row",
      flip: "",
    },
    {
      title: t("presentation.dev.title"),
      h1: t("presentation.dev.h1"),
      paragraph: t("presentation.dev.p"),
      button: t("presentation.dev.button"),
      src: Mission,
      style: "lg:flex-row-reverse",
      flip: "flip-y",
    },
    {
      title: t("presentation.marketing.title"),
      h1: t("presentation.marketing.h1"),
      paragraph: t("presentation.marketing.p"),
      button: t("presentation.marketing.button"),
      src: Vision,
      style: "lg:flex-row",
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
