import Link from "next/link";
import { FC } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import MobileDrawer from "./drawer/mobile-drawer";
import Lang from "./lang/Lang";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Logo from "/public/images/hotcodes.svg";

interface HeaderProps {
  className?: string;
  bgClassName?: string;
  buttonClassName?: string;
}

const Header: FC<HeaderProps> = ({
  className,
  bgClassName,
  buttonClassName,
}) => {
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
      <div className={`w-full bg-header h-11 flex items-center ${bgClassName}`}>
        <div className="flex justify-between  items-center containers">
          <Link href="/">
            <a className="w-[95px] flex items-center xl:w-[115px]">
              <Image src={Logo} />
            </a>
          </Link>
          <nav className="mx-auto hidden lg:flex nav">
            {menues.map(({ title, path }, key) => (
              <Link key={key} href={path}>
                <a className="block px-1 mx-1 my-1 py-1 xl:px-1  xl:py-1 xl:text-xl  font-Inter font-normal leading-none text-[0.95rem] hover:underline lg:text-base hover:text-gray-500 transition-all duration-500 ease-linear">
                  {title}
                </a>
              </Link>
            ))}
          </nav>
          <div className="flex  items-center">
            <Lang path="/" />
            <div className="lg:flex  hidden items-center">
              <Link href="/login">
                <a className="mx-[15px] sm:mx-[30px] lg:mx-0">
                  <FaUser className="text-white text-[20px] sm:text-[26px]  text-xl block lg:hidden" />
                </a>
              </Link>

              <Link href="/login">
                <a className="m-0 lg:mx-[30px] ">
                  <AiOutlineLogin
                    title="Login"
                    size="29px"
                    className="cursor-pointer hidden lg:block"
                  />
                </a>
              </Link>
              <Link href="/register">
                <a>
                  <button
                    className={`border-2 border-white rounded-md font-medium text-sm mr-2 px-2 xxs:font-bold xxs:text-base xxs:mr-0 xxs:px-10 xxs:py-1 ${buttonClassName}`}
                  >
                    {t("signup")}
                  </button>
                </a>
              </Link>
            </div>
            <MobileDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
