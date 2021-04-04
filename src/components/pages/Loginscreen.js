import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import Logo from "../../assets/images/URFitLogo.png";
import CustomSnackbar from "../pageComponents/CustomSnackbar";
import auth from "../services/authService";

const INFOTEXT =
  "Die URfit-App enthält verschiedene Sport- und Bewegungsangebote und den aktuellen Mensaplan.";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.background.lightgrey,
  },

  infotext: {
    color: theme.palette.text.main,
    marginStart: theme.spacing(2),
    maringEnd: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "320px",
  },

  textFields: {
    margin: theme.spacing(1),
    maxWidth: "320px",
  },

  button: {
    margin: theme.spacing(1),
    maxWidth: "320px",
  },

  form: {
    margin: theme.spacing(1),
    maxWidth: "320px",
  },

  logo: {
    width: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Loginscreen() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [valueUsername, setValueUsername] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [initialUsername, setInitialUsername] = useState(true);
  const [initialPassword, setInitialPassword] = useState(true);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [dialogConditionsOfUseOpen, setDialogConditionsOfUseOpen] = useState(
    false
  );
  const [conditionsOfUseText, setConditionsOfUseText] = useState("");
  const [snackbarOptions, setSnackbarOptions] = useState({
    open: false,
    type: "error",
    message: "Fehler!",
  });

  useEffect(() => {
    fetch(ConditionsOfUseText)
      .then((res) => res.text())
      .then((text) => setConditionsOfUseText(text))
      .catch((error) => setConditionsOfUseText("Fehler beim Laden der AGB!"));
  }, []);

  const handleChangeUsername = (event) => {
    const re = /[öäüa-z]{3}\d{5}\b/; //Regular expression to test uni regensburg nds account
    setValueUsername(event.target.value);
    setValidUsername(re.test(event.target.value) ? true : false);
    setInitialUsername(false);
  };

  const handleChangePassword = (event) => {
    setValuePassword(event.target.value);
    setValidPassword(event.target.value.length > 0 ? true : false);
    setInitialPassword(false);
  };

  const handleCheckboxChange = (event) => {
    setKeepSignedIn(!keepSignedIn);
  };

  const handleLogInClick = (event) => {
    setDialogConditionsOfUseOpen(true);
  };

  const handleConditionsOfUseAcception = (event) => {
    setDialogConditionsOfUseOpen(false);
    login();
  };

  const handleConditionsOfUseRejection = (event) => {
    setDialogConditionsOfUseOpen(false);
    provideUserFeedback("warning", "Nutzungsbedingungen abgelehnt.");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setDialogConditionsOfUseOpen(true);
    }
  };

  const login = () => {
    setShowLoader(true);
    auth
      .login(valueUsername, valuePassword, keepSignedIn)
      .then((userId) => {
        if (userId !== null) {
          history.replace(location.state.from.pathname);
        } else {
          provideUserFeedback("warning", "Nutzername oder Passwort falsch");
        }
      })
      .catch((error) => {
        console.log(error);
        provideUserFeedback("error", "Anmeldung nicht möglich");
      });
  };

  const provideUserFeedback = (type, message) => {
    setShowLoader(false);
    setSnackbarOptions({
      open: true,
      type: type,
      message: message,
    });
  };

  const handleOnSnackbarClose = () => {
    setSnackbarOptions((prevState) => {
      return {
        ...prevState,
        open: false,
      };
    });
  };

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
              onChange={handleChangeUsername}
              onKeyPress={handleKeyPress}
              value={valueUsername}
              error={!validUsername}
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
              onChange={handleChangePassword}
              onKeyPress={handleKeyPress}
              value={valuePassword}
              error={!validPassword && !initialPassword}
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
                  checked={keepSignedIn}
                  onChange={handleCheckboxChange}
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
                !(validUsername && validPassword) ||
                initialUsername ||
                initialPassword
              }
              color="primary"
              onClick={handleLogInClick}
            >
              LogIn
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Dialog
        open={dialogConditionsOfUseOpen}
        onClose={handleConditionsOfUseRejection}
      >
        <DialogTitle>Nutzungsbedingungen</DialogTitle>
        <DialogContent>
          <DialogContentText component="div">
            <ReactMarkdown source={conditionsOfUseText} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConditionsOfUseRejection} color="primary">
            Ablehnen
          </Button>
          <Button onClick={handleConditionsOfUseAcception} color="primary">
            Annehmen
          </Button>
        </DialogActions>
      </Dialog>

      <CustomSnackbar
        onClose={handleOnSnackbarClose}
        {...snackbarOptions}
      ></CustomSnackbar>
      <Backdrop className={classes.backdrop} open={showLoader}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
