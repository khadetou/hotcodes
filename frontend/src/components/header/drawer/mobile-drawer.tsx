import { FaBars, FaTimes } from "react-icons/fa";
import { menuItem } from "../data";
import { useState } from "react";
import Drawer from "./drawer";
import Link from "next/link";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      width="320px"
      drawerHandler={
        <div className="flex items-center justify-center shrink-0 w-[26px] lg:hidden">
          <FaBars size="26px" color="#000" />
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
          {menuItem.map(({ title, url }, key) => (
            <Link key={key} href={url}>
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
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
