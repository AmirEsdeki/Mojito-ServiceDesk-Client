import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Link,
  Avatar,
  Badge,
  useTheme,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AttachmentIcon from "@material-ui/icons/AttachFile";
import { withTheme } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PropTypes from "prop-types";
import dateDiff from "../../helpers/dateDiff";
import { useHistory } from "react-router-dom";
import cutLongString from "./../../helpers/cutLongString";

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
  tag: {
    marginTop: 3,
    height: 20,
    padding: ".15em 4px",
    fontWeight: 600,
    lineHeight: "15px",
    borderRadius: 2,
    display: "inline-block",
    borderRadius: "20px",
    margin: theme.spacing(0.5),
  },
}));

const Ticket = (props) => {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */
  const getColor = (statusLabel) => {
    if ("باز") return "#d65900";
    else if ("بسته") return "#0070b5";
    else return "#7f00e0";
  };
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
              <div
                className={classes.ticketStatus}
                style={{
                  backgroundColor: getColor(props.ticketStatus),
                  color: theme.palette.getContrastText(
                    getColor(props.ticketStatus)
                  ),
                }}
              >
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
          xs={7}
          id="title-conversation-container"
        >
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            className={classes.title}
          >
            <Grid item>
              <Link
                component={Typography}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`/dashboard/view-conversations/${props.id}`, {
                    identifier: props.identifier,
                    redirectedFrom: props.redirectedFrom,
                    redirectedFromTitle: props.redirectedFromTitle,
                    ticketTitle: props.title,
                  });
                }}
              >
                {cutLongString(props.title, 70)}
              </Link>
            </Grid>
            <Grid item>
              <Typography
                color="textSecondary"
                variant="caption"
                style={{ marginRight: theme.spacing(2) }}
              >
                {dateDiff(props.created)}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.caption}>
            <Typography color="textSecondary" variant="caption">
              {cutLongString(props.lastMessage, 70)}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" xs={2} id="label-container">
          {props.ticketLabels.map((label) => (
            <Grid
              item
              key={label.title}
              className={classes.tag}
              style={{
                backgroundColor: label.color,
                color: theme.palette.getContrastText(label.color),
              }}
            >
              {label.title}
            </Grid>
          ))}
        </Grid>
      </Grid>

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
                            : props.closedByImage
                            ? `data:image/jpg;base64, ${props.closedByImage}`
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
                          {props.ticketStatus == "باز"
                            ? "مسئول"
                            : "بسته شده توسط"}
                        </Typography>
                      </tr>
                      {props.ticketStatus == "باز" ? (
                        <tr className={classes.name}>
                          {props.assignee ? props.assignee : "تنظیم نشده"}
                        </tr>
                      ) : (
                        <tr className={classes.name}>
                          {props.closedBy ? props.closedBy : "نامشخص"}
                        </tr>
                      )}
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
                    style={{
                      color: props.priority == "بحرانی" ? "red" : "inherit",
                    }}
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
  id: PropTypes.string,
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
  closedBy: PropTypes.string,
  closedByImage: PropTypes.string,
  created: PropTypes.string,
  redirectedFrom: PropTypes.string,
  redirectedFromTitle: PropTypes.string,
};

export default withTheme(Ticket);
