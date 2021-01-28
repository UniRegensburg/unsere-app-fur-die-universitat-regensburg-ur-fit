import React from 'react';

import { Button, Checkbox, FormControlLabel, Grid, TextField, withStyles, Paper } from '@material-ui/core';
import Logo from "../../assets/images/URFitLogo.png";

const style = (theme) => ({

    grid:{
        width: '100%',
        height: '100%',
    },
    textFields:{
        margin: '5px'
    },
    button:{
        margin: '20px'
    },
    paper:{
        margin: '10px',
    },
    form:{
        margin: '40px',
    },
    logo:{
        width: "124px",
        height: "74px",
        marginBottom: '40px',
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
                            <TextField className={ classes.textFields } label='E-Mail Adresse' required={true} type='email' size='medium' variant='standard'/>
                        </Grid>
                        <Grid item xs={12}> 
                            <TextField className={ classes.textFields } label='Passwort' required={true} type='password' size='medium' variant='standard' />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                className={ classes.form }
                                value='start'
                                control={<Checkbox color='primary'/>}
                                label='Ich habe die Nutzungsbedingungen gelesen und bin damit einverstanden.'
                                labelPlacement='start'/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button className={ classes.button } variant='contained' disabled={true} color='default' href='\'>LogIn</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(style, { withTheme: true })(Loginscreen);