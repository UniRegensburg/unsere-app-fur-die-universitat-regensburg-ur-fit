import React from "react";
import {
    Button,
    withStyles
} from "@material-ui/core/";
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
        this.state = { value: "Bitte geben Sie hier Ihr Feedback ein." };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        console.log("Feedback was submitted: " + this.state.value);
        // todo: send feedback via email
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="Feedbackscreen">
                <TopAppBar data-testid="appbar" title="Feedback" />
                <div className={classes.container}>
                    <p data-testid="feedback-text" className={classes.text}>Sie können Ihr Feedback per eMail an <a href="mailto:abc@example.com">xy@ur.de</a> oder direkt hier in der App senden.</p>
                    <form>
                        <textarea data-testid="feedback-textarea" className={classes.textarea} value={this.state.value} onChange={this.handleChange} rows="10" />
                    </form>
                    <Button data-testid="feedback-button" className={classes.button} onClick={this.handleSubmit}>Senden</Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Feedbackscreen);
