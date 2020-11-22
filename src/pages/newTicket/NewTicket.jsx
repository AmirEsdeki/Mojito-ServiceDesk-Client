import React from "react";
import RichTextEditor from "./../../components/wysiwyg/RichTextEditor";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Breadcrumb, {
  BreadcrumbLink,
  BreadcrumbTypography,
} from "./../../components/breadCrumb/BreadCrumb";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const NewTicket = (props) => {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const history = useHistory();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [model, setModel] = React.useState();
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "username") {
      setUserName(value);
    }
  };

  const loginClickHandler = (e) => {
    // (async function () {
    //   const res = await auth.signIn({
    //     username: userName,
    //     password: password,
    //   });
    //   if (res.result && res.result.token) {
    //     const token = res.result.token;
    //     const decodedToken = jwt_decode(token);
    //     storeToken(res.result.token, rememberMe);
    //     dispatch({ type: "LOGIN_STATUS", payload: true });
    //   }
    // })();
  };
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- hooks --------------------------------- */
  /* -------------------------------------------------------------------------- */

  const [editorState, setEditorState] = React.useState();
  const onEditorStateChange = (e) => {
    console.log(e);
  };
  return (
    <div className={classes.root}>
      <Breadcrumb>
        <BreadcrumbTypography linkText={"ایجاد تیکت جدید"} />
      </Breadcrumb>

      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} md={3} component={Paper} elevation={6}></Grid>
        <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6}>
          <RichTextEditor></RichTextEditor>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewTicket;
