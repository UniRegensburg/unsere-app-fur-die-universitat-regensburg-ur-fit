import React from 'react'
import { Button, Grid, makeStyles } from "@material-ui/core/";

import TopAppBar from "../pageComponents/TopAppBar";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "16px", 
    },
    buttons: {}

  }));

export default function Settingsscreen(){
    const classes = useStyles();

    const handleUsername = () => {
        return ""
    }
    const handleDelete = () =>{
        return ""
    }

    return (
        <div className="Settingsscreen">
            <TopAppBar data-testid="appbar" title="Einstellungen" />
            <div className={classes.container}>
            <Grid container direction="column" spacing={3} >
                <Grid item>
                <Button className={ classes.buttons } variant="contained" color="default" onClick={handleUsername}>Nutzername ändern</Button>
                </Grid>
                <Grid item>
                <Button className={ classes.buttons } variant="contained" color="secondary" onClick={handleDelete}>Konto löschen</Button>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}