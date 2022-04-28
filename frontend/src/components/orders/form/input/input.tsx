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
  console.log(label);

  return (
    <>
      {type !== "checkbox" && <label htmlFor="">{label}</label>}
      <div
        className={
          type === "text"
            ? `bg-white py-[15px] px-5 shadow-shadow-sm max-w-[621px] rounded-[23px]`
            : "max-w-[422px] bg-white py-[13px] px-[20px] shadow-shadow-sm rounded-[23px]"
        }
      >
        <div
          className={
            type === "checkbox"
              ? "bg-light-gray py-3 px-5 rounded-[15px] flex items-center flex-row-reverse justify-end"
              : ""
          }
        >
          {type === "checkbox" ? (
            <label className="text-dark font-medium text-[18px] ml-2">
              {label}
            </label>
          ) : (
            ""
          )}
          <input
            className={
              type === "text"
                ? `bg-light-gray focus:border focus:border-[#e293d3] focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-[20px] md:px-[60px] border-none py-6 text-dark text-lg md:text-[22px] font-medium`
                : "border-light-gray w-8 h-8 text-dark-pink focus:ring-0 rounded-lg border-2"
            }
            type={type}
            name={name}
            value={value}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
