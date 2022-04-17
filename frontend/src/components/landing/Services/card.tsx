import { FC } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  paragraph: string;
  src: string;
}

const Card: FC<CardProps> = ({ title, paragraph, src }) => {
  return (
    <div className="max-w-[408px] py-6 xxs:py-0 h-[235] xxs:h-[345px] shadow-shadow rounded-[40px] xxs:mt-[124px] mt-[90px] px-6 relative">
      <div className="absolute  left-[50%] -translate-x-[50%] -top-[25%] md:-top-[29%] ">
        <Image src={src} />
      </div>

      <h1 className="pt-[46px] text-xl xxs:pt-[95px] xsm:pt-[137px] md:pt-[128px] xxs:text-[26px] xs:pt-[116px] font-bold uppercase text-transparent bg-clip-text bg-grad-text-2 text-center">
        {title}
      </h1>
      <p className="mt-[5px] text-[13px]  text-center font-medium leading-6 xxs:text-[14px] xs:text-[22px] text-dark xxs:mt-4">
        {paragraph}
      </p>
    </div>
  );
};

export default Card;
