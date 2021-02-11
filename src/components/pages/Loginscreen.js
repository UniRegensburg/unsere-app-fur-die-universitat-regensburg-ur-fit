import React from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Paper,
  withStyles,
} from "@material-ui/core";
import Logo from "../../assets/images/URFitLogo.png";

import auth from "../services/authentication";

const style = (theme) => ({
  textFields: {
    margin: "8px",
  },
  button: {
    margin: "16px",
  },
  paper: {
    margin: "8px",
  },
  form: {
    margin: "32px",
  },
  logo: {
    width: "124px",
    height: "74px",
    marginBottom: "32px",
  },
});

class Loginscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueUsername: "",
      valuePassword: "",
      validUsername: true,
      validPassword: true,
      initialUsername: true,
      initialPassword: true,
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogInClick = this.handleLogInClick.bind(this);
  }

  handleChangeUsername(event) {
    const re = /[öäüa-z]{3}\d{5}\b/; //Regular expression to test uni regensburg nds account
    this.setState({
      valueUsername: event.target.value,
      validUsername: re.test(event.target.value) ? true : false,
      initialUsername: false,
    });
  }

  handleChangePassword(event) {
    this.setState({
      valuePassword: event.target.value,
      validPassword: event.target.value.length > 0 ? true : false,
      initialPassword: false,
    });
  }

  handleLogInClick(event) {
    auth
      .login(this.state.valueUsername, this.state.valuePassword)
      .then((user) => {
        if (user !== null) {
          this.props.history.replace(this.props.location.state.from.pathname);
        } else {
          // tell user he fucked up
        }
      })
      .catch((error) => {
        // tell user that shit hit the fan
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Loginscreen">
        <Paper className={classes.paper} data-testid="bgPaper">
          <Grid
            className={classes.grid}
            container
            justify="space-between"
            alignItems="center"
            direction="column"
          >
            <Grid item xs={12}>
              <img
                data-testid="logo"
                src={Logo}
                alt="AppBarLogo"
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textFields}
                data-testid="inputUsername"
                id="inputUsername"
                onChange={this.handleChangeUsername}
                value={this.state.valueUsername}
                error={!this.state.validUsername}
                label="NDS Kennung"
                required={true}
                type="text"
                size="medium"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textFields}
                data-testid="inputPassword"
                id="inputPassword"
                onChange={this.handleChangePassword}
                value={this.state.valuePassword}
                error={!this.state.validPassword && !this.state.initialPassword}
                label="Passwort"
                required={true}
                type="password"
                size="medium"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className={classes.form}
                data-testid="formLabel"
                value="start"
                control={
                  <Checkbox data-testid="formCheckbox" color="primary" />
                }
                label="Eingeloggt bleiben?"
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                id="buttonLogin"
                data-testid="buttonLogin"
                variant="contained"
                disabled={
                  !(this.state.validUsername && this.state.validPassword) ||
                  this.state.initialUsername ||
                  this.state.initialPassword
                }
                color="default"
                onClick={this.handleLogInClick}
              >
                LogIn
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(style, { withTheme: true })(Loginscreen);
