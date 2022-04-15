import Link from "next/link";
import { FC } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Button from "../button/Button";
import MobileDrawer from "./drawer/mobile-drawer";
import Lang from "./lang/Lang";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Logo from "/public/images/hotcodes.svg";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation("header");
  const menues = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("services"), path: "/services" },
    { title: t("work"), path: "/work" },
    { title: t("products"), path: "/products" },
    { title: t("career"), path: "/career" },
    { title: t("blogs"), path: "/blogs" },
  ];

  return (
    <header
      className={`text-white w-full absolute z-20 min-w-0 top-0 left-0 transition-all ease-in duration-[0.4s] ${className}`}
    >
      <div className="w-full bg-header h-11 flex items-center">
        <div className="flex justify-between  items-center containers">
          <Link href="/">
            <a className="w-[95px] flex items-center xl:w-[115px]">
              <Image src={Logo} />
            </a>
          </Link>
          <nav className="mx-auto hidden lg:flex nav">
            {menues.map(({ title, path }, key) => (
              <Link key={key} href={path}>
                <a className="block px-1 mx-1 my-1 py-1 xl:px-1  xl:py-1 xl:text-xl text-white font-Inter font-normal leading-none text-[0.95rem] hover:underline lg:text-base hover:text-gray-500 transition-all duration-500 ease-linear">
                  {title}
                </a>
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <Lang path="/" />
            <Link href="/login">
              <a>
                <FaUser className="text-white text-[20px] sm:text-[26px] mx-[15px] sm:mx-[30px] text-xl block lg:hidden" />
              </a>
            </Link>

            <Link href="/login">
              <a>
                <AiOutlineLogin
                  size="29px"
                  className="cursor-pointer hidden lg:block text-white mr-3 ml-5 lg:mx-[30px] "
                />
              </a>
            </Link>
            <Link href="/register">
              <a>
                <Button
                  className="leading-loose hidden lg:block"
                  outline={false}
                  border="border-white border-2"
                  outlText="white"
                  rounded="rounded-full"
                  value={t("signup")}
                  px="px-4"
                  mr="mr-3"
                />
              </a>
            </Link>
            <MobileDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
