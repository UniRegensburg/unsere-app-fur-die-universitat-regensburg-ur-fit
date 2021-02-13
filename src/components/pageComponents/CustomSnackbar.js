import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function CustomSnackbar(props) {
  // buttonText and onButtonClick are optional properties
  // onClose and onButtonClick should be functions
  const { message, isOpen, onClose, buttonText, onButtonClick } = props;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={isOpen}
        autoHideDuration={3500}
        onClose={onClose}
        message={message}
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
              onClick={onClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
