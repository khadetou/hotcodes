import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { FaPlay } from "react-icons/fa";
import Button from "@/components/button/Button";
import { useRouter } from "next/router";

interface FieldProps {
  src: StaticImageData;
  title: string;
  h1: string;
  paragraph: string;
  button: string;
  style?: string;
  flip?: string;
}

const Field: FC<FieldProps> = ({
  src,
  title,
  paragraph,
  h1,
  style,

  button,

  flip,
}) => {
  const { locale } = useRouter();
  const styles =
    locale === "en"
      ? "md:text-[83px] xl:text-[83px] md:leading-[76px] xl:leading-[76px] "
      : "md:text-[54px] xl:text-[54px] md:leading-[65px] xl:leading-[65px] ";
  const h1Text = h1.split(".");

  return (
    <div
      className={`flex ${style} justify-between mb-[30px] xs:mb-[160px] flex-col-reverse items-center`}
    >
      <div className="relative  lg:mr-6">
        <span className="absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-dark-pink rounded-full  w-16 h-16 xxs:w-28 xxs:h-28 flex items-center justify-center bg-opacity-50 ">
          <FaPlay
            color="#fff"
            className="h-[28px] w-[28px] xxs:h-[55px] xxs:w-[55px] "
          />
        </span>
        <div className={flip}>
          <Image src={src} />
        </div>
      </div>
      <div className="max-w-[639px] w-full">
        <span className="uppercase font-semibold text-[17px] xxs:text-xl text-dark-pink">
          {title}
        </span>
        <h1
          className={`text-dark leading-[1.2] md:leading-[inherit] w-full font-bold text-[47px]`}
        >
          <span className="text-transparent bg-grad-text-2 bg-clip-text">
            {h1Text[0]}
          </span>
          {h1Text[1]}
        </h1>
        <p className="text-dark text-base font-medium text-[14px] lg:text-[18px] md:text-xl xl:text-xl mb-[10px] leading-[26px] xxs:mb-[1rem] lg:mb-8">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Field;
