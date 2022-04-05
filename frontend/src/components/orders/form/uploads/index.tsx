import React, { FC } from "react";

interface UploadProps {
  onChange: (e: any) => void;
}
const Upload: FC<UploadProps> = ({ onChange }) => {
  return (
    <>
      <label htmlFor="">Uplaod file</label>
      <input type="file" name="design" multiple onChange={onChange} />
    </>
  );
};

export default Upload;
