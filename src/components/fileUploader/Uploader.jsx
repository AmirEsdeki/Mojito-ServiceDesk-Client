import * as React from "react";
import { useDropzone } from "react-dropzone";
import "core-js/modules/es.array.from";
import { Button } from "@material-ui/core";
import "./basicUploader.css";

const Uploader = (props) => {
  const [myFiles, setMyFiles] = React.useState([]);

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps, inputRef } = useDropzone({
    noKeyboard: true,
    maxSize: 20971520,
    multiple: true,
    onDrop,
  });

  React.useEffect(() => {
    props.onChange(myFiles);
  }, [myFiles]);

  const handleRemoveFile = React.useCallback(
    (fileName) => {
      const dt = new DataTransfer();
      const files = Array.from(inputRef.current.files);

      // Add selected fiels to DataTransfer object
      for (let file of files) {
        file.name !== fileName && dt.items.add(file); // Add only file name not matched files
      }

      inputRef.current.files = dt.files; // Overwrite files
      setMyFiles(Array.from(dt.files)); // Set states to render file list
    },
    [inputRef]
  );

  const files = React.useMemo(
    () =>
      myFiles.map((file) => (
        <p key={file.name}>
          {file.name} ({file.size} bytes)
          <Button
            style={{ marginRight: "10px", color: "red" }}
            onClick={() => handleRemoveFile(file.name)}
          >
            حذف
          </Button>
        </p>
      )),
    [handleRemoveFile, myFiles]
  );

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone", style: baseStyle })}>
        <input {...getInputProps()} />
        <p>فایل ها را انتخاب کرده، یا بکشید و اینجا رها کنید...</p>
      </div>
      {files.length > 0 ? (
        <div>
          <h4>فایل ها</h4>
          <div>{files}</div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Uploader;
