import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "block",
      // position: "absolute",
      width: "auto",
      // height: "100%",
      zIndex: 1,
      opacity: "0.5",
      backgroundColor: theme.palette.grey[400],
      "& > * ": {
        position: "absolute",
        top: "50%",
        left: "50%",
        color: theme.palette.grey[900],
      },
    },
  })
);

export default function Progress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}
