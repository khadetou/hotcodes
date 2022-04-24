import { FC } from "react";
import Footer from "./footer/Footer";
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
      <Footer />
    </>
  );
};

export default Layout;
