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

const useStyles = makeStyles((theme) => ({
  drawerLink: {
    textDecoration: "none",
    color: "black",
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
    color: "black",
  },

  list: {
    maxWidth: "100%",
  },

  divider: {
    backgroundColor: "black",
    height: 1,
  },
}));

export default function AppBarDrawer(props) {
  const classes = useStyles();
  let contentPages = [
      Constants.pages.home,
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
      Constants.pages.logout,
    ];

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
            {contentPages.map((item, index) => (
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
          </List>
          <Divider
            variant="middle"
            data-testid="drawer-divider"
            className={classes.divider}
          />
        </Grid>
        <Grid className={classes.list} item xs={9}>
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
          </List>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Drawer>
  );
}
