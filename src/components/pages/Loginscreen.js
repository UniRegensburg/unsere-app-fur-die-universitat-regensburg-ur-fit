import React from 'react';

import { Button, Paper, Grid, TextField, withStyles } from '@material-ui/core';
import Logo from "../../assets/images/URFitLogo.png";

const style = (theme) => ({

    grid:{
        width: '100%',
        height: '100%',
    },
    textFields:{
        marginTop: '20px',
        marginRight: '5px',
        marginBottom:'20px',
        marginLeft: '5px'
    },
    button:{
    },
    paper:{
        padding: theme.spacing(4),
    },
    logo:{
        width: "124px",
        height: "74px",
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
                <Paper className={ classes.paper }>
                    <Grid className={ classes.grid } container justify='space-between' alignItems='center' direction='column'>
                        <Grid item xs={12}>                     
                            <img src={Logo} alt="AppBarLogo" className={classes.logo} /> 
                        </Grid>  
                        <Grid item xs={12}>                            
                        <TextField className={ classes.textFields } label='E-Mail Adresse' required={true} type='email' size='medium' variant='standard' />
                        </Grid>
                        <Grid item xs={12}> 
                        <TextField className={ classes.textFields } label='Passwort' required={true} type='password' size='medium' variant='standard' />
                        </Grid>
                        <Grid item xs={12}>
                        <Button className={ classes.button } variant='contained' color='default' href='\'>LogIn</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(style, { withTheme: true })(Loginscreen);