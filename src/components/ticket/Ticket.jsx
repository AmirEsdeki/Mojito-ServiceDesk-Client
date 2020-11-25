import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Paper, Typography, Link } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CustomDivider from "./../divider/CustomDivider";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    // marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(),
    minHeight: "110px",
    borderRadius: "17px",
  },
  title: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  caption: {
    marginLeft: theme.spacing(2),
  },
  upRow: {
    minHeight: "70px",
  },
  downRow: {
    minHeight: "40px",
  },
  ticketStatus: {
    backgroundColor: "orange",
    color: "white",
    borderRadius: "0px 8px 8px 0px",
  },
}));

export default function Ticket(props) {
  const classes = useStyles();

  return (
    <Grid
      component={Paper}
      elevation={2}
      container
      variant="outlined"
      className={classes.mainBox}
    >
      <Grid
        item
        container
        xs={12}
        id="up-row"
        className={classes.upRow}
        style={{ backgroundColor: "" }}
      >
        <Grid item container xs={2} lg={1} id="id-status-container">
          <Grid item container alignItems="center">
            <Grid item xs={12}>
              <Typography
                style={{ direction: "ltr" }}
                color="textSecondary"
                variant="subtitle2"
                align="center"
              >
                #asjfa1123423
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems="center">
            <Grid item xs={12}>
              <div className={classes.ticketStatus}>
                <Typography align="center" color="inherit">
                  جدید
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          xs={10}
          id="title-conversation-container"
        >
          <Grid item xs={12} className={classes.title}>
            <Link component={Typography}>
              مشکل در سامانه مهتاب به علت قطعی ارتباط
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.caption}>
            <Typography color="textSecondary" variant="caption">
              این سامانه یه هفتس که قطع شده لطفا یه کاری بکنید جدا
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item container xs={12} id="down-row" className={classes.downRow}>
        <Grid item container alignItems="center" xs={2} id="icons">
          <Grid item xs={4} id="first-icon">
            <Grid align="center">
              <ShoppingBasketIcon />
            </Grid>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={4} id="second-icon">
            <Grid align="center">
              <ShoppingBasketIcon />
            </Grid>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={4} id="third-icon">
            <Grid align="center" xs>
              <ShoppingBasketIcon />
            </Grid>
            <Grid>
              <Divider orientation="vertical" flexItem />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={2} id="assignee-section"></Grid>
        <Grid item container xs={2} id="raisedby-section"></Grid>
        <Grid item container xs={2} id="priority-section"></Grid>
        <Grid item container xs={2} id="issue-section"></Grid>
        <Grid item container xs={2} id="url-section"></Grid>
      </Grid>
    </Grid>
  );
}
