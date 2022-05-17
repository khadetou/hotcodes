import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FC } from "react";

interface SmallCardsProps {
  title: string;
  p: string;
  link?: string;
  src: string;
  className?: string;
}

const SmallCards: FC<SmallCardsProps> = ({
  title,
  p,
  link,
  src,
  className,
}) => {
  return (
    <div
      className={`max-w-[320px] max-h-[493px] lg:h-[493px] rounded-3xl shadow-shadow-sm p-6 mx-auto ${
        className && className
      }`}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-[29px] xxs:text-[40px] font-medium text-center text-transparent bg-clip-text bg-grad-text-2">
          {title}
        </h2>
        <p className="text-center text-dark font-medium text-[12px] xxs:text-[14px] mt-2">
          {p}
        </p>
        {link && (
          <Link href="/">
            <a className="mt-2 text-dark-pink flex items-center underline">
              {link}
              <span>
                <IoChevronForwardOutline />
              </span>
            </a>
          </Link>
        )}
      </div>
      <div className="mt-5 flex justify-center">
        <Image src={src} />
      </div>
    </div>
  );
};

export default SmallCards;
