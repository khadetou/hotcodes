import { FC } from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  label: string;
  id?: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
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
  className,
  containerClassName,
}) => {
  console.log(label);

  return (
    <label className="flex flex-col ">
      {type !== "checkbox" && label !== "" && (
        <label
          className="text-[18px] font-medium text-center text-dark mb-4"
          htmlFor=""
        >
          {label}
        </label>
      )}
      <div
        className={
          type === "text"
            ? `bg-white ${
                containerClassName && containerClassName
              } py-[15px] px-5 shadow-shadow max-w-[621px] rounded-[23px]`
            : "w-[346px] bg-white  py-[13px] px-[20px] shadow-shadow-sm mb-[51px] rounded-[23px]"
        }
      >
        <div
          className={
            type === "checkbox"
              ? "bg-light-gray p-3 w-full rounded-[15px] flex items-center flex-row-reverse justify-end"
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
                ? `bg-light-gray ${
                    className && className
                  } focus:border focus:border-[#e293d3] focus:shadow-input focus:ring-0  !focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-[20px] md:px-[60px] border-none py-6 text-dark text-lg md:text-[22px] font-medium`
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
    </label>
  );
};

export default Input;
