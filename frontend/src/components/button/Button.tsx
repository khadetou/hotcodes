import React, { FC } from "react";

interface ButtonProps {
  py?: string;
  px?: string;
  bg?: string;
  text?: string;
  size?: string;
  rounded?: string;
  outline?: boolean;
  border?: string;
  outlText?: string;
  value?: string;
}
const Button: FC<ButtonProps> = ({
  py,
  px,
  bg,
  text,
  size,
  rounded,
  outline,
  border,
  outlText,
  value,
}) => {
  return (
    <button
      className={
        outline
          ? `py-${py}  px-${px} ${bg} text-${text} text-${size} ${rounded}`
          : `py-${py}  px-${px} ${border}  text-${outlText} text-${size} ${rounded}`
      }
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  px: "5",
  py: "[16px]",
  bg: "bg-black",
  size: "md",
  text: "white",
  rounded: "rounded-md",
  outline: true,
  border: "border-black border-2",
  outlText: "black",
  value: "Button",
};

export default Button;
