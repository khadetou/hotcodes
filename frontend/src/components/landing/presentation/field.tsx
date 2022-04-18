import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { FaPlay } from "react-icons/fa";
import Button from "@/components/button/Button";

interface FieldProps {
  src: StaticImageData;
  fsrc: string;
  title: string;
  h1: string;
  paragraph: string;
  button: string;
  style?: string;
  fsrcStyle?: string;
  flip?: string;
}

const Field: FC<FieldProps> = ({
  src,
  title,
  paragraph,
  h1,
  style,
  fsrc,
  button,
  fsrcStyle,
  flip,
}) => {
  const h1Text = h1.split(".");

  return (
    <div
      className={`flex ${style} justify-between mb-[30px] xs:mb-[160px] flex-col-reverse`}
    >
      <div className="relative">
        <div className={`${fsrcStyle} w-1/2 xxs:w-[69%] `}>
          <Image src={fsrc} />
        </div>
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
      <div className="max-w-[651px]">
        <span className="uppercase font-semibold text-[17px] xxs:text-xl xs:text-2xl text-black">
          {title}
        </span>
        <h1 className="font-light lg:leading-[54px] md:leading-[76px] xl:leading-[76px] text-[33px] xs:text-[42px] leading-[1.2] lg:text-[54px] md:text-[80px] xl:text-[80px] my-[5px] xxs:leading-[44px]  text-dark lg:my-4 md:my-5 xl:my-5">
          <span className="text-transparent bg-grad-text-2 bg-clip-text">
            {h1Text[0]}
          </span>
          {h1Text[1]}
        </h1>
        <p className="text-dark text-base font-medium text-[14px] lg:text-[18px] md:text-xl xl:text-xl mb-[10px] leading-[26px] xxs:mb-[1rem] lg:mb-8">
          {paragraph}
        </p>
        <Button
          outline={false}
          value={button}
          className="text-lg py-[13px] px-[50px] font-bold text-dark-pink border-dark-pink mb-[1rem] md:mb-[14px]"
        />
      </div>
    </div>
  );
};

export default Field;
