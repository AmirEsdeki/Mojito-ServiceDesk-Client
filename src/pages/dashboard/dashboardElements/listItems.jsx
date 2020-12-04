import React, { useState } from "react";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TuneIcon from "@material-ui/icons/Tune";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
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
import { Collapse } from "@material-ui/core";

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
  collapseListItem: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(6),
    "& span": {
      fontSize: "0.9rem",
    },
  },
  listItemIcon: {
    minWidth: theme.spacing(4),
  },
  rotatedIcon: {
    transform: "rotate(90deg)",
  },
}));

export const MainListItems = () => {
  const history = useHistory();
  const classes = useStyle();

  const [collapse, setCollapse] = useState({
    myTicketsCollapse: true,
    systemSetting: false,
    users: false,
  });

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
          <ListItemIcon className={classes.listItemIcon}>
            <AddBoxIcon className={classes.createTicketIcon} />
          </ListItemIcon>
          <ListItemText primary="ایجاد تیکت جدید" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            setCollapse({
              myTicketsCollapse: !collapse.myTicketsCollapse,
            });
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <MailOutlineIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="تیکت های من" />
          <ChevronLeftIcon
            className={clsx({
              [classes.rotatedIcon]: collapse.myTicketsCollapse,
            })}
          />
        </ListItem>

        <Collapse in={collapse.myTicketsCollapse} timeout="auto" unmountOnExit>
          <ListItem
            className={classes.collapseListItem}
            button
            onClick={() => {
              history.push("/dashboard/view-tickets/OnlyTicketsOfAssignee", {
                title: "اختصاص یافته به من",
              });
            }}
          >
            {/* <ListItemIcon>
              <MailOutlineIcon className={classes.icons} />
            </ListItemIcon> */}
            <ListItemText primary="اختصاص یافته به من" />
          </ListItem>

          <ListItem
            className={classes.collapseListItem}
            button
            onClick={() => {
              history.push("/dashboard/view-tickets/OnlyTicketsOfGroup", {
                title: "برای گروه من",
              });
            }}
          >
            {/* <ListItemIcon>
              <MailOutlineIcon className={classes.icons} />
            </ListItemIcon> */}
            <ListItemText primary="برای گروه من" />
          </ListItem>

          <ListItem
            className={classes.collapseListItem}
            button
            onClick={() => {
              history.push("/dashboard/view-tickets/OnlyOpenedByUser", {
                title: "باز شده توسط من",
              });
            }}
          >
            {/* <ListItemIcon>
              <MailOutlineIcon className={classes.icons} />
            </ListItemIcon> */}
            <ListItemText primary="باز شده توسط من" />
          </ListItem>

          <ListItem
            className={classes.collapseListItem}
            button
            button
            onClick={() => {
              history.push("/dashboard/view-tickets/OnlyClosedByUser", {
                title: "بسته شده توسط من",
              });
            }}
          >
            {/* <ListItemIcon>
              <EmailIcon className={classes.icons} />
            </ListItemIcon> */}
            <ListItemText primary="بسته شده توسط من" />
          </ListItem>

          <ListItem
            className={classes.collapseListItem}
            button
            onClick={() => {
              history.push("/dashboard/view-tickets/all", {
                title: "همه تیکت ها",
              });
            }}
          >
            {/* <ListItemIcon>
              <MoveToInboxIcon className={classes.icons} />
            </ListItemIcon> */}
            <ListItemText primary="همه تیکت ها" />
          </ListItem>
        </Collapse>

        <ListItem
          button
          onClick={() => {
            history.push("/dashboard/ticket-report");
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <AssessmentIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="گزارش های تیکت" />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List>
        <ListItem
          button
          onClick={() => {
            setCollapse({
              systemSetting: !collapse.systemSetting,
            });
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <TuneIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="پیکربندی سیستم" />
          <ChevronLeftIcon
            className={clsx({
              [classes.rotatedIcon]: collapse.systemSetting,
            })}
          />
        </ListItem>

        <Collapse in={collapse.systemSetting} timeout="auto" unmountOnExit>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <StorefrontIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="محصولات" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <HttpIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="آدرس سامانه ها" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <PriorityHighIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="اولویت ها" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <SubjectIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="موضوعات تیکت" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <AssignmentTurnedInIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="وضعیت تیکت" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <LabelIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="برچسب ها" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <AccountTreeIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="مکانیزم اختصاص دهی" />
          </ListItem>
        </Collapse>
      </List>
      <Divider className={classes.divider} />
      <List>
        <ListItem
          button
          onClick={() => {
            setCollapse({
              users: !collapse.users,
            });
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <GroupIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="کاربران و گروه ها" />
          <ChevronLeftIcon
            className={clsx({
              [classes.rotatedIcon]: collapse.users,
            })}
          />
        </ListItem>
        <Collapse in={collapse.users} timeout="auto" unmountOnExit>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <PersonIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="کاربران" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <GroupIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="گروه ها" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <AssignmentIndIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="انواع گروه ها" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <VerifiedUserIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="سمت های سازمانی" />
          </ListItem>
          <ListItem button className={classes.collapseListItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <ShoppingBasketIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary="مشتریان" />
          </ListItem>
        </Collapse>
      </List>
    </div>
  );
};
