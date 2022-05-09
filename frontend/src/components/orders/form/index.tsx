import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Selects from "@/components/orders/form/select/select";
import { HiOutlineDownload } from "react-icons/hi";

import {
  plateforms,
  goal,
  typeApp,
  targets,
  checkbox,
} from "@/components/orders/lists";
import Input from "./input/input";
import Upload from "./uploads";
import Titlebold from "@/components/Title/titlebold";

interface FormProps {
  title: string;
  Action: (order?: any) => (dispatch: any) => Promise<void>;
}

const Form: FC<FormProps> = ({ title, Action }) => {
  //USE ACTIONS-------------------------------------------
  const { LoadUser } = useActions();
  const { isAuthenticated } = useTypedSelector((state) => state.authReducer);

  //USE ROUTER-------------------------------------------------------------
  const router = useRouter();

  //USE STATES--------------------------------------
  const [formData, setFormData] = useState<any>({
    plateform: "",
    typeapp: "",
    appName: "",
    description: "",
    goal: "",
    design: "",
    functionnality: "",
  });
  const [other, setOther] = useState(false);
  const [otherfunc, setOtherfunc] = useState(false);
  const [otherTypeApp, setOtherTypeApp] = useState(false);
  const [otherGoal, setOtherGoal] = useState(false);
  const [previewImages, setPreviewImages] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [textareaFocused, setTextareaFocused] = useState(false);

  //LOCAL STORAGE ITEMS--------------------------------------

  if (
    formData.plateform ||
    formData.typeapp ||
    formData.appName ||
    formData.goal
  ) {
    const stringFormData = JSON.stringify(formData);
    typeof localStorage !== "undefined" &&
      localStorage.setItem("formData", stringFormData);
  }

  //USE EFFECTS--------------------------------------
  useEffect(() => {
    LoadUser();
    if (isAuthenticated) {
      typeof localStorage !== "undefined" &&
        localStorage.formData &&
        setFormData(JSON.parse(localStorage.getItem("formData") as string));
    }
  }, [isAuthenticated, typeof localStorage !== "undefined" && localStorage]);

  //HANDLE CHANGES-------------------------------------------------------------
  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e: any) => {
    e.target.checked &&
      e.target.name === "functionnality" &&
      e.target.value === "Other" &&
      setOtherfunc(true);
    !e.target.checked &&
      e.target.name === "functionnality" &&
      e.target.value === "Other" &&
      setOtherfunc(false);

    e.target.checked &&
      e.target.name === "target" &&
      e.target.value === "Other" &&
      setOther(true);
    !e.target.checked &&
      e.target.name === "target" &&
      e.target.value === "Other" &&
      setOther(false);
    if (e.target.checked && e.target.value !== "Other") {
      if (formData.functionnality !== "") {
        formData.functionnality += "," + e.target.value;
      } else {
        formData.functionnality = e.target.value;
      }
    } else if (
      formData.functionnality.indexOf(",") === -1 &&
      formData.functionnality.includes(e.target.value)
    ) {
      formData.functionnality = formData.functionnality.replace(
        e.target.value,
        ""
      );
    } else if (
      formData.functionnality.includes(e.target.value) &&
      !e.target.checked
    ) {
      formData.functionnality = formData.functionnality.replace(
        "," + e.target.value,
        ""
      );
    }
    setFormData({ ...formData, [e.target.name]: formData.functionnality });
  };

  const onChangeImage = (e: any) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setPreviewImages([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldArray: any) => [...oldArray, reader.result]);
          setPreviewImages((oldArray: any) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (isAuthenticated) {
      const order = {
        ...formData,
        design: images,
      };
      if (images.length !== 0) {
        Action(order);
      } else {
        Action(formData);
      }
      typeof localStorage !== "undefined" &&
        localStorage.removeItem("formData");
    } else {
      router.push({
        pathname: "/login",
        query: { from: router.pathname },
      });
    }
  };

  const onFocus = () => {
    setTextareaFocused(true);
  };

  const onBlur = (e: any) => {
    if (e.target.value === "") {
      setTextareaFocused(false);
    }
  };

  //JSX RETURN-----------------------------------------------------------------
  return (
    <section>
      {/* <a href="https://api.whatsapp.com/send/?phone=+221786004564&text&app_absent=0">
        Call me
      </a> */}

      <div className="containers">
        <form onSubmit={onSubmit}>
          <Titlebold title={title} />

          <div className="flex justify-between mt-[60px] mb-[104px]">
            <Selects
              options={plateforms}
              selected="plateform"
              formData={formData}
              setSelected={setFormData}
              selectedTitle="Select a plateform"
            />
            <Selects
              setSelectOther={setOtherTypeApp}
              options={typeApp}
              formData={formData}
              selected="typeapp"
              setSelected={setFormData}
              selectedTitle="Type of app"
              className="flex justify-end"
            />
          </div>

          <div className="flex mb-[47px] justify-between">
            <Input
              type="text"
              name="typeapp"
              id="typeofapp"
              value={formData.typeofapp}
              label="Enter the Type of App"
              onChange={onChange}
            />

            <Input
              type="text"
              name="appName"
              value={formData.appName}
              label="Enter the App name"
              onChange={onChange}
            />
          </div>
          <div className="bg-white shadow-shadow-sm py-5 px-8 max-w-[1300px] rounded-[51px] flex flex-col justify-center w-full relative">
            <label
              className={`text-[#b2b2b2] absolute left-[20px] md:left-[90px] font-normal mb-4 text-sm xxs:text-base  top-[13%] transition-all duration-300 -translate-y-1/2 ${
                textareaFocused && "focus !top-[10%]"
              }`}
              htmlFor="decription"
            >
              Enter your app description
            </label>

            <textarea
              className="focus:border focus:ring-0 bg-[#f5f5f5]  focus:border-[#e293d3] focus:shadow-input border-none focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-5  md:px-[60px] py-8 text-dark text-[22px] font-medium"
              name="description"
              value={formData.description}
              id="description"
              onFocus={onFocus}
              onBlur={onBlur}
              cols={30}
              rows={10}
              onChange={onChange}
            ></textarea>
          </div>
          <Titlebold title="What is the goal?" />

          <div className="flex items-center mt-[62px] mb-[62px]">
            <Selects
              setSelectOther={setOtherGoal}
              options={goal}
              formData={formData}
              setSelected={setFormData}
              selected="goal"
              selectedTitle="Select a goal"
            />
            <Input
              type="text"
              name="goal"
              label="Your goal"
              value={formData.goal}
              onChange={onChange}
            />
          </div>

          <Titlebold title="Who is the target audience" />
          {/* <label htmlFor="">Select a functionnality</label> */}
          <div className="grid grid-cols-3 gap-4 mt-[65px]">
            {targets.map(({ id, title }, idx) => (
              <React.Fragment key={idx}>
                <Input
                  type="checkbox"
                  name="target"
                  label={title}
                  value={title}
                  id={id}
                  onChange={onCheckboxChange}
                />
              </React.Fragment>
            ))}
            {other && (
              <>
                <Input
                  type="text"
                  value={formData.functionnality}
                  onChange={onChange}
                  label="Enter a target audience"
                  name="target"
                  className="!p-[12px] !text-[18px] !rounded-lg"
                  containerClassName="!py-[13px] !shadow-shadow-sm !h-[82px]  !px-[20px]"
                  labelClassName="!w-[348px]"
                />
              </>
            )}
          </div>

          <Titlebold title="Add specific functionalities" />
          <div className="grid grid-cols-3 gap-4 mt-[65px] ">
            {checkbox.map(({ id, title }, idx) => (
              <React.Fragment key={idx}>
                <Input
                  type="checkbox"
                  name="functionnality"
                  label={title}
                  value={title}
                  id={id}
                  onChange={onCheckboxChange}
                />
              </React.Fragment>
            ))}
            {otherfunc && (
              <>
                <Input
                  type="text"
                  value={formData.functionnality}
                  onChange={onChange}
                  label="Enter a functionality"
                  name="functionnality"
                  className="!p-[12px] !text-[18px] !rounded-lg"
                  containerClassName="!py-[13px] !shadow-shadow-sm !h-[82px] !px-[20px]"
                  labelClassName="!w-[348px]"
                />
              </>
            )}
          </div>

          <div className="flex justify-around">
            <button
              type="submit"
              className="text-base font-bold text-white bg-dark-pink px-24 py-4 rounded-full shadow-shadow "
            >
              Save
            </button>

            <button className="flex items-center text-base font-bold bg-grad-btn text-white uppercase rounded-full px-9 py-4">
              Download Invoice{" "}
              <HiOutlineDownload size="20px" className="ml-[8px]" />
            </button>
          </div>

          <Titlebold title="You already have a design share it with us" />

          <div className=" flex justify-between flex-wrap my-[137px]">
            <Upload onChange={onChangeImage} />
            {previewImages.length > 0 &&
              previewImages.map((image: any, idx: any) => (
                <Image
                  key={idx}
                  src={image}
                  alt="Images preview"
                  width={55}
                  height={55}
                />
              ))}

            <Input
              type="text"
              name="link"
              value="link"
              label=""
              onChange={() => {
                console.log("display links");
              }}
            />

            <button
              className="bg-white max-h-[58px] shadow-shadow rounded-full text-base font-bold px-24 py-4 uppercase"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
