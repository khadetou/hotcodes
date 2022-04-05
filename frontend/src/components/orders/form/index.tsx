import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Select from "../../../components/orders/form/select/select";
import {
  plateforms,
  goal,
  typeApp,
  checkbox,
} from "../../../pages/orders/lists";
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

  //USE EFFECTS--------------------------------------
  useEffect(() => {
    LoadUser();
  }, []);

  //HANDLE CHANGES-------------------------------------------------------------
  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e: any) => {
    e.target.checked && e.target.value === "Other" && setOther(true);
    !e.target.checked && e.target.value === "Other" && setOther(false);

    e.target.checked && e.target.value !== "Other"
      ? formData.functionnality !== ""
        ? (formData.functionnality += "," + e.target.value)
        : (formData.functionnality = e.target.value)
      : (formData.functionnality = formData.functionnality.replace(
          e.target.value + ",",
          ""
        ));
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
        console.log(order);
        Action(order);
      }
      Action(formData);
    } else {
      router.push({
        pathname: "/login",
        query: { from: router.pathname },
      });
    }
  };

  //JSX RETURN-------------------------------------------------------------

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
        <Upload onChange={onChangeImage} />
        <button type="submit">Submit</button>
      </form>
      <button>Download Invoice</button>
      <h1>You already have a design share it with us</h1>

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

      <form action="">
        <label htmlFor="">Figma link</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <button>I DONT HAVE A DESIGN </button>
    </div>
  );
};

export default Form;
