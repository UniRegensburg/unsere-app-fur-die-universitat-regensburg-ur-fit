import React from 'react';

import { Button, Paper, Grid, TextField, withStyles } from '@material-ui/core';
import Logo from "../../assets/images/URFitLogo.png";

const style = (theme) => ({

    grid:{
        width: '100%',
        height: '100%',
        margin: '0px'
    },
    textFields:{
        width: '80%',
        margin: '50px 0px 0px 50px'
    },
    button:{
        margin: '50px 0px 0px 50px'
    },
    paper:{
        margin: '20px',
        padding: theme.spacing(2),
    },
    logo:{
        width: "124px",
        height: "74px",
        padding: '0 50px'
    }

  });

class Loginscreen extends React.Component{
    state = {
        searchNodes: ""
      };
    render(){
        const { classes } = this.props;
        return (
            <div className="Loginscreen">
                <Grid className={ classes.grid } container spacing={2} justify='center' alignItems='center' direction='column'>
                    <Grid item xs={6}>
                        <Paper className={ classes.paper }>
                            <img src={Logo} alt="AppBarLogo" className={classes.logo} />                              
                        <TextField className={ classes.textFields } label='E-Mail Adresse' required={true} type='email' size='medium' variant='standard' />
                        <TextField className={ classes.textFields } label='Passwort' required={true} type='password' size='medium' variant='standard' />
                        <Button className={ classes.button } variant='contained' color='default' href='\'>LogIn</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(style, { withTheme: true })(Loginscreen);