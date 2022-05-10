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
      title: "WHO WE ARE",
      h1: "Boots Your. Website Traffic !",
      paragraph:
        "We are passionate about our work. Our designers stay ahead curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. We care about your business, wich is why we work with you",
      button: t("presentation.design.button"),
      src: WhoWeAre,
      style: "lg:flex-row",
      flip: "",
    },
    {
      title: "",
      h1: "Our. Mission",
      paragraph:
        "We are passionate about our work. Our designers stay ahead curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. We care about your business, wich is why we work with you",
      button: t("presentation.dev.button"),
      src: Mission,
      style: "lg:flex-row-reverse",
      flip: "flip-y",
    },
    {
      title: "",
      h1: "Our. Vision",
      paragraph:
        "We are passionate about our work. Our designers stay ahead curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. We care about your business, wich is why we work with you",
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
