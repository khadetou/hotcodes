import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
interface BigcardsProps {
  title: string;
  toptitle: string;
  subtitle: string;
  image: StaticImageData;
}
const DesignCards: FC<BigcardsProps> = ({
  title,
  toptitle,
  subtitle,
  image,
}) => {
  return (
    <div className="max-w-[633px] max-h-[853px] lg:h-[853px]  rounded-[35px] shadow-shadow-sm rounde- flex flex-col items-center">
      <div className="rounded-t-[35px]">
        <Image src={image} className="rounded-t-[35px]" />
      </div>
      <div className="text-center">
        <h3 className="text-[18px]  xxs:text-[20px] lg:text-[32px] text-dark font-normal mb-[3px] mt-[35px]">
          {toptitle}
        </h3>
        <h1 className=" text-[40px] font-semibold break-words text-dark ">
          {title}
        </h1>
        <p className="text-xl mt-[10px]">{subtitle}</p>
        <div className="flex justify-between mt-[25px]  items-center ">
          <button className="font-bold text-sm rounded-full bg-grad-btn text-white px-24 py-4">
            more example
          </button>
          <button className="font-bold text-base text-dark-pink underline ">
            Select a plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignCards;
