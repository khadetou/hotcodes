import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Selects from "@/components/orders/form/select/select";

import { plateforms, goal, typeApp, checkbox } from "@/components/orders/lists";
import Input from "./input/input";
import Upload from "./uploads";

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
  const [otherTypeApp, setOtherTypeApp] = useState(false);
  const [otherGoal, setOtherGoal] = useState(false);
  const [previewImages, setPreviewImages] = useState<any>([]);
  const [images, setImages] = useState<any>([]);

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
    e.target.checked && e.target.value === "Other" && setOther(true);
    !e.target.checked && e.target.value === "Other" && setOther(false);
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

  //JSX RETURN-----------------------------------------------------------------
  return (
    <div>
      <h1>{title}</h1>
      {/* <a href="https://api.whatsapp.com/send/?phone=+221786004564&text&app_absent=0">
        Call me
      </a> */}

      <form onSubmit={onSubmit}>
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
        />

        {otherTypeApp && (
          <>
            <Input
              type="text"
              name="typeapp"
              id="typeofapp"
              value={formData.typeofapp}
              label="Type of App"
              onChange={onChange}
            />
          </>
        )}
        <Input
          type="text"
          name="appName"
          placeholder="App name"
          value={formData.appName}
          label="App name"
          onChange={onChange}
        />
        <div className="bg-white shadow-shadow-sm py-5 px-8 max-w-[1300px] rounded-[51px]">
          <label htmlFor="decription">Enter your app description</label>
          <textarea
            className="focus:border bg-[#f5f5f5]  focus:border-[#e293d3] focus:shadow-input focus:shadow-[#e9aede] w-full h-full rounded-[23px] outline-none px-5  md:px-[60px] py-8 text-dark text-[22px] font-medium"
            name="description"
            value={formData.description}
            id="description"
            cols={30}
            rows={10}
            onChange={onChange}
          ></textarea>
        </div>
        <h1>What is the goal? </h1>
        <Selects
          setSelectOther={setOtherGoal}
          options={goal}
          formData={formData}
          setSelected={setFormData}
          selected="goal"
          selectedTitle="Select a goal"
        />
        {otherGoal && (
          <>
            <h1>Enter your goal description</h1>
            <Input
              type="text"
              name="goal"
              label="Goal Description"
              value={formData.goal}
              onChange={onChange}
            />
          </>
        )}

        <h1>Add specifics functionalities </h1>
        {/* <label htmlFor="">Select a functionnality</label> */}
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
            {title}
          </React.Fragment>
        ))}
        {other && (
          <>
            <Input
              type="text"
              value={formData.functionnality}
              onChange={onChange}
              label="Functionnality Description"
              name="functionnality"
            />
          </>
        )}

        <h1>You already have a design share it with us</h1>
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
          label="Figma link"
          onChange={() => {
            console.log("display links");
          }}
        />

        <button type="submit">Submit</button>
        <button>I DONT HAVE A DESIGN </button>
        <button>Download Invoice</button>
      </form>
    </div>
  );
};

export default Form;
