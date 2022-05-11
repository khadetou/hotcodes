import React from "react";
import Image from "next/image";
import Traffic from "/public/images/marketing/traffic.png";
import Pay from "/public/images/marketing/indonesia.png";
import Vision from "/public/images/about/vision.png";
import Audit from "/public/images/marketing/audit.png";
import Map from "/public/images/marketing/map.svg";

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
      src: Traffic,
      style: "lg:flex-row-reverse",
      flip: "",
    },
    {
      title: "EXPERIENCE",
      h1: "Pay For a. Quality  Work",
      paragraph:
        "HotCodes stays  ahead of the curve with digital marketing trends. Our success has us leading the pack amongst our competitors with our ability to anticipate change and innovation.",
      button: t("presentation.dev.button"),
      src: Pay,
      audit: Audit,
      style: "lg:flex-row",
      flip: "flip-y",
    },
  ];

  return (
    <section className="mt-[148px] relative">
      <div className="absolute top-0">
        <Image src={Map} />
      </div>
      <div className="containers">
        {presentations.map(
          ({ audit, title, h1, paragraph, src, button, style, flip }, idx) => (
            <Field
              key={idx}
              src={src}
              title={title}
              h1={h1}
              audit={audit}
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
