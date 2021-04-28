// Libraries
import { useState } from "react";
import S3 from "react-aws-s3";

// Asset
import { S3Config } from "../../aws-config"; // need to change keys!! in aws-config.js

// Components
import { FileRender } from "../fileView/FileView";

export const UploadFile = () => {
  const config = Object.assign(S3Config);
  const [file, setFile] = useState(null);

  const UploadFileHandler = (fileToUpload) => {
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(fileToUpload)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    setFile(fileToUpload);
  };

  return (
    <div className="divStile center col">
      <h1>aws s3 upload</h1>
      <input
        type="file"
        onChange={(e) => UploadFileHandler(e.target.files[0])}
      />
      <FileRender FileType={file?.type} FileName={file?.name} />
    </div>
  );
};
