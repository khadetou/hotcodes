import React, { FC } from "react";
import Image from "next/image";
interface BigcardsProps {
  title: string;
  toptitle: string;
  subtitle: string;
  image: string;
}
const Bigcards: FC<BigcardsProps> = ({ title, toptitle, subtitle, image }) => {
  return (
    <div className="max-w-[633px] max-h-[853px] lg:h-[853px]  rounded-[35px] shadow-shadow-sm flex flex-col items-center p-[20px] xxs:p-[34px]">
      <div className="text-center">
        <span className="text-xl text-gray text-center">The one and only</span>
        <h3 className="text-[31px] leading-[33px] xxs:text-[40px] xxs:leading-[42px] lg:text-[54px] lg:leading-[56px] text-dark font-medium mb-[3px]">
          {toptitle}
        </h3>
        <h1 className=" text-[33px] leading-[35px] xxs:text-[42px] sm:text-[49px] xxs:leading-[54px] lg:text-[62px]  xl:text-[81px]  lg:leading-[83px] font-semibold break-words text-dark ">
          {title}
        </h1>
        <p className="text-xl mt-[10px]">{subtitle}</p>
        <div className="flex justify-around mt-[25px]  items-center ">
          <button className="font-bold text-sm rounded-full bg-grad-text-2 text-white px-[20px] py-[8px]">
            Start now
          </button>
          <button className="font-bold text-base text-dark ">Learn more</button>
        </div>
      </div>
      <div className="mt-[59px]">
        <Image src={image} />
      </div>
    </div>
  );
};

export default Bigcards;