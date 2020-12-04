import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        // filter: "blur(5px)",
        position: "fixed",
        top: "65px",
        bottom: "0px",
        width: "100%",
        left: 0,
        zIndex: 100,
        backgroundColor: "rgb(0,0,0,0.1)",
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <CircularProgress
        size="6rem"
        style={{
          color: "#e8eaef",

          marginRight: "57%",
          padding: 0,
        }}
      />
    </div>
  );
};
export default Loading;
