import React, { FC } from "react";
import DropDown from "./dropdown";

interface LangProps {
  path: string;
}

const Lang: FC<LangProps> = ({ path }) => {
  return (
    <div>
      <DropDown path={path} />
    </div>
  );
};

export default Lang;
