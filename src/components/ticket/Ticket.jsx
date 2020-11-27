import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Link,
  Avatar,
  Badge,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AttachmentIcon from "@material-ui/icons/AttachFile";
import { withTheme } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    // marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(),
    minHeight: "110px",
    borderRadius: "17px",
    borderWidth: "2px",
    marginTop: theme.spacing(3),
  },
  title: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  caption: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(-2),
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
  marginRight: {
    marginLeft: theme.spacing(1.2),
  },
}));

const Ticket = (props) => {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  /* -------------------------------------------------------------------------- */

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
                {props.identifier}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems="center">
            <Grid item xs={12}>
              <div className={classes.ticketStatus}>
                <Typography align="center" color="inherit">
                  {props.ticketStatus}
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
              {props.title.length > 70
                ? props.title.substring(0, 67) + "..."
                : props.title}
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.caption}>
            <Typography color="textSecondary" variant="caption">
              {props.lastMessage.length > 70
                ? props.lastMessage.substring(0, 67) + "..."
                : props.lastMessage}
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
                <Badge badgeContent={props.conversationCount} color="error">
                  <MailOutlineIcon
                    style={{ color: props.theme.palette.grey[500] }}
                  />
                </Badge>
              </td>
              {props.attachmentCount != 0 && (
                <td className={classes.iconTd}>
                  <Badge badgeContent={props.attachmentCount} color="error">
                    <AttachmentIcon
                      color="secondary"
                      style={{ color: props.theme.palette.grey[500] }}
                    />
                  </Badge>
                </td>
              )}

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
                        src={
                          props.assigneeImage
                            ? `data:image/jpg;base64, ${props.assigneeImage}`
                            : "/userProfile.png"
                        }
                        alt="profile"
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
                      <tr className={classes.name}>
                        {props.assignee ? props.assignee : "تنظیم نشده"}
                      </tr>
                    </td>
                  </tr>
                </table>
              </td>
              <td className={classes.otherTds}>
                <table style={{ width: "100%" }}>
                  <tr>
                    <td className={classes.nestedTd}>
                      <Avatar
                        src={`data:image/jpg;base64, ${props.openedByImage}`}
                        alt="profile"
                        className={classes.small}
                      />
                    </td>
                    <td>
                      <tr>
                        <Typography variant="caption" color="textSecondary">
                          مالک
                        </Typography>
                      </tr>
                      <tr className={classes.name}>{props.openedBy}</tr>
                    </td>
                  </tr>
                </table>
              </td>
              <td className={classes.otherTds} style={{ width: "7%" }}>
                <tr>
                  <Typography
                    className={classes.marginRight}
                    variant="caption"
                    color="textSecondary"
                  >
                    اولویت
                  </Typography>
                </tr>
                <tr>
                  <Typography
                    className={classes.name + " " + classes.marginRight}
                  >
                    {props.priority}
                  </Typography>
                </tr>
              </td>
              <td className={classes.otherTds} style={{ width: "20%" }}>
                <tr>
                  <Typography
                    className={classes.marginRight}
                    variant="caption"
                    color="textSecondary"
                  >
                    موضوع تیکت
                  </Typography>
                </tr>
                <tr>
                  <Typography
                    className={classes.name + " " + classes.marginRight}
                  >
                    {props.ticketIssue}
                  </Typography>
                </tr>
              </td>
              <td>
                <tr>
                  <Typography
                    className={classes.marginRight}
                    variant="caption"
                    color="textSecondary"
                  >
                    آدرس سامانه
                  </Typography>
                </tr>
                <tr>
                  <Typography
                    className={classes.name + " " + classes.marginRight}
                  >
                    {props.issueUrl}
                  </Typography>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};

Ticket.propTypes = {
  isClosed: PropTypes.bool,
  conversationCount: PropTypes.number,
  attachmentCount: PropTypes.number,
  openedByImage: PropTypes.string,
  identifier: PropTypes.string,
  assigneeImage: PropTypes.string,
  assignee: PropTypes.string,
  openedBy: PropTypes.string,
  priority: PropTypes.string,
  ticketIssue: PropTypes.string,
  issueUrl: PropTypes.string,
  ticketLabels: PropTypes.arrayOf(PropTypes.object),
  ticketStatus: PropTypes.string,
  title: PropTypes.string,
  lastMassage: PropTypes.string,
};

export default withTheme(Ticket);
