import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Drawer from "./drawer";
import Link from "next/link";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
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
    <Drawer
      width="320px"
      drawerHandler={
        <div className="flex items-center justify-center shrink-0 w-[26px] lg:hidden">
          <FaBars size="26px" color="#fff" />
        </div>
      }
      open={open}
      toggleHandler={() => setOpen(!open)}
      closeButton={<FaTimes size="26px" color="#000" />}
      drawerStyle="w-full h-full"
      closeBtnStyle="flex items-center justify-center top-[25px] right-[30px] absolute z-10 cursor-pointer"
    >
      <div className="w-full h-full flex flex-col pt-[100px] pb-[40px] px-[30px]">
        <div className="w-full flex flex-col menu">
          {menues.map(({ title, path }, key) => (
            <Link key={key} href={path}>
              <a className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className="w-full flex flex-col items-center mt-auto">
          <div className="w-full flex items-center justify-center">
            <span className="flex items-center justify-center text-primary text-[14px] mr-[15px] cursor-pointer">
              Logo
            </span>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
