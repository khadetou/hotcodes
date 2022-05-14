import React, { FC } from "react";

interface Props {
  open: boolean;
}
const EcommerceIcon: FC<Props> = ({ open }) => {
  return (
    <svg
      className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
        open && "transform rotate-180"
      }`}
      viewBox="0 0 12 12"
    >
      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
    </svg>
  );
};

export default EcommerceIcon;
