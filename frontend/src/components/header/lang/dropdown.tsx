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

  const onSelect = ({ key }: any) => {
    // push(`${path}${key}`);
  };
  const onVisibleChange = (visible: boolean) => {
    // console.log(visible);
  };
  const menu = (
    <Menu onSelect={onSelect} className="bg-black text-white rounded-lg w-32 ">
      <MenuItem key="fr" className="text-white hover:bg-red-600">
        <Link href={path!} locale={"fr"}>
          <div>
            <span className="fi fi-fr mr-2"></span> French
          </div>
        </Link>
      </MenuItem>
      <MenuItem key="en">
        <Link href={path!} locale={"en"}>
          <div>
            <span className="fi fi-us mr-2"></span> English
          </div>
        </Link>
      </MenuItem>
    </Menu>
  );
  return (
    <Dropdown
      trigger={["hover"]}
      overlay={menu}
      animation="slide-up"
      onVisibleChange={onVisibleChange}
    >
      <button className="text-black">Lang</button>
    </Dropdown>
  );
};

DropDown.defaultProps = {
  path: "/",
};

export default DropDown;
