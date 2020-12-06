import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ConversationService from "./../../api/conversation/conversations";
import { Container } from "@material-ui/core/Container";
import { Fade, Grid, Paper, Typography } from "@material-ui/core";
import Loading from "./../../components/progress/Loading";
import Conversation from "./../../components/conversation/Conversation";
import Breadcrumb, {
  BreadcrumbLink,
  BreadcrumbTypography,
} from "./../../components/breadCrumb/BreadCrumb";
import CustomDivider from "./../../components/divider/CustomDivider";
import { useHistory } from "react-router-dom";
import cutLongString from "../../helpers/cutLongString";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: theme.spacing(24),
  },
}));

const ViewConversation = (props) => {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const history = useHistory();
  const ticketId = props.match.params?.ticketId;
  const identifier = history.location.state?.identifier;
  const ticketTitle = history.location.state?.ticketTitle;
  const redirectedFrom = history.location.state?.redirectedFrom;
  const redirectedFromTitle = history.location.state?.redirectedFromTitle;
  const [loading, setLoading] = React.useState(false);
  let transitionInterval = 0;
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- dataFetch ------------------------------- */
  const getAll = async () => {
    const res = await ConversationService.getAll({
      ticketId: ticketId,
    });
    if (res.result && res.result.items) {
      const data = res.result.items;
      setData(data);
      console.log(data);
    }
  };
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [data, setData] = useState([]);
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */

  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- hooks --------------------------------- */
  useEffect(() => {
    getAll();
  }, []);
  /* -------------------------------------------------------------------------- */
  return (
    <div>
      <Fade in={loading}>
        <div>
          <Loading></Loading>
        </div>
      </Fade>
      <Breadcrumb>
        <BreadcrumbLink
          linkText={`${redirectedFromTitle}`}
          onClick={(e) => {
            e.preventDefault();
            history.push(`/dashboard/view-tickets/${redirectedFrom}`, {
              title: redirectedFromTitle,
            });
          }}
        />
        <BreadcrumbTypography linkText={`${identifier}`} />
      </Breadcrumb>

      <Typography>
        <strong>پیام های تیکت</strong>
        <strong style={{ fontSize: "13px" }}>
          {" " + "' " + cutLongString(ticketTitle, 20) + " '"}
        </strong>
      </Typography>

      <CustomDivider />

      {!!data &&
        data.map((item) => {
          transitionInterval = transitionInterval + 100;
          return (
            <Fade
              in={!!data}
              style={{
                transitionDelay: true ? `${transitionInterval}ms` : "0ms",
              }}
            >
              <div>
                <Conversation key={item.id} identifier={identifier} {...item} />
              </div>
            </Fade>
          );
        })}
    </div>
  );
};

ViewConversation.propTypes = {};

export default ViewConversation;
