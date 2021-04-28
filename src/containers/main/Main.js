// Lib
import React from "react";
// Component
import { UploadFile } from "../../components/uploadFile/UploadFileToS3.js";

export const Main = () => {
  return (
    <div className="center fullScreen">
      <UploadFile />
    </div>
  );
};
