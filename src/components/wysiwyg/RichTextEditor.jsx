import "../../helpers/globalDependencies/global";
import React, { Component } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale

// Import bootstrap(v3 or v4) dependencies
import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "bootstrap/dist/css/bootstrap.css";

const RichTextEditor = (props) => {
  const onChange = (content) => {
    props.onChange(content);
  };

  return (
    <ReactSummernote
      value="Default value"
      options={{
        //disableResizeEditor: true,
        lang: "en-EN",
        height: 350,
        dialogsInBody: true,
        toolbar: [
          ["font", ["bold", "underline", "italic"]],
          ["fontsize", ["fontsize"]],
          // ["style", ["style"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["table", ["table"]],
          ["color", ["color"]],
          //["insert", ["link"]], //["link", "picture", "video"]
          //["view", ["fullscreen", "codeview"]],
        ],
      }}
      onChange={onChange}
    />
  );
};

export default RichTextEditor;
