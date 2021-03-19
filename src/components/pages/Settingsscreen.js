import React from 'react'
import { 
    Button, 
    Grid, 
    makeStyles } from "@material-ui/core/";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TopAppBar from "../pageComponents/TopAppBar";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "24px", 
    },
    buttons: {
        width: "100%"
    },
  }));

export default function Settingsscreen(){
    const classes = useStyles();
    const [openUsername, setUsernameOpen] = React.useState(false);
    const [openDelete, setDeleteOpen] = React.useState(false);

    const handleUsername = () => {
        setUsernameOpen(true);
    }
    const handleCloseDialogUsername = () => {
        setUsernameOpen(false);
    }

    const handleDelete = () => {
        setDeleteOpen(true);
    }
    const handleCloseDialogDelete = () => {
        setDeleteOpen(false);
    }

    return (
        <div className="Settingsscreen">
            <TopAppBar data-testid="appbar" title="Einstellungen" />
            <div className={classes.container}>
            <Grid container direction="column" spacing={3} >
                <Grid item >
                    <Button 
                        className={ classes.buttons } 
                        variant="contained" 
                        color="default" 
                        onClick={handleUsername}>
                        Umbennen
                    </Button>
                    <Dialog 
                        open={openUsername} 
                        onClose={handleCloseDialogUsername} 
                        aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Nutzername ändern</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Bitte geben sie einen neuen Nutzernamen ein.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Nutzername"
                                type="text"
                                value="Viktor"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button 
                                onClick={handleCloseDialogUsername} 
                                color="primary">
                                Abbrechen
                            </Button>
                            <Button 
                                onClick={handleCloseDialogUsername} 
                                color="primary" 
                                autoFocus>
                                Bestätigen
                            </Button>
                        </DialogActions>
                    </Dialog>
                    </Grid>
                <Grid item>
                    <Button 
                        className={ classes.buttons } 
                        variant="contained" 
                        color="secondary" 
                        onClick={handleDelete}>
                        Konto löschen
                    </Button>
                        <Dialog
                            open={openDelete}
                            onClose={handleCloseDialogDelete}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">Möchten Sie ihr Konto wirklich löschen?</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Wenn Sie ihr konto löschen, werden alle Ihre Daten unwiderruflich gelöscht. Dies kann nicht mehr rückgängig gemacht werden!
                                <br></br>
                                <br></br>
                                Sind Sie sicher, dass Sie ihr Konto löschen wollen?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button 
                                onClick={handleCloseDialogDelete} 
                                color="primary" 
                                autoFocus>
                                Zurück
                            </Button>
                            <Button 
                                onClick={handleCloseDialogDelete} 
                                color="secondary">
                                Ja
                            </Button>
                            </DialogActions>
                        </Dialog>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}