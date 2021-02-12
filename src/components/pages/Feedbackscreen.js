import React from "react";
import { Button, withStyles } from "@material-ui/core/";
import TopAppBar from "../pageComponents/TopAppBar";

const styles = (theme) => ({
  container: {
    marginStart: "16px",
    marginEnd: "16px",
  },

  text: {
    color: "#2E303C",
    textAlign: "start",
  },

  textarea: {
    border: "solid 1px #A7525E",
    boxSizing: "border-box",
    width: "100%",
  },

  button: {
    color: "#00817B",
    float: "right",
  },
});

class Feedbackscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ message: this.state.value }),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("feedback recieved");
          // inform user that feedback was recieved
        } else {
          console.log("negative response: " + res.status);
          // inform user that request failed
        }
      })
      .catch((err) => {
        console.log(err);
        // inform user that request failed
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Feedbackscreen">
        <TopAppBar data-testid="appbar" title="Feedback" />
        <div className={classes.container}>
          <p data-testid="feedback-text" className={classes.text}>
            Feedback zu dieser App kannst du persönlich per&nbsp;
            <a href="mailto:ur.fit.app@mailman.uni-regensburg.de">eMail</a>
            &nbsp;oder anonym über dieses Formular senden:
          </p>
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
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Feedbackscreen);
