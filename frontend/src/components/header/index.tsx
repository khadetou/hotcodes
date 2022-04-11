import Link from "next/link";
import { FC } from "react";
import { menuItem } from "./data";
import MobileDrawer from "./drawer/mobile-drawer";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={`text-white py-5 w-full absolute min-w-0 top-0 left-0 transition-all ease-in duration-[0.4s] ${className}`}
    >
      <div className="flex justify-between items-center max-w-full w-full px-5 sm:px-[30px] md:max-w-[780px] lg:max-w-[1020px] mx-auto">
        <div className="text-black">Logo</div>
        <nav className="mx-auto hidden lg:flex nav">
          {menuItem.map(({ title, url }, key) => (
            <Link key={key} href={url}>
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                {title}
              </a>
            </Link>
          ))}
        </nav>
        <button>icons</button>
        <MobileDrawer />
      </div>
    </header>
  );
};

export default Header;
