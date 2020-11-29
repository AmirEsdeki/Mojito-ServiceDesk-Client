import React from "react";
import Ticket from "../../components/ticket/Ticket";
import Breadcrumb, {
  BreadcrumbTypography,
} from "../../components/breadCrumb/BreadCrumb";
import { Typography } from "@material-ui/core";
import CustomDivider from "../../components/divider/CustomDivider";
import TicketsService from "../../api/tickets/tickets";
import { makeStyles } from "@material-ui/core/styles";
import extractTextContent from "../../helpers/extractTextContent";

const useStyles = makeStyles((theme) => ({}));

export default function ViewTickets(props) {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const title = props.location.state?.title;
  const whichTicketsToShowWildCard = props.match.params?.which;
  console.log(whichTicketsToShowWildCard);
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [tickets, setTickets] = React.useState([]);
  const [query, setQuery] = React.useState({});
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
    const res = await TicketsService.getAll({
      ...query,
      ...whichTicketsToShow(whichTicketsToShowWildCard),
    });
    if (res.result && res.result.items) {
      const data = res.result.items;
      var parsedDate = data.map((d) => ({
        key: d.id,
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
    getAllTickets();
  }, [whichTicketsToShowWildCard]);

  React.useEffect(() => {
    console.log("userfrct");
    getAllTickets();
  }, [query]);
  /* -------------------------------------------------------------------------- */

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbTypography linkText={"تیکت های باز من"} />
      </Breadcrumb>
      <Typography>
        <strong>{title}</strong>
      </Typography>
      <CustomDivider />
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}
