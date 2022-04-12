import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";

const DropDown = () => {
  const onSelect = ({ key }: any) => {
    // console.log(key);
  };
  const onVisibleChange = (visible: boolean) => {
    // console.log(visible);
  };
  const menu = (
    <Menu onSelect={onSelect} className="bg-black text-white rounded-lg w-32 ">
      <MenuItem key="1" className="text-white hover:bg-red-600">
        {" "}
        1st menu item
      </MenuItem>
      <MenuItem key="2">
        <span className="fi fi-us mr-2"></span>2nd menu item
      </MenuItem>
      <Divider />
      <MenuItem key="3">3rd menu item</MenuItem>
    </Menu>
  );
  return (
    <Dropdown
      trigger={["click"]}
      overlay={menu}
      animation="slide-up"
      onVisibleChange={onVisibleChange}
    >
      <button className="text-black">Lang</button>
    </Dropdown>
  );
};

export default DropDown;
