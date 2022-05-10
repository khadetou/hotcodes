import uploadImg from "/public/images/upload.svg";
import Image from "next/image";
import { FC } from "react";

interface UploadProps {
  onChange: (e: any) => void;
}
const Upload: FC<UploadProps> = ({ onChange }) => {
  return (
    <>
      <div className="max-w-[422px] rounded-[35px] shadow-shadow-sm p-[33px]">
        <label
          htmlFor="upload"
          className="flex cursor-pointer z-20 relative px-7 flex-col justify-center bg-light-gray rounded-[20px] h-[268px] focus:ring-0 border-none outline-none w-full"
        >
          <Image src={uploadImg} />
          <span className="mx-auto">Uplaod files</span>
          <p className="mx-auto text-center max-w-[255px] text-gray text-base mt-[8px]">
            Designs must be <span className="text-dark">figma</span> or{" "}
            <span className="text-black">sketch</span> or{" "}
            <span className="text-black">adobe xd</span> or
            <span className="text-black">pdf</span> format,
            <span className="text-black"> Heigh resolution</span>
            image.
          </p>
          <input
            id="upload"
            type="file"
            name="design"
            multiple
            onChange={onChange}
            className="opacity-0"
          />

          <div className="left-1/2 flex items-center justify-center -translate-x-1/2 text-base font-bold  text-white bg-dark-pink rounded-full w-full py-[15px] absolute -bottom-4  ">
            Upload
          </div>
        </label>
      </div>
    </>
  );
};

export default Upload;
