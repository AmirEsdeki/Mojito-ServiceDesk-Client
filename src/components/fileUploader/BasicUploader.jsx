import React from "react";
import { useDropzone } from "react-dropzone";
import "./basicUploader.css";

function BasicUploader(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxSize: 104857600,
    multiple: true,
    maxFiles: 5,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>فایل ها را انتخاب کرده، یا بکشید و اینجا رها کنید...</p>
      </div>
      <aside>
        <h4>فایل ها</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default BasicUploader;
