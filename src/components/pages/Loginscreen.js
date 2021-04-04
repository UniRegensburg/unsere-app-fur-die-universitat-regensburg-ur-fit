import React from "react";
import ReactMarkdown from "react-markdown";
import ConditionsOfUseText from "../../assets/textfiles/conditions-of-use.md";
import {
  Paper,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Backdrop,
  CircularProgress,
  withStyles,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import Logo from "../../assets/images/URFitLogo.png";
import CustomSnackbar from "../pageComponents/CustomSnackbar";
import auth from "../services/authService";

const INFOTEXT =
  "Die URfit-App enthält verschiedene Sport- und Bewegungsangebote und den aktuellen Mensaplan.";

const style = (theme) => ({
  paper: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.background.lightgrey,
  },

  infotext: {
    color: theme.palette.text.main,
    marginStart: "16px",
    marginEnd: "8px",
  },

  textFields: {
    margin: theme.spacing(1),
    maxWidth: "300px",
  },

  button: {
    margin: theme.spacing(1),
    maxWidth: "300px",
  },

  form: {
    margin: theme.spacing(1),
    maxWidth: "300px",
  },

  logo: {
    width: theme.spacing(12),
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
      keepSignedIn: false,
      showLoader: false,
      showSnackbar: false,
      dialogConditionsOfUseOpen: false,
      conditionsOfUseText: "",
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleConditionsOfUseAcception = this.handleConditionsOfUseAcception.bind(
      this
    );
    this.handleConditionsOfUseRejection = this.handleConditionsOfUseRejection.bind(
      this
    );
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.snackbarOptions = null;
  }

  componentDidMount() {
    fetch(ConditionsOfUseText)
      .then((res) => res.text())
      .then((text) => this.setState({ conditionsOfUseText: text }));
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

  handleCheckboxChange(event) {
    this.setState({ keepSignedIn: !this.state.keepSignedIn });
  }

  handleLogInClick(event) {
    this.setState({ dialogConditionsOfUseOpen: true });
  }

  handleConditionsOfUseAcception(event) {
    this.setState({ dialogConditionsOfUseOpen: false });
    this.login();
  }

  handleConditionsOfUseRejection(event) {
    this.setState({ dialogConditionsOfUseOpen: false });
    this.provideUserFeedback("warning", "Nutzungsbedingungen abgelehnt.");
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.setState({ dialogConditionsOfUseOpen: true });
    }
  }

  login() {
    this.setState({ showLoader: true });
    auth
      .login(
        this.state.valueUsername,
        this.state.valuePassword,
        this.state.keepSignedIn
      )
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
        <Paper className={classes.paper} elevation={0} data-testid="bgPaper">
          <Grid
            className={classes.grid}
            container
            justify="flex-start"
            alignItems="stretch"
            direction="column"
          >
            <Grid item>
              <img
                data-testid="logo"
                src={Logo}
                alt="Uni Regensburg Logo"
                className={classes.logo}
              />
            </Grid>
            <Grid item>
              <Typography variant="body2" className={classes.infotext}>
                {INFOTEXT}
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                className={classes.textFields}
                data-testid="inputUsername"
                id="inputUsername"
                onChange={this.handleChangeUsername}
                onKeyPress={this.handleKeyPress}
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
            <Grid item>
              <TextField
                fullWidth
                className={classes.textFields}
                data-testid="inputPassword"
                id="inputPassword"
                onChange={this.handleChangePassword}
                onKeyPress={this.handleKeyPress}
                value={this.state.valuePassword}
                error={!this.state.validPassword && !this.state.initialPassword}
                label="Passwort"
                required={true}
                type="password"
                size="medium"
                variant="standard"
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                className={classes.form}
                data-testid="formLabel"
                value="start"
                control={
                  <Checkbox
                    checked={this.state.keepSignedIn}
                    onChange={this.handleCheckboxChange}
                    data-testid="formCheckbox"
                    color="primary"
                  />
                }
                label="Eingeloggt bleiben?"
                labelPlacement="start"
              />
            </Grid>
            <Grid item>
              <Button
                fullWidth
                className={classes.button}
                id="buttonLogin"
                data-testid="buttonLogin"
                variant="outlined"
                disabled={
                  !(this.state.validUsername && this.state.validPassword) ||
                  this.state.initialUsername ||
                  this.state.initialPassword
                }
                color="primary"
                onClick={this.handleLogInClick}
              >
                LogIn
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Dialog
          open={this.state.dialogConditionsOfUseOpen}
          onClose={this.handleConditionsOfUseRejection}
        >
          <DialogTitle>Nutzungsbedingungen</DialogTitle>
          <DialogContent>
            <DialogContentText component="div">
              <ReactMarkdown source={this.state.conditionsOfUseText} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleConditionsOfUseRejection}
              color="primary"
            >
              Ablehnen
            </Button>
            <Button
              onClick={this.handleConditionsOfUseAcception}
              color="primary"
            >
              Annehmen
            </Button>
          </DialogActions>
        </Dialog>

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
