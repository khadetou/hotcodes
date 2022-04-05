import { FC } from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
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
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
