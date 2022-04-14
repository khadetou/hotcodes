import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";

interface DropDownProps {
  path?: string;
}

const DropDown: FC<DropDownProps> = ({ path }) => {
  const { locale, push } = useRouter();

  const onSelect = ({ key }: any) => {};
  const onVisibleChange = (visible: boolean) => {
    // console.log(visible);
  };
  const menu = (
    <Menu
      onSelect={onSelect}
      activeKey={locale}
      className="bg-black text-white rounded-lg w-32  "
    >
      <MenuItem key="fr" className="cursor-pointer">
        <Link href={path!} locale={"fr"}>
          <div className="cursor-pointer px-3 py-2 text-black font-medium">
            <span className="fi fi-fr mr-2 "></span> French (Fr)
          </div>
        </Link>
      </MenuItem>
      <MenuItem key="en" className="cursor-pointer">
        <Link href={path!} locale={"en"}>
          <div className="cursor-pointer px-3 py-2 text-black font-medium">
            <span className="fi fi-us w-6 mr-2"></span> English (En)
          </div>
        </Link>
      </MenuItem>
    </Menu>
  );
  return (
    <Dropdown
      trigger={["click"]}
      overlay={menu}
      animation="slide-up"
      onVisibleChange={onVisibleChange}
    >
      <button className="text-black">
        <span
          className={locale === "fr" ? `fi fi-${locale}` : "fi fi-us"}
        ></span>
      </button>
    </Dropdown>
  );
};

DropDown.defaultProps = {
  path: "/",
};

export default DropDown;
