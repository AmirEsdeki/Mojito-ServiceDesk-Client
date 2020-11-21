import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";
import auth from "../../api/auth/auth";
import { storeToken } from "../../helpers/token";
import jwt_decode from "jwt-decode";
import { useDispatch } from "../../context/store";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    fontSize: "1.1rem",
  },
}));

export default function SignUp() {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  const userNameRef = React.createRef();
  const firstNameRef = React.createRef();
  const lastNameRef = React.createRef();
  const emailRef = React.createRef();
  const phoneNumberRef = React.createRef();
  const passwordRef = React.createRef();
  const confirmPasswordRef = React.createRef();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [model, setModel] = React.useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "checkbox") {
      setRememberMe(e.target.checked);
    }
  };

  const signUpClickHandler = (e) => {
    (async function () {
      const res = await auth.signIn({
        username: userName,
        password: password,
      });
      if (res.result && res.result.token) {
        const token = res.result.token;
        const decodedToken = jwt_decode(token);
        storeToken(res.result.token, rememberMe);
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
            <strong>پورتال جامع فرانام</strong>
          </Typography>
          <ValidatorForm onSubmit={signUpClickHandler} className={classes.form}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
              id="username"
              label="نام کاربری"
              name="username"
              validators={["required"]}
              errorMessages={["این فیلد اجباری است"]}
              autoComplete="off"
              onChange={handleChange}
              ref={userNameRef}
              value={model.userName}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="firstName"
                  label="نام"
                  name="firstName"
                  validators={["required"]}
                  errorMessages={["این فیلد اجباری است"]}
                  autoComplete="off"
                  onChange={handleChange}
                  ref={firstNameRef}
                  value={model.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label="نام خانوادگی"
                  name="lastName"
                  validators={["required"]}
                  errorMessages={["این فیلد اجباری است"]}
                  autoComplete="off"
                  onChange={handleChange}
                  ref={lastNameRef}
                  value={model.lastName}
                />
              </Grid>
            </Grid>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="پست الکترونیکی"
              name="email"
              validators={["required"]}
              errorMessages={["این فیلد اجباری است"]}
              autoComplete="off"
              onChange={handleChange}
              ref={emailRef}
              value={model.email}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="phoneNumber"
              label="شماره موبایل"
              name="phoneNumber"
              validators={["required"]}
              errorMessages={["این فیلد اجباری است"]}
              autoComplete="off"
              onChange={handleChange}
              ref={phoneNumberRef}
              value={model.phoneNumber}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="confirmPassword"
                  label="تکرار رمز عبور"
                  type="confirmPassword"
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
              ثبت نام در پورتال
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ورود رمز اعتبارسنجی
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"ورود"}
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  );
}
