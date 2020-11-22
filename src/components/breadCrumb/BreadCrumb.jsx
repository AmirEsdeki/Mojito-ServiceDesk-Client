import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Divider } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(-2),
  },
  link: {
    display: "flex",
    fontSize: "0.9rem",
    "&:hover": {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(0.3),
    width: "0.9rem",
    height: "0.9rem",
  },
  devider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

export default function Breadcrumb(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            history.push("/dashboard/home");
          }}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          خانه
        </Link>
        {props.children}
      </Breadcrumbs>
      <Divider className={classes.devider} />
    </div>
  );
}

export function BreadcrumbLink(props) {
  const classes = useStyles();
  return (
    <Link
      color="inherit"
      href="/"
      onClick={props.onClick}
      className={classes.link}
    >
      {props.linkText}
    </Link>
  );
}

export function BreadcrumbTypography(props) {
  const classes = useStyles();
  return (
    <Typography color="textPrimary" href="/" className={classes.link}>
      {props.linkText}
    </Typography>
  );
}
