import { FC } from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  label: string;
  id?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  name,
  value,
  id,
  placeholder,
  onChange,
  label,
}) => {
  return (
    <>
      <div
        className={
          type === "text"
            ? `bg-white py-[15px] px-5 shadow-shadow-sm max-w-[621px] rounded-[23px]`
            : "max-w-[422px] bg-white py-[13px] px-[20px] shadow-shadow-sm rounded-[23px]"
        }
      >
        <label htmlFor="">{label}</label>
        <input
          className={
            type === "text"
              ? `bg-light-gray focus:border focus:border-[#e293d3] focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-[20px] md:px-[60px] py-6 text-dark text-lg md:text-[22px] font-medium`
              : ""
          }
          type={type}
          name={name}
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
