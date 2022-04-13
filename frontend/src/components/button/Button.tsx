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
  leading?: string;
  value?: string;
  mx?: string;
  my?: string;
  mr?: string;
  ml?: string;
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
  mx,
  my,
  ml,
  mr,
  leading,
}) => {
  return (
    <button
      className={
        outline
          ? `${py}  ${mx} ${my} ${leading}  ${px} ${bg} text-${text} text-base xl:text-${size} ${rounded}`
          : `${py} ${mx} ${my}  ${leading} ${mr} ${px} ${border}  text-${outlText} text-base xl:text-${size} ${rounded}`
      }
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  px: "px-6",
  py: "py-[5px]",
  bg: "bg-black",
  size: "xl",
  text: "white",
  rounded: "rounded-md",
  outline: true,
  border: "border-black border-2",
  outlText: "black",
  leading: "leading-none",
  value: "Button",
};

export default Button;
