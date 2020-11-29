import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import EmailIcon from "@material-ui/icons/Email";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import AssessmentIcon from "@material-ui/icons/Assessment";
import StorefrontIcon from "@material-ui/icons/Storefront";
import HttpIcon from "@material-ui/icons/Http";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import SubjectIcon from "@material-ui/icons/Subject";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import LabelIcon from "@material-ui/icons/Label";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyle = makeStyles((theme) => ({
  createTicketIcon: {
    color: theme.palette.secondary.main,
    fontSize: "3rem",
    marginLeft: "-8.5px",
  },
  createTicketListItem: {
    border: "0px solid ",
    borderRadius: "45px",
    width: "99%",
  },
  icons: {
    color: theme.palette.primary.dark,
  },
  divider: {
    zIndex: 5,
  },
}));

export const MainListItems = () => {
  const history = useHistory();
  const classes = useStyle();
  return (
    <div>
      <Divider className={classes.divider} />
      <List>
        <ListItem
          className={classes.createTicketListItem}
          button
          onClick={() => {
            history.push("/dashboard/new-ticket");
          }}
        >
          <ListItemIcon>
            <AddBoxIcon className={classes.createTicketIcon} />
          </ListItemIcon>
          <ListItemText primary="ایجاد تیکت جدید" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            history.push("/dashboard/view-tickets/OnlyTicketsOfAssignee", {
              title: "اختصاص یافته به من",
            });
          }}
        >
          <ListItemIcon>
            <MailOutlineIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="اختصاص یافته به من" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            history.push("/dashboard/view-tickets/OnlyTicketsOfGroup", {
              title: "برای گروه من",
            });
          }}
        >
          <ListItemIcon>
            <MailOutlineIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="برای گروه من" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            history.push("/dashboard/view-tickets/OnlyOpenedByUser", {
              title: "باز شده توسط من",
            });
          }}
        >
          <ListItemIcon>
            <MailOutlineIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="باز شده توسط من" />
        </ListItem>

        <ListItem
          button
          button
          onClick={() => {
            history.push("/dashboard/view-tickets/OnlyClosedByUser", {
              title: "بسته شده توسط من",
            });
          }}
        >
          <ListItemIcon>
            <EmailIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="بسته شده توسط من" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            history.push("/dashboard/view-tickets/all", {
              title: "همه تیکت ها",
            });
          }}
        >
          <ListItemIcon>
            <MoveToInboxIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="همه تیکت ها" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            history.push("/dashboard/ticket-report");
          }}
        >
          <ListItemIcon>
            <AssessmentIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="گزارش های تیکت" />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List>
        <ListSubheader inset>پیکربندی سیستم تیکتینگ</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <StorefrontIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="محصولات" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HttpIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="آدرس سامانه ها" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PriorityHighIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="اولویت ها" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SubjectIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="موضوعات تیکت" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentTurnedInIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="وضعیت تیکت" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LabelIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="برچسب ها" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountTreeIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="مکانیزم اختصاص دهی" />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List>
        <ListSubheader inset>کاربران و گروه ها</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="کاربران" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="گروه ها" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="انواع گروه ها" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <VerifiedUserIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="سمت های سازمانی" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingBasketIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="مشتریان" />
        </ListItem>
      </List>
    </div>
  );
};
