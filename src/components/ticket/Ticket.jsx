import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Link, Avatar } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { withTheme } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
    minHeight: "75px",
  },
  downRow: {
    background: theme.palette.grey[100],
    overflow: "hidden",
  },
  ticketStatus: {
    backgroundColor: "orange",
    color: "white",
    borderRadius: "0px 8px 8px 0px",
  },
  identifier: {
    marginTop: theme.spacing(1),
  },
  table: {
    overflow: "hidden",
    paddingBottom: theme.spacing(1),
    height: "45px",
    width: "100%",
    borderTop: "1px solid",
    borderTopColor: theme.palette.grey[300],
  },
  iconTd: {
    paddingTop: theme.spacing(0.5),
    width: "5%",
    textAlign: "center",
    verticalAlign: "center",
    borderRight: "1px solid",
    borderRightColor: theme.palette.grey[300],
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    position: "absolute",
    left: "8%",
    top: "6%",
  },
  otherTds: {
    paddingTop: theme.spacing(0.5),
    width: "16%",
    // textAlign: "center",
    // verticalAlign: "center",
    borderRight: "1px solid",
    borderRightColor: theme.palette.grey[300],
  },
  nestedTd: {
    width: "27%",
    textAlign: "center",
    position: "relative",
  },
  name: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: theme.palette.grey[600],
  },
}));

const Ticket = (props) => {
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
                className={classes.identifier}
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

      {/* <Grid item xs={12}>
        <Divider />
      </Grid> */}

      <Grid item container xs={12} id="down-row" className={classes.downRow}>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td className={classes.iconTd}>
                <MoreHorizIcon
                  color="secondary"
                  style={{ color: props.theme.palette.grey[500] }}
                />
              </td>
              <td className={classes.iconTd}>
                <MailOutlineIcon
                  style={{ color: props.theme.palette.grey[500] }}
                />
              </td>
              <td className={classes.iconTd}>
                <AttachmentIcon
                  color="secondary"
                  style={{ color: props.theme.palette.grey[500] }}
                />
              </td>

              <td className={classes.otherTds}>
                <table style={{ width: "100%" }}>
                  <tr>
                    <td
                      style={{
                        width: "27%",
                        textAlign: "center",
                        position: "relative",
                      }}
                    >
                      <Avatar
                        alt="profile"
                        src="/userProfile.png"
                        className={classes.small}
                        style={{}}
                      />
                    </td>
                    <td>
                      <tr>
                        <Typography variant="caption" color="textSecondary">
                          مسئول
                        </Typography>
                      </tr>
                      <tr className={classes.name}>امیر اسدکی</tr>
                    </td>
                  </tr>
                </table>
              </td>
              <td className={classes.otherTds}>
                <table style={{ width: "100%" }}>
                  <tr>
                    <td className={classes.nestedTd}>
                      <Avatar
                        alt="profile"
                        src="/userProfile.png"
                        className={classes.small}
                      />
                    </td>
                    <td>
                      <tr>
                        <Typography variant="caption" color="textSecondary">
                          مالک
                        </Typography>
                      </tr>
                      <tr className={classes.name}>سمیه اصلاحی</tr>
                    </td>
                  </tr>
                </table>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};

export default withTheme(Ticket);
