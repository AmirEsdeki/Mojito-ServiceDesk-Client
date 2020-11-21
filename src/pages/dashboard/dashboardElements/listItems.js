import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
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

import { useHistory } from "react-router-dom";

export const MainListItems = () => {
  const history = useHistory();

  return (
    <List>
      <ListItem
        button
        onClick={() => {
          history.push("/dashboard/new-ticket");
        }}
      >
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="ایجاد تیکت جدید" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MailOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="تیکت های باز من" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="تیکت های بسته من" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MoveToInboxIcon />
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
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="گزارش های تیکت" />
      </ListItem>
    </List>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>پیکربندی سیستم تیکتینگ</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="محصولات" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HttpIcon />
      </ListItemIcon>
      <ListItemText primary="آدرس سامانه ها" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PriorityHighIcon />
      </ListItemIcon>
      <ListItemText primary="اولویت ها" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SubjectIcon />
      </ListItemIcon>
      <ListItemText primary="موضوعات تیکت" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="وضعیت تیکت" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary="برچسب ها" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="مکانیزم اختصاص دهی" />
    </ListItem>
  </div>
);

export const tertiaryListItems = (
  <div>
    <ListSubheader inset>کاربران و گروه ها</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="کاربران" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="گروه ها" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="انواع گروه ها" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VerifiedUserIcon />
      </ListItemIcon>
      <ListItemText primary="سمت های سازمانی" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingBasketIcon />
      </ListItemIcon>
      <ListItemText primary="مشتریان" />
    </ListItem>
  </div>
);
