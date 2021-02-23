import React from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Backdrop,
  CircularProgress,
  withStyles,
} from "@material-ui/core";
import Logo from "../../assets/images/ur-logo-bildmarke-grau.jpg";
import CustomSnackbar from "../pageComponents/CustomSnackbar";

import auth from "../services/authentication";

const style = (theme) => ({
  container: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },

  textFields: {
    margin: theme.spacing(1),
  },

  button: {
    margin: theme.spacing(1),
  },

  form: {
    margin: theme.spacing(2),
  },

  logo: {
    width: theme.spacing(16),
    marginBottom: theme.spacing(2),
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
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
      showLoader: false,
      showSnackbar: false,
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.snackbarOptions = null;
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
    this.setState({ showLoader: true });
    auth
      .login(this.state.valueUsername, this.state.valuePassword)
      .then((user) => {
        if (user !== null) {
          this.props.history.replace(this.props.location.state.from.pathname);
        } else {
          this.provideUserFeedback(
            "warning",
            "Nutzername oder Passwort falsch"
          );
        }
      })
      .catch((error) => {
        this.provideUserFeedback("error", "Anmeldung nicht möglich");
      });
  }

  provideUserFeedback(type, message) {
    this.setState({ showLoader: false });
    this.snackbarOptions = {
      type: type,
      message: message,
    };
    this.setState({ showSnackbar: true });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Loginscreen">
        <div className={classes.container} data-testid="bgPaper">
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
                label="RZ-Account"
                placeholder="abc13245"
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
        </div>
        <CustomSnackbar
          open={this.state.showSnackbar}
          onClose={() => this.setState({ showSnackbar: false })}
          {...this.snackbarOptions}
        ></CustomSnackbar>
        <Backdrop className={classes.backdrop} open={this.state.showLoader}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
}

export default withStyles(style, { withTheme: true })(Loginscreen);
