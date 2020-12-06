import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ConversationService from "./../../api/conversation/conversations";
import { Container } from "@material-ui/core/Container";
import {
  Avatar,
  Divider,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import dateDiff from "../../helpers/dateDiff";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: theme.spacing(24),
    padding: theme.spacing(3),
  },
  divider: {
    position: "relative",
  },
  hr: {
    position: "absolute",
    top: theme.spacing(-2),
    left: 0,
    right: 0,
  },
  avater: {
    //marginTop: theme.spacing(-11),
    marginLeft: theme.spacing(4),
    border: "1px solid",
    borderColor: theme.palette.text.secondary,
    zIndex: 1,
  },
  message: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
}));

const Conversation = (props) => {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [data, setData] = useState();
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */

  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- hooks --------------------------------- */
  useEffect(() => {}, []);
  /* -------------------------------------------------------------------------- */
  return (
    <div>
      {!!props.message && (
        <Grid
          component={Paper}
          elevation={2}
          container
          variant="outlined"
          className={classes.paper}
        >
          <Grid item container xs={12}>
            <Grid item xs={1}>
              <Avatar
                src={
                  props.profileImage
                    ? `data:image/jpg;base64, ${props.profileImage}`
                    : "/userProfile.png"
                }
                alt="profile"
                className={classes.avater}
                style={{ height: "50px", width: "50px" }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography>{props.fullName}</Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" variant="caption">
                {dateDiff(props.created)}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.divider}>
            <Divider className={classes.hr} />
          </Grid>

          <Grid
            item
            xs={12}
            component={Paper}
            elevation={0}
            variant="outlined"
            className={classes.message}
          >
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: props.message }}
            ></div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

Conversation.propTypes = {};

export default Conversation;
