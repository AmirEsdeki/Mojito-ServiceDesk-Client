import React from "react";
import Ticket from "./../../components/ticket/Ticket";
import Breadcrumb, {
  BreadcrumbTypography,
} from "./../../components/breadCrumb/BreadCrumb";
import { Typography } from "@material-ui/core";
import CustomDivider from "../../components/divider/CustomDivider";

// const useStyles = makeStyles((theme) => ({
//   devider: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//   },
// }));

export default function MyTickets(props) {
  //   const classes = useStyles();

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbTypography linkText={"تیکت های باز من"} />
      </Breadcrumb>
      <Typography>
        <strong>تیکت های باز من</strong>
      </Typography>
      <CustomDivider />
      <Ticket></Ticket>
    </div>
  );
}
