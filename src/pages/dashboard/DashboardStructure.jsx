import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { MainListItems } from "./dashboardElements/listItems";

import FullscreenIcon from "@material-ui/icons/Fullscreen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { removeToken } from "./../../helpers/token";
import { useDispatch } from "../../context/store";
import SampleReport from "../sampleReportPage/SampleReport";
import PrivateRoute from "../../components/route/PrivateRoute";
import NewTicket from "../newTicket/NewTicket";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.grey[100],
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundImage: `linear-gradient(-17deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .5)",
      // boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .5)",
      filter: "blur(5px)",
      background: "inherit",
      zIndex: -1,
    },
    backgroundAttachment: "fixed",
    backgroundImage: `url(/photo-1605794785092-86ca6a5ce0ce.jpg)`,
    //backgroundColor: theme.palette.grey[200],
    overflowY: "auto",
    height: "100%",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function DashboardStructure() {
  /* ---------------------------- general variables --------------------------- */
  const classes = useStyles();
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */

  /* --------------------- opening and closing the drawer --------------------- */
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  /* -------------------------------------------------------------------------- */

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            میز کار فرانام
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={8} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <FullscreenIcon />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => {
              removeToken();
              dispatch({ type: "LOGIN_STATUS", payload: false });
            }}
          >
            <ExitToAppIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" src="/userProfile.png" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <MainListItems />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <PrivateRoute
            path="/dashboard/ticket-report"
            component={SampleReport}
          />
          <PrivateRoute path="/dashboard/new-ticket" component={NewTicket} />
        </Container>
      </main>
    </div>
  );
}
