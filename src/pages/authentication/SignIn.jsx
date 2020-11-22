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
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"تمام حقوق برای شرکت"}{" "}
      <Link color="inherit" href="http://faranam.net/">
        فرانام
      </Link>{" "}
      {"محفوظ است"} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  oneTimeSubmit: {
    margin: theme.spacing(0, 0, 2),
    fontSize: "1.1rem",
  },
}));

export default function SignInSide() {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  const userNameRef = React.createRef();
  const passwordRef = React.createRef();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [rememberMe, setRememberMe] = React.useState();
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

  const loginClickHandler = (e) => {
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
          <br />
          <br />
          <br />
          <ValidatorForm onSubmit={loginClickHandler} className={classes.form}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="نام کاربری، آدرس ایمیل یا شماره موبایل"
              name="username"
              autoComplete="username"
              autoFocus
              validators={["required"]}
              errorMessages={["این فیلد اجباری است"]}
              autoComplete="off"
              onChange={handleChange}
              ref={userNameRef}
              value={userName}
            />
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
              autoComplete="current-password"
              onChange={handleChange}
              ref={passwordRef}
              value={password}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkbox"
                  value={rememberMe}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="مرا به خاطر بسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ورود به پورتال
            </Button>
            <br />
            <Typography color="textSecondary" align="center" variant="h6">
              یا
            </Typography>
            <br />

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.oneTimeSubmit}
              variant="outlined"
              onClick={() => {
                history.push("/forget-password-step1", {
                  nextIsConfirmCode: true,
                });
              }}
            >
              ورود با رمز یک بار مصرف
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forget-password-step1" variant="body2">
                  رمز عبور خود را فراموش کرده اید؟
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"ثبت نام"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  );
}
