import {
  makeStyles,
  Divider,
  Grid,
  Paper,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Drawer,
} from "@material-ui/core/";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/URFitLogo.png";
import * as Constants from "../../constants/constants.js";
import auth from "../services/authentication";

const useStyles = makeStyles((theme) => ({
  drawerLink: {
    textDecoration: "none",
    color: theme.palette.text.main,
  },

  logo: {
    margin: "16px",
    width: "62px",
    height: "37px",
    backround: "white",
  },

  grid: {
    width: window.innerWidth * 0.7,
  },

  listIcon: {
    color: theme.palette.text.main,
  },

  list: {
    maxWidth: "100%",
  },

  divider: {
    backgroundColor: theme.palette.text.main,
    height: 1,
  },
}));

export default function AppBarDrawer(props) {
  const classes = useStyles();

  const handleOnLogoutEntryClick = () => {
    auth.logout();
  };

  let contentPages = [
      Constants.pages.relaxation,
      Constants.pages.fitness,
      Constants.pages.wellbeing,
      Constants.pages.nutrition,
    ],
    otherPages = [
      Constants.pages.settings,
      Constants.pages.feedback,
      Constants.pages.imprint,
      Constants.pages.conditions,
    ],
    homeEntry = Constants.pages.home,
    logoutEntry = Constants.pages.logout;

  return (
    <Drawer
      variant="temporary"
      onClose={props.onToggleDrawer}
      open={props.open}
      data-testid="appbar-drawer"
    >
      <Grid
        direction={"column"}
        justify={"space-around"}
        className={classes.grid}
        container
      >
        <Grid item xs></Grid>
        <Grid item xs={1}>
          <Paper elevation={0}>
            <img
              src={Logo}
              alt="AppBarLogo"
              data-testid="drawer-logo"
              className={classes.logo}
            />
          </Paper>
        </Grid>
        <Grid className={classes.list} item xs={9}>
          <List>
            <ListItem
              button
              component={Link}
              to={homeEntry.value}
              onClick={props.onToggleDrawer}
              data-testid="drawer-listitem"
            >
              <ListItemIcon className={classes.listIcon}>
                {homeEntry.icon}
              </ListItemIcon>
              <ListItemText>{homeEntry.title}</ListItemText>
            </ListItem>
            {contentPages.map((item, index) => (
              <ListItem
                button
                component={Link}
                to={`/category/${item.value}`}
                onClick={props.onToggleDrawer}
                key={index}
                data-testid="drawer-listitem"
              >
                <ListItemIcon className={classes.listIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
          </List>
          <Divider
            variant="middle"
            data-testid="drawer-divider"
            className={classes.divider}
          />
          <List>
            {otherPages.map((item, index) => (
              <ListItem
                button
                component={Link}
                to={item.value}
                onClick={props.onToggleDrawer}
                key={index}
                data-testid="drawer-listitem"
              >
                <ListItemIcon className={classes.listIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
            <ListItem
              button
              // component={Link}
              // to={item.value}
              onClick={handleOnLogoutEntryClick}
              key={logoutEntry.value}
              data-testid="drawer-listitem"
            >
              <ListItemIcon className={classes.listIcon}>
                {logoutEntry.icon}
              </ListItemIcon>
              <ListItemText>{logoutEntry.title}</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Drawer>
  );
}
