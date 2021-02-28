import React from "react";
import {
  Snackbar,
  SnackbarContent,
  Button,
  IconButton,
  makeStyles,
  Typography,
  capitalize,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {
  InfoRounded,
  WarningRounded,
  ErrorRounded,
  CheckCircleRounded,
} from "@material-ui/icons";

const TYPES = ["success", "warning", "info", "error"];

const useStyles = makeStyles((theme) => ({
  colorsSuccess: {
    color: "#2E303C",
    backgroundColor: theme.palette.success.light,
  },
  colorsWarning: {
    color: "#2E303C",
    backgroundColor: theme.palette.warning.light,
  },
  colorsError: {
    color: "#2E303C",
    backgroundColor: theme.palette.error.light,
  },
  colorsInfo: {
    // uses default snackbar colors
  },
  container: {
    display: "flex",
  },
  icon: {
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  },
  message: {
    padding: "8px 0",
  },
}));

const iconMapping = {
  success: <CheckCircleRounded />,
  warning: <WarningRounded />,
  error: <ErrorRounded />,
  info: <InfoRounded />,
};

export default function CustomSnackbar(props) {
  // buttonText and onButtonClick are optional properties
  // onClose and onButtonClick should be functions
  const { buttonText, onButtonClick, message, type = "info", ...rest } = props;
  const classes = useStyles();

  if (!TYPES.includes(type)) {
    throw new TypeError(
      "Unkown value for attribute 'type'. Should be one of: " + TYPES.toString()
    );
  }

  return (
    <div>
      <Snackbar
        {...rest}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        autoHideDuration={3500}
      >
        <SnackbarContent
          className={classes[`colors${capitalize(type)}`]}
          message={
            <div className={classes.container}>
              <div className={classes.icon}>{iconMapping[type]}</div>
              <Typography className={classes.message}>{message}</Typography>
            </div>
          }
          action={
            <React.Fragment>
              {buttonText && onButtonClick ? (
                <Button color="secondary" size="small" onClick={onButtonClick}>
                  {buttonText}
                </Button>
              ) : (
                ""
              )}
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={rest.onClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        ></SnackbarContent>
      </Snackbar>
    </div>
  );
}
