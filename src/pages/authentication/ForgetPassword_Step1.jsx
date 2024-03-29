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

function ForgetPassword_Step1(props) {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const nextIsConfirmCode = history.location.state?.nextIsConfirmCode;
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  const identityRef = React.createRef();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [model, setModel] = React.useState({
    identity: null,
  });
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "identity") {
      setModel({ ...model, identity: value });
    }
  };

  const confirmationClickHandler = (e) => {
    (async function () {
      const res = await auth.resendCode(model);
      if (res.result && res.result.id) {
        if (nextIsConfirmCode) {
          history.push("/verify-user", {
            userId: res.result.id,
          });
        } else {
          history.push("/forget-password-step2", {
            userId: res.result.id,
          });
        }
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
            onSubmit={confirmationClickHandler}
            className={classes.form}
          >
            <Typography component="h1" variant="h6">
              مرحله اول: ارسال کد اعتبارسنجی
            </Typography>
            <br />

            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
              id="identity"
              label="نام کاربری، آدرس ایمیل یا شماره موبایل"
              name="identity"
              validators={["required"]}
              errorMessages={["این فیلد اجباری است"]}
              autoComplete="off"
              onChange={handleChange}
              ref={identityRef}
              value={model.identity}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              ارسال کد و مرحله بعد
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signin" variant="body2">
                  {"بازگشت به صفحه ورود"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"ثبت نام"}
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  );
}
export default ForgetPassword_Step1;
