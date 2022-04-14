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
  shadow?: string;
  font?: string;
  className?: string;
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
  shadow,
  font,
  className,
}) => {
  return (
    <button
      className={
        outline
          ? `xs:${py}  ${mx} ${my} ${shadow} ${font} ${leading}  xs:${px} ${bg} ${text} ${className} text-base xl:text-${size} ${rounded}`
          : `xs:${py} ${mx} ${my} ${shadow} ${font} ${leading} ${mr} xs:${px} ${border} ${className}  ${outlText} text-base xl:text-${size} ${rounded}`
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
  text: "text-white",
  rounded: "rounded-md",
  outline: true,
  border: "border-black border-2",
  outlText: "text-black",
  leading: "leading-none",
  value: "Button",
};

export default Button;
