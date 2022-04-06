import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Select from "@/components/orders/form/select/select";

import { plateforms, goal, typeApp, checkbox } from "@/pages/orders/lists";
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
      <form onSubmit={onSubmit}>
        <Select
          options={plateforms}
          selected="plateform"
          formData={formData}
          setSelected={setFormData}
          selectedTitle="Select a plateform"
        />
        <Select
          setSelectOther={setOtherTypeApp}
          options={typeApp}
          formData={formData}
          selected="typeapp"
          setSelected={setFormData}
          selectedTitle="Type of app"
        />

        {otherTypeApp && (
          <>
            <label htmlFor="typeofapp">Type of App</label>

            <Input
              type="text"
              name="typeapp"
              id="typeofapp"
              value={formData.typeofapp}
              onChange={onChange}
            />
          </>
        )}
        <label htmlFor="appname">App name</label>
        <Input
          type="text"
          name="appName"
          placeholder="App name"
          value={formData.appName}
          onChange={onChange}
        />
        <label htmlFor="decription">Enter your app description</label>
        <textarea
          name="description"
          value={formData.description}
          id="description"
          cols={30}
          rows={10}
          onChange={onChange}
        ></textarea>
        <h1>What is the goal? </h1>
        <Select
          setSelectOther={setOtherGoal}
          options={goal}
          formData={formData}
          setSelected={setFormData}
          selected="goal"
          selectedTitle="Select a goal"
        />
        {otherGoal && (
          <>
            <label htmlFor="">Enter your goal description</label>
            <Input
              type="text"
              name="goal"
              value={formData.goal}
              onChange={onChange}
            />
          </>
        )}

        <h1>Add specifics functionalities </h1>
        <label htmlFor="">Select a functionnality</label>
        {checkbox.map(({ id, title }, idx) => (
          <React.Fragment key={idx}>
            <Input
              type="checkbox"
              name="functionnality"
              value={title}
              id={id}
              onChange={onCheckboxChange}
            />
            {title}
          </React.Fragment>
        ))}
        {other && (
          <>
            <label htmlFor="">Enter your functionnality description</label>
            <Input
              type="text"
              value={formData.functionnality}
              onChange={onChange}
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

        <label htmlFor="">Figma link</label>
        <Input
          type="text"
          name="link"
          value="link"
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
