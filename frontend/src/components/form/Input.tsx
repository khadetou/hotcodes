import { FC, useState } from "react";

interface InputProps {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  htmlFor: string;
  type: string;
  id: string;
  label: string;
}

const Input: FC<InputProps> = ({
  className,
  inputClassName,
  labelClassName,
  htmlFor,
  type,
  id,
  label,
}) => {
  const [focused, setFocused] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: 0,
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = (e: any) => {
    if (e.target.value === "") {
      setFocused(false);
    }
  };

  return (
    <div
      className={`max-w-[822px] w-full h-[88px] rounded-[23px] bg-[#f5f5f5] ${className} mb-[36px] relative`}
    >
      <label
        htmlFor={htmlFor}
        className={`text-[#b2b2b2] absolute left-[60px] font-normal text-[18px] top-1/2 -translate-y-1/2 transition-all duration-300  ${
          focused && "focus"
        } ${labelClassName}`}
      >
        {label}
      </label>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        name={id}
        id={id}
        className={`bg-transparent focus:border focus:border-[#e293d3] focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-[60px] py-2 text-dark text-[22px] font-medium ${inputClassName}`}
      />
    </div>
  );
};

export default Input;
