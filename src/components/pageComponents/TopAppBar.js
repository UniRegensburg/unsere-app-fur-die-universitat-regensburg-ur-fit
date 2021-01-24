import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  withStyles,
  Paper,
  Grid,
} from "@material-ui/core/";
import { Menu as BurgerMenu } from "@material-ui/icons";
import AppBarDrawer from "./AppBarDrawer";
import Logo from "../../assets/images/URFitLogo.png";

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
    color: "#2E303C",
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
    let header;
    if (this.props.title === "URfit") {
      header = <AppBarLogo class={classes.logo} />;
    } else {
      header = <AppBarTitle class={classes.title} title={this.props.title} />;
    }
    return (
      <AppBar data-testid="appbar" className={classes.appBar}>
        <Toolbar>
          <Grid
            justify={"space-between"}
            direction={"row"}
            alignItems={"center"}
            container
          >
            <Grid item xs={1}>
              <IconButton
                onClick={this.toggleDrawer.bind(this)}
                edge="start"
                className={classes.burgerMenu}
                data-testid="burgermenu-button"
              >
                <BurgerMenu fontSize="large" />
              </IconButton>
            </Grid>
            {header}
            <Grid item xs={1} />
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
      <Grid item xs={5}>
              <Paper data-testid="appbar-header" elevation={0}>
                <img src={Logo} alt="AppBarLogo" className={ this.props.class } />
              </Paper>
            </Grid>
    );
  }
}

class AppBarTitle extends React.Component {
  render() {
    return (
      <Grid item xs={5}>
        <h2 data-testid="appbar-header" className={ this.props.class }>{this.props.title}</h2>
      </Grid>
    );
  }
}
