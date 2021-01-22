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
            <Grid item xs={5}>
              <Paper data-testid="appbar-logo" elevation={0}>
                <img src={Logo} alt="AppBarLogo" className={classes.logo} />
              </Paper>
            </Grid>
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
