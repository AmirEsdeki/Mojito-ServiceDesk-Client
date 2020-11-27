import React from "react";
import Ticket from "./../../components/ticket/Ticket";
import Breadcrumb, {
  BreadcrumbTypography,
} from "./../../components/breadCrumb/BreadCrumb";
import { Typography } from "@material-ui/core";
import CustomDivider from "../../components/divider/CustomDivider";
import TicketsService from "./../../api/tickets/tickets";
import { makeStyles } from "@material-ui/core/styles";
import extractTextContent from "./../../helpers/extractTextContent";

const useStyles = makeStyles((theme) => ({}));

export default function MyTickets(props) {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [tickets, setTickets] = React.useState([]);
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- dataFetch ------------------------------- */
  const getAllTickets = async () => {
    const res = await TicketsService.getAll({});
    if (res.result && res.result.items) {
      const data = res.result.items;
      var parsedDate = data.map((d) => ({
        key: d.id,
        title: d.title,
        lastMessage: extractTextContent(d.lastMessage, true),
        isClosed: d.isClosed,
        conversationCount: d.conversationCount,
        attachmentCount: d.attachmentCount,
        identifier: d.identifier,
        priority: d.priority.title,
        openedByImage: d.openedBy?.profileImage,
        openedBy: d.openedBy?.fullName,
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
      console.log(data);
      setTickets(parsedDate);
    }
  };
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- hooks --------------------------------- */
  React.useEffect(() => {
    getAllTickets();
  }, []);
  /* -------------------------------------------------------------------------- */

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbTypography linkText={"تیکت های باز من"} />
      </Breadcrumb>
      <Typography>
        <strong>تیکت های باز من</strong>
      </Typography>
      <CustomDivider />
      {tickets.map((t) => (
        <Ticket key={t.id} {...t} />
      ))}
    </div>
  );
}
