import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";
import auth from "../../api/auth/auth";
import { useDispatch } from "../../context/store";
import { useHistory } from "react-router-dom";
import { storeToken } from "../../helpers/token";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${"/photo-1604676931181-0eaeea270d76.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formImage: {
    backgroundImage: `url(${"/bg.svg"})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    fontSize: "1.1rem",
  },
}));

function ForgetPassword_Step2(props) {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = history.location.state?.userId;
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  const codeRef = React.createRef();
  const passwordRef = React.createRef();
  const confirmPasswordRef = React.createRef();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [model, setModel] = React.useState({
    code: "",
    userId: userId ? userId : "",
    password: "",
    confirmPassword: "",
  });
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "code") {
      setModel({ ...model, code: value });
    } else if (name === "password") {
      setModel({ ...model, password: value });
    } else if (name === "confirmPassword") {
      setModel({ ...model, confirmPassword: value });
    }
  };

  const changePasswordClickHandler = (e) => {
    (async function () {
      const res = await auth.changePassword(model);
      if (res.result && res.result.token) {
        const token = res.result.token;
        const decodedToken = jwt_decode(token);
        storeToken(res.result.token, false);
        dispatch({ type: "LOGIN_STATUS", payload: true });
      }
    })();
  };
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- hooks --------------------------------- */
  /* -------------------------------------------------------------------------- */

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.formImage}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <strong>پورتال جامع موهیتو</strong>
          </Typography>
          <ValidatorForm
            onSubmit={changePasswordClickHandler}
            className={classes.form}
          >
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
              id="code"
              label="کد دریافتی"
              name="code"
              validators={["required"]}
              errorMessages={["این فیلد اجباری است"]}
              autoComplete="off"
              onChange={handleChange}
              ref={codeRef}
              value={model.code}
            />
            <Grid container spacing={"xs" === props.width ? 0 : 3}>
              <Grid item xs={12} sm={6} md={6}>
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="رمز عبور"
                  type="password"
                  id="password"
                  validators={["required"]}
                  errorMessages={["این فیلد اجباری است"]}
                  autoComplete="off"
                  onChange={handleChange}
                  ref={passwordRef}
                  value={model.password}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="confirmPassword"
                  label="تکرار رمز عبور"
                  type="Password"
                  id="confirmPassword"
                  validators={["required"]}
                  errorMessages={["این فیلد اجباری است"]}
                  autoComplete="off"
                  onChange={handleChange}
                  ref={confirmPasswordRef}
                  value={model.confirmPassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              اعتبارسنجی کد
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forget-password-step1" variant="body2">
                  {"ارسال مجدد کد"}
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  );
}
export default ForgetPassword_Step2;
