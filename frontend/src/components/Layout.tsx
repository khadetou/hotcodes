import { FC } from "react";
import Header from "./header/index";

interface LayoutProp {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Layout: FC<LayoutProp> = ({ children, isOpen, setIsOpen }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
