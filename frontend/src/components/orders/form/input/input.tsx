import { FC, useRef } from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  data?: any;
  id?: string;
  checked?: boolean;
  placeholder?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  name,
  value,
  id,
  placeholder,
  data,
  checked,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        // checked={checked}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
