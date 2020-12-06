import React from "react";
import Ticket from "../../components/ticket/Ticket";
import Breadcrumb, {
  BreadcrumbTypography,
} from "../../components/breadCrumb/BreadCrumb";
import { Fade, Grid, Grow, Slide, Typography, Zoom } from "@material-ui/core";
import CustomDivider from "../../components/divider/CustomDivider";
import TicketsService from "../../api/tickets/tickets";
import { makeStyles } from "@material-ui/core/styles";
import extractTextContent from "../../helpers/extractTextContent";
import Loading from "../../components/progress/Loading";
import { Container } from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({}));

export default function ViewTickets(props) {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const title = props.location.state?.title;
  const whichTicketsToShowWildCard = props.match.params?.which;
  let transitionInterval = 0;
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [tickets, setTickets] = React.useState([]);
  const [query, setQuery] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */
  const whichTicketsToShow = (whichTicketsToShowWildCard) => {
    if (!whichTicketsToShowWildCard) return;

    switch (whichTicketsToShowWildCard) {
      case "OnlyTicketsOfAssignee":
        return { OnlyTicketsOfAssignee: true };
        break;
      case "OnlyTicketsOfGroup":
        return { OnlyTicketsOfGroup: true };
        break;
      case "OnlyOpenedByUser":
        return { OnlyOpenedByUser: true };
        break;
      case "OnlyClosedByUser":
        return { OnlyClosedByUser: true };
        break;

      default:
        return;
    }
  };
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- dataFetch ------------------------------- */
  const getAllTickets = async () => {
    setLoading(true);
    const res = await TicketsService.getAll({
      ...query,
      ...whichTicketsToShow(whichTicketsToShowWildCard),
    });
    setLoading(false);
    if (res.result && res.result.items) {
      const data = res.result.items;
      var parsedDate = data.map((d) => ({
        id: d.id,
        created: d.created,
        title: d.title,
        lastMessage: extractTextContent(d.lastMessage, true),
        isClosed: d.isClosed,
        conversationCount: d.conversationCount,
        attachmentCount: d.attachmentCount,
        identifier: d.identifier,
        priority: d.priority.title,
        openedByImage: d.openedBy?.profileImage,
        openedBy: d.openedBy?.fullName,
        closedBy: d.closedBy?.fullName,
        closedByImage: d.closedBy?.profileImage,
        assigneeImage: d.assignee?.profileImage,
        assignee: d.assignee ? d.assignee.fullName : d.nomineeGroup?.name,
        ticketIssue: d.ticketIssue?.title,
        issueUrl: d.issueUrl?.url,
        ticketLabels: d.ticketLabels?.map((tl) => ({
          title: tl.title,
          color: tl.color,
        })),
        ticketStatus: d.ticketStatus?.title,
      }));
      setTickets(parsedDate);
    }
  };
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- hooks --------------------------------- */
  React.useEffect(() => {
    //for reanimate the component
    setTickets();

    getAllTickets();
  }, [whichTicketsToShowWildCard]);

  React.useEffect(() => {
    getAllTickets();
  }, [query]);
  /* -------------------------------------------------------------------------- */

  return (
    <div>
      <Fade in={loading}>
        <div>
          <Loading></Loading>
        </div>
      </Fade>
      <Breadcrumb>
        <BreadcrumbTypography linkText={title} />
      </Breadcrumb>
      <Typography>
        <strong>{title}</strong>
      </Typography>
      <CustomDivider />
      {tickets && tickets.length == 0 && !loading && (
        <Fade in={true} timeout={500}>
          <Grid container alignContent="center" justify="center">
            <Grid
              alignContent="center"
              item
              style={{ marginTop: "60px", marginBottom: "60px" }}
            >
              <img
                src="/messageinBottle.png"
                style={{ opacity: "20%", borderRadius: "15%", width: "100%" }}
              ></img>
            </Grid>
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="h3"
                color="textSecondary"
                style={{ opacity: "15%" }}
              >
                هنوز تیکتی در این دسته وجود ندارد
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      )}
      {!!tickets &&
        tickets.map((ticket) => {
          transitionInterval = transitionInterval + 100;
          return (
            <Zoom
              in={tickets}
              style={{
                transitionDelay: true ? `${transitionInterval}ms` : "0ms",
              }}
            >
              <div>
                <Ticket
                  redirectedFrom={whichTicketsToShowWildCard}
                  redirectedFromTitle={title}
                  key={ticket.id}
                  {...ticket}
                />
              </div>
            </Zoom>
          );
        })}
    </div>
  );
}
