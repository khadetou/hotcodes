import Link from "next/link";
import { FC } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface CatTitlesProps {
  className?: string;
}

const CatTitles: FC<CatTitlesProps> = ({ className }) => {
  return (
    <div className="mb-[53px] containers flex justify-between">
      <div className="flex items-center justify-between w-full max-w-[300px]">
        <h1 className="text-dark text-4xl font-semibold">Developement</h1>
        <div className={`w-2 h-2 bg-dark-pink rounded-full ${className}`}></div>
      </div>
      <Link href="/">
        <button
          type="button"
          className="flex w-full max-w-[210px] items-center justify-between text-dark-pink"
        >
          <span className="text-[18px] font-normal">See all the articles</span>
          <BsArrowRightCircleFill className="ml-[5px] " size="35" />
        </button>
      </Link>
    </div>
  );
};

export default CatTitles;
