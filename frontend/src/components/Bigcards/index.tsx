import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface BigcardsProps {
  title: string;
  toptitle: string;
  subtitle: string;
  image: string;
  link: string;
}
const Bigcards: FC<BigcardsProps> = ({
  title,
  toptitle,
  subtitle,
  image,
  link,
}) => {
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
          <Link href={link}>
            <button className="font-bold text-sm rounded-full max-w-[131px] h-[40px] w-full bg-grad-btn text-white">
              Start now
            </button>
          </Link>
          <button className="font-bold text-base text-dark-pink hover:border-b-2 hover:border-dark-pink ">
            Learn more
          </button>
        </div>
      </div>
      <div className="mt-[59px]">
        <Image src={image} />
      </div>
    </div>
  );
};

export default Bigcards;
