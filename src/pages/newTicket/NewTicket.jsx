import React from "react";
import RichTextEditor from "./../../components/wysiwyg/RichTextEditor";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Breadcrumb, {
  BreadcrumbTypography,
} from "./../../components/breadCrumb/BreadCrumb";
import { useHistory } from "react-router-dom";
import CustomDivider from "../../components/divider/CustomDivider";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  root: {},
  propsCard: {
    minHeight: "300px",
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(3),
  },
  buttonArea: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
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
      <Typography>
        <strong>ایجاد تیکت جدید</strong>
      </Typography>
      <CustomDivider />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4}>
          <Paper className={classes.propsCard} elevation={1}>
            <ValidatorForm
              onSubmit={loginClickHandler}
              className={classes.form}
            >
              <TextValidator
                size="small"
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="عنوان تیکت"
                name="username"
                autoComplete="username"
                autoFocus
                validators={["required"]}
                errorMessages={["این فیلد اجباری است"]}
                autoComplete="off"
                // onChange={handleChange}
                // ref={userNameRef}
                // value={userName}
              />
              <TextValidator
                size="small"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="رمز عبور"
                type="password"
                id="password"
                validators={["required"]}
                errorMessages={["این فیلد اجباری است"]}
                autoComplete="current-password"
                // onChange={handleChange}
                // ref={passwordRef}
                // value={password}
              />
            </ValidatorForm>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <RichTextEditor></RichTextEditor>
        </Grid>
      </Grid>

      <CustomDivider />

      <Grid
        className={classes.buttonArea}
        container
        alignItems="center"
        component={Paper}
        style={{ height: "60px" }}
        elevation={0}
      >
        <Grid item xs>
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ثبت تیکت
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.button}
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.submit}
          >
            منصرف شدم
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewTicket;
