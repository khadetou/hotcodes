import React, { FC, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import codes from "country-calling-code";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";

import Input from "./Input";
interface FormProps {
  className?: string;
}

console.log(codes);

const Inputs = [
  {
    label: "First Name",
    id: "f-Name",
  },
  {
    label: "Last Name",
    id: "l-Name",
  },
  {
    label: "Email",
    id: "email",
  },
  {
    label: "Number phone",
    id: "number",
  },
];

const Form: FC<FormProps> = ({ className }) => {
  const [textareaFocused, setTextareaFocused] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: 0,
    message: "",
  });

  const onFocus = () => {
    setTextareaFocused(true);
  };

  const onBlur = (e: any) => {
    if (e.target.value === "") {
      setTextareaFocused(false);
    }
  };

  const menu = (
    <Menu>
      {codes.map(({ country, countryCodes, isoCode2, isoCode3 }) => (
        <MenuItem key={isoCode2}>
          <div className="flex items-center">
            <span className={`fi fi-${isoCode2.toLocaleLowerCase()}`}></span>
            <span>{country}</span>
            <span>{countryCodes[0]}</span>
          </div>
        </MenuItem>
      ))}
    </Menu>
  );
  return (
    <div
      className={`h-full m-w-[1300px] w-full shadow-shadow  rounded-[35px]  mb-[160px] ${className}`}
    >
      <form className="w-full h-full flex flex-col items-center  p-[43px]">
        {Inputs.map(({ label, id }, idx) => (
          <Input htmlFor={id} key={idx} id={id} label={label} type={id} />
        ))}
        <div className="  max-w-[822px] w-full rounded-[23px]   mb-[36px] relative">
          <label
            className={`text-[#b2b2b2] absolute left-[60px] font-normal text-[18px] top-[10%] -translate-y-1/2 transition-all duration-300  ${
              textareaFocused && "focus"
            }`}
            htmlFor="message"
          >
            Enter your message
          </label>
          <textarea
            onFocus={onFocus}
            onBlur={onBlur}
            rows={8}
            className=" focus:border bg-[#f5f5f5]  focus:border-[#e293d3] focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-[60px] py-8 text-dark text-[22px] font-medium"
            id="message"
          ></textarea>
        </div>
        <div className="flex justify-between items-center w-full max-w-[822px]">
          <button className="font-bold text-white bg-dark-pink text-base py-[15px] px-[159px] rounded-lg border-2 border-blue">
            Send
          </button>
          <div className="text-dark-pink text-3xl py-1 px-4 border-2 border-dark-pink rounded-lg">
            <FiMail />
          </div>
          <div className="text-dark-pink text-3xl py-1 px-4 border-2 border-dark-pink rounded-lg">
            <FaWhatsapp />
          </div>

          {/* <div className="bg-dark-pink py-[15px] px-10 rounded-[33px]">
            <Dropdown
              trigger={["click"]}
              overlay={menu}
              animation="slide-down"
              onVisibleChange={(visible) => {
                console.log(visible);
              }}
            >
              <div className="text-dark-pink text-3xl py-1 px-4 border-2 border-dark-pink rounded-lg">
                <span className="fi fi-flag"></span>

                <span>+91</span>

                <span>India</span>
              </div>
            </Dropdown>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default Form;
