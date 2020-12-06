import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ConversationService from "./../../api/conversation/conversations";
import { Container } from "@material-ui/core/Container";
import { Fade, Grid, Paper } from "@material-ui/core";
import Loading from "./../../components/progress/Loading";

const useStyles = makeStyles((theme) => ({}));

const Component = (props) => {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- dataFetch ------------------------------- */
  const getAll = async () => {
    // const res = await TicketsService.getAll({
    // });
    // if (res.result && res.result.items) {
    //   const data = res.result.items;
    // }
  };
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [data, setData] = useState();
  const [loading, setLoading] = React.useState(false);
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
      <Fade in={loading}>
        <div>
          <Loading></Loading>
        </div>
      </Fade>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Paper elevation={4} className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Component.propTypes = {};

export default Component;
