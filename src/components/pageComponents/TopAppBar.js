import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  withStyles,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core/";
import { Menu as BurgerMenu, Favorite } from "@material-ui/icons";
import AppBarDrawer from "./AppBarDrawer";
import Logo from "../../assets/images/URFitLogo.png";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  appBar: {
    height: "9vh",
    position: "sticky",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-end",
  },

  appBarTitle: {
    marginLeft: "2vh",
    fontSize: "4vh",
  },

  logo: {
    width: "62px",
    height: "37px",
  },

  title: {
    color: theme.palette.text.main,
  },

  home: {
    width: "33px",
    height: "33px",
  },
});

class TopAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { classes } = this.props;
    let header, visibilityOfHomeIcon;
    if (this.props.title === "URfit") {
      header = <AppBarLogo class={classes.logo} />;
      visibilityOfHomeIcon = { visibility: "hidden" };
    } else {
      header = <AppBarTitle class={classes.title} title={this.props.title} />;
      visibilityOfHomeIcon = { visibility: "visible" };
    }
    return (
      <AppBar data-testid="appbar" className={classes.appBar}>
        <Toolbar>
          <Grid
            justify="space-between"
            direction="row"
            alignItems="center"
            container
          >
            <Grid item>
              <IconButton
                onClick={this.toggleDrawer.bind(this)}
                edge="start"
                data-testid="burgermenu-button"
              >
                <BurgerMenu fontSize="large" />
              </IconButton>
            </Grid>
            {header}
            <Grid item>
              <IconButton
                button="true"
                component={Link}
                to={"/"}
                data-testid="home-button"
              >
                <Favorite className={classes.home} style={visibilityOfHomeIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <AppBarDrawer
          open={this.state.open}
          onToggleDrawer={this.toggleDrawer.bind(this)}
        />
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopAppBar);

class AppBarLogo extends React.Component {
  render() {
    return (
      <Grid item xs>
        <Paper data-testid="appbar-header" elevation={0}>
          <img src={Logo} alt="AppBarLogo" className={this.props.class} />
        </Paper>
      </Grid>
    );
  }
}

class AppBarTitle extends React.Component {
  render() {
    return (
      <Grid item xs>
        <Typography
          variant="h6"
          data-testid="appbar-header"
          className={this.props.class}
        >
          {this.props.title}
        </Typography>
      </Grid>
    );
  }
}
