import React, { useState } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core/";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CustomSnackbar from "../pageComponents/CustomSnackbar";
import { deleteUserAccount } from "../services/contentProvider";
import { useAuthState } from "../hooks/useAuthState";
import auth from "../services/authService";

import TopAppBar from "../pageComponents/TopAppBar";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "24px",
  },
  buttons: {
    width: "100%",
  },
}));

export default function Settingsscreen() {
  const classes = useStyles();
  const userId = useAuthState();
  const [openDelete, setDeleteOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  let snackbarErrorMessage = "";

  const handleDelete = () => {
    setDeleteOpen(true);
    // todo: delete account (entry in user db) and logout (redirect to login) + show feedback (snackbar)
  };
  const handleCloseDialogAbortDeletion = () => {
    setDeleteOpen(false);
  };

  const handleCloseDialogDeleteAccount = () => {
    deleteUserAccount(userId)
      .then(() => {
        auth.logout();
      })
      .catch((error) => {
        snackbarErrorMessage = `Failed to delete account! Try again later. ${error}`;
        setErrorSnackbarOpen(true);
      });
    setDeleteOpen(false);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorSnackbarOpen(false);
  };

  return (
    <div className="Settingsscreen">
      <TopAppBar data-testid="appbar" title="Einstellungen" favIcon="visible" />
      <div className={classes.container}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Button
              className={classes.buttons}
              variant="contained"
              color="secondary"
              onClick={handleDelete}
            >
              Konto löschen
            </Button>
            <Dialog
              open={openDelete}
              onClose={handleCloseDialogAbortDeletion}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Möchten Sie Ihr Konto wirklich löschen?
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Wenn Sie Ihr Konto löschen, werden alle Ihre Daten
                  unwiderruflich gelöscht. Dies kann nicht mehr rückgängig
                  gemacht werden!
                  <br></br>
                  <br></br>
                  Sind Sie sicher, dass Sie Ihr Konto löschen wollen?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleCloseDialogAbortDeletion}
                  color="primary"
                  autoFocus
                >
                  Abbrechen
                </Button>
                <Button
                  onClick={handleCloseDialogDeleteAccount}
                  color="secondary"
                >
                  Löschen
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </div>
      <CustomSnackbar
        open={errorSnackbarOpen}
        onClose={closeSnackbar}
        message={snackbarErrorMessage}
        type="error"
      />
    </div>
  );
}
