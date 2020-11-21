import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewTicket = (props) => {
  const [editorState, setEditorState] = React.useState();
  const onEditorStateChange = (e) => {
    console.log(e);
  };
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
    />
  );
};

export default NewTicket;
