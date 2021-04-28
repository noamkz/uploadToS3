export const FileRender = ({ FileType, FileName }) => {
  let fileView = null;

  // edd more case for different type, like pdf ...
  switch (FileType) {
    case "image/jpeg": {
      fileView = (
        <div className="divStile">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + `/asset/${FileName}`}
            width="400"
          />
        </div>
      );
      break;
    }
    case undefined: {
      fileView = <h2>Empty</h2>;
      break;
    }

    default: {
      fileView = <h2>Done Upload</h2>;
      break;
    }
  }

  return fileView;
};
