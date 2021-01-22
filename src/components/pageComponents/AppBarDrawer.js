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
import { BrowserRouter as Router, Link } from "react-router-dom";

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
  return (
    <Router>
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
              {Constants.pages.slice(0, 5).map((page, index) => (
                <ListItem
                  button
                  component={Link}
                  to={page.value}
                  onClick={props.onToggleDrawer}
                  key={index}
                  data-testid="drawer-listitem"
                >
                  <ListItemIcon className={classes.listIcon}>
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText>{page.title}</ListItemText>
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
              {Constants.pages.slice(5).map((page, index) => (
                <ListItem
                  button
                  component={Link}
                  to={page.value}
                  onClick={props.onToggleDrawer}
                  key={index}
                  data-testid="drawer-listitem"
                >
                  <ListItemIcon className={classes.listIcon}>
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText>{page.title}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Drawer>
    </Router>
  );
}
