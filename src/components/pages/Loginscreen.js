import React from "react";

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
  Collapse,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  CardActionArea,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Logo from "../../assets/images/ur-logo-bildmarke-grau.jpg";
import CustomSnackbar from "../pageComponents/CustomSnackbar";
import auth from "../services/authentication";

const INFOTEXT =
  "Die URfit-App bringt mehr Bewegung und Gesundheit in deinen Alltag. Sie enthält verschiedene Sport- und Bewegungsangebote und den aktuellen Mensaplan. Viel Spaß beim Ausprobieren!";

const style = (theme) => ({
  paper: {
    margin: theme.spacing(4),
  },

  infoCard: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "300px",
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
      showLoader: false,
      showSnackbar: false,
      expandInfo: false,
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleExpandInfoClick = this.handleExpandInfoClick.bind(this);
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

  handleExpandInfoClick(event) {
    this.setState({ expandInfo: !this.state.expandInfo });
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
              <Card
                variant="outlined"
                elevation={0}
                className={classes.infoCard}
              >
                <CardActionArea
                  onClick={this.handleExpandInfoClick}
                  aria-expanded={this.state.expandInfo}
                  aria-label="show more"
                >
                  <CardHeader
                    title="URfit: Die Fitness App der UR"
                    titleTypographyProps={{ variant: "body2" }}
                    action={
                      <IconButton>
                        <MoreHorizIcon
                          aria-expanded={this.state.expandInfo}
                          aria-label="show more"
                        />
                      </IconButton>
                    }
                  ></CardHeader>
                </CardActionArea>
                <Collapse
                  in={this.state.expandInfo}
                  className={classes.infoText}
                >
                  <CardContent>
                    <Typography variant="body2">{INFOTEXT}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
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
            <Grid item>
              <TextField
                fullWidth
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
            <Grid item>
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
            <Grid item>
              <Button
                fullWidth
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
