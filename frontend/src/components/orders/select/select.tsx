import { Dispatch, FC } from "react";
import { useState } from "react";

type Options = {
  id: string;
  title: string;
};

interface SelectProps {
  options: Options[];
  setSelected: Dispatch<any>;
  setSelectOther?: (value: boolean) => void;
  formData: any;
  selected: string;
  selectedTitle: string;
}

const Select: FC<SelectProps> = ({
  options,
  setSelected,
  formData,
  selected,
  selectedTitle,
  setSelectOther,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const onChange = (e: any) => {
    if (typeof setSelectOther === "function") {
      e.target.value === "Other"
        ? setSelectOther!(true)
        : setSelectOther!(false);
    }
    setSelected({
      ...formData,
      [e.target.name]: e.target.value !== "Other" ? e.target.value : "",
    });
    setToggle(false);
  };

  return (
    <div className="container">
      <div className="select-box">
        <div
          className={toggle ? "options-container active" : "options-container"}
        >
          {options.map(({ title, id }, idx) => (
            <div key={idx} className="option">
              <input
                type="radio"
                value={title}
                className="radio"
                name={selected}
                checked={selected === title}
                onChange={onChange}
                id={id}
              />
              <label htmlFor={id}>{title}</label>
            </div>
          ))}
        </div>
        <div className="selected" onClick={() => setToggle(!toggle)}>
          {formData[selected] === "" ? selectedTitle : formData[selected]}
        </div>
      </div>
    </div>
  );
};

export default Select;
