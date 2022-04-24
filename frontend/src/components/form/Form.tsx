import React, { FC, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import codes from "country-calling-code";
import Select from "react-select";
import Input from "./Input";

interface FormProps {
  className?: string;
}

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
    id: "tel",
  },
];

const Form: FC<FormProps> = ({ className }) => {
  //TEXT AREA
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

  // REACT SELECT
  const options: any = [];

  codes.forEach(({ isoCode2, country, countryCodes, isoCode3 }, idx) => {
    options.push({
      value: countryCodes[0],
      label: (
        <div className=" hover:text-white font-medium">
          <span
            className={`mr-2  fi fi-${isoCode2.toLocaleLowerCase()}`}
          ></span>
          {country}
        </div>
      ),
    });
  });

  const styles = {
    control: (base: any, state: any) => ({
      ...base,
      color: "white",
      backgroundColor: "#ea007d",
      padding: "12px 24px",
      borderRadius: "19px",
      cursor: "pointer",
      "@media (max-width: 768px)": {
        padding: "8px 16px",
      },
    }),
    menu: (base: any, state: any) => ({
      ...base,
      width: "384px",
      borderRadius: "10px",
    }),
    menuList: (base: any, state: any) => ({
      ...base,
      "&::-webkit-scrollbar": {
        width: " 0.375rem",
        height: "0.375rem",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "100vh",
        backgroundColor: "#ea007d",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#e0cbcb",
        borderRadius: "100vh",
        border: "3px solid #f6f7ed",
      },

      "&::-webkit-scrollbar-thumb:hover": {
        background: "#c0a0b9",
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      "&:hover": {
        color: "#fff",
      },
    }),
    placeholder: (base: any, state: any) => ({
      ...base,
      color: "#fff",
    }),
    input: (base: any, state: any) => ({
      ...base,
      color: "#fff",
    }),

    indicatorsContainer: (base: any, state: any) => ({
      ...base,
      display: "none",
    }),
  };

  const theme = (theme: any) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#EA007D",
        primary25: "#E293D3",
      },
    };
  };
  const formatOptionLabel = (option: any, { context }: any) =>
    context === "value" ? (
      <div className="text-white text-medium">
        <span className={option.label.props.children[0].props.className}></span>
        {`+${option.value}`}
      </div>
    ) : (
      option.label
    );
  return (
    <div
      className={`h-full m-w-[1300px] w-full shadow-shadow  rounded-[35px]  mb-[160px] ${className}`}
    >
      <form className="w-full h-full flex flex-col items-center  p-[43px]">
        {Inputs.map(({ label, id }, idx) => (
          <Input
            htmlFor={id}
            key={idx}
            CountryDropdown={() => (
              <Select
                theme={theme}
                formatOptionLabel={formatOptionLabel}
                instanceId="country-select"
                defaultValue={options[188]}
                styles={styles}
                className="!absolute !top-1/2 !-translate-y-1/2 left-[10px] md:!left-[20px] !z-50 "
                options={options}
              />
            )}
            id={id}
            label={label}
            type={id}
          />
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
          <button className="font-bold text-white bg-dark-pink text-base py-[10px] px-[25px] md:py-[15px] md:px-[159px] rounded-lg border-2 border-blue">
            Send
          </button>
          <div className="text-dark-pink text-3xl py-1 px-4 border-2 border-dark-pink rounded-lg">
            <FiMail />
          </div>
          <div className="text-dark-pink text-3xl py-1 px-4 border-2 border-dark-pink rounded-lg">
            <FaWhatsapp />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
