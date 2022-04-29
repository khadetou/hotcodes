import { Dispatch, FC } from "react";
import { useState } from "react";
import Select from "react-select";
import { FaCheck } from "react-icons/fa";

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

const Selects: FC<SelectProps> = ({
  options,
  setSelected,
  formData,
  selected,
  selectedTitle,
  setSelectOther,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const onChange = (e: any, selected: string) => {
    if (typeof setSelectOther === "function") {
      e.value === "Other" ? setSelectOther!(true) : setSelectOther!(false);
    }
    setSelected({
      ...formData,
      [selected]: e.value !== "Other" ? e.value : "",
    });
    console.log(formData);
    setToggle(false);
  };

  const option: any = [];

  options.forEach(({ id, title }) => {
    option.push({
      value: title,
      label: (
        <div className=" font-medium text-[22px]">
          <span>{title}</span>
        </div>
      ),
    });
  });

  const styles = {
    control: (base: any, state: any) => ({
      ...base,
      color: "white",
      backgroundColor: "#fff",
      padding: "15px 20px",
      borderRadius: "28px",
      border: "none",
      boxShadow: "16px 0px 68px rgba(234, 0, 125, 0.27)",
      width: "524px",
      cursor: "pointer",
      "@media (max-width: 767px)": {
        padding: "6px 12px",
        borderRadius: "5px",
      },
    }),
    valueContainer: (base: any, state: any) => ({
      ...base,
      backgroundColor: "#F5F5F5",
      width: "403px",
      height: "68px",
      borderRadius: "21px",
      padding: "0px",
    }),
    indicatorsContainer: (base: any, state: any) => ({
      ...base,
      display: "none",
    }),
    placeholder: (base: any, state: any) => ({
      ...base,
      fontSize: "22px",
      textAlign: "center",
    }),
    menu: (base: any, state: any) => ({
      ...base,
      width: "524px",
      display: "flex",
      justifyContent: "center",
      borderRadius: "28px",
      border: "none",
    }),
    menuList: (base: any, state: any) => ({
      ...base,
      "&::-webkit-scrollbar": {
        width: " 0.375rem",
        height: "0.375rem",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "100vh",
        backgroundColor: "#ea007d",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#e0cbcb",
        borderRadius: "100vh",
        border: "3px solid #f6f7ed",
      },

      "&::-webkit-scrollbar-thumb:hover": {
        background: "#c0a0b9",
      },
    }),

    option: (base: any, state: any) => ({
      ...base,
      width: "496px",
      height: "68px",
      borderRadius: "20px",
      display: "flex",
      margin: "3px 0",
      alignItems: "center",
      color: "#E9E7E2",
      "&:hover": {
        color: "#393938",
      },
    }),
  };

  const theme = (theme: any) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#EA007D",
        primary25: "#f2f2f2",
      },
    };
  };

  const formatOptionLabel = (option: any, { context }: any) =>
    context === "value" ? (
      <div className="text-center font-medium text-[22px] text-dark">
        {option.label.props.children}
      </div>
    ) : (
      option.label
    );
  return (
    <div className="containers !px-0">
      <div className="select-box">
        <div
          className={toggle ? "options-container active" : "options-container"}
        >
          <Select
            options={option}
            theme={theme}
            styles={styles}
            instanceId="select"
            onChange={(value: any) => onChange(value, selected)}
            value={formData.selected}
            placeholder={selectedTitle}
            formatOptionLabel={formatOptionLabel}
            isSearchable={false}
            onFocus={() => setToggle(true)}
            onBlur={() => setToggle(false)}
          />
          {/* {options.map(({ title, id }, idx) => (
            <div key={idx} className="option">
              <input
                type="radio"
                value={title}
                className="radio"
                name={selected}
                checked={selected === title}
                // onChange={onChange}
                id={id}
              />
              <label htmlFor={id}>{title}</label>
            </div>
          ))} */}
        </div>
        {/* <div className="selected" onClick={() => setToggle(!toggle)}>
          {formData[selected] === "" ? selectedTitle : formData[selected]}
        </div> */}
      </div>
    </div>
  );
};

export default Selects;
