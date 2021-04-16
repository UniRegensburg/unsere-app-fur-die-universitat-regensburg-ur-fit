import React from "react";
import {
  Button,
  Backdrop,
  CircularProgress,
  withStyles,
  Typography,
} from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";
import CustomSnackbar from "../pageComponents/CustomSnackbar";
import { sendFeedback } from "../services/sendFeedback";

const styles = (theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
    marginTop: "16px",
  },

  text: {
    color: theme.palette.text.main,
    textAlign: "start",
    marginBottom: "8px",
  },

  link: {
    color: theme.palette.primary.main,
  },

  textarea: {
    border: "solid 1px",
    borderColor: theme.palette.secondary.main,
    boxSizing: "border-box",
    width: "100%",
  },

  button: {
    color: theme.palette.primary.main,
    float: "right",
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class Feedbackscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", showSnackbar: false, showLoader: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.snackbarOptions = null;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    this.setState({ showLoader: true });
    sendFeedback(this.state.value)
      .then(() => {
        this.provideUserFeedback("success", "Feedback erhalten");
        this.setState({ value: "" });
      })
      .catch(() => {
        this.provideUserFeedback("error", "Senden nicht möglich");
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
      <div className="Feedbackscreen">
        <TopAppBar data-testid="appbar" title="Feedback" favIcon="visible" />
        <div className={classes.container}>
          <Typography
            variant="body1"
            data-testid="feedback-text"
            className={classes.text}
          >
            Feedback zu dieser App kannst du persönlich per&nbsp;
            <a
              className={classes.link}
              href="mailto:ur.fit.app@mailman.uni-regensburg.de"
            >
              eMail
            </a>
            &nbsp;oder anonym über dieses Formular senden:
          </Typography>
          <form>
            <textarea
              data-testid="feedback-textarea"
              className={classes.textarea}
              value={this.state.value}
              placeholder="Bitte geben Sie hier Ihr Feedback ein."
              onChange={this.handleChange}
              rows="10"
            />
          </form>
          <Button
            data-testid="feedback-button"
            className={classes.button}
            onClick={this.handleSubmit}
            disabled={!this.state.value}
          >
            Senden
          </Button>
          <CustomSnackbar
            open={this.state.showSnackbar}
            onClose={() => this.setState({ showSnackbar: false })}
            {...this.snackbarOptions}
          ></CustomSnackbar>
          <Backdrop className={classes.backdrop} open={this.state.showLoader}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Feedbackscreen);
