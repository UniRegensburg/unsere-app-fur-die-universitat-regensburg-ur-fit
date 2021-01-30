import React from 'react';

import { Button, Checkbox, FormControlLabel, Grid, TextField, withStyles, Paper } from '@material-ui/core';
import Logo from "../../assets/images/URFitLogo.png";

const style = (theme) => ({

    grid:{
    },
    textFields:{
        margin: '8px'
    },
    button:{
        margin: '16px'
    },
    paper:{
        margin: '8px',
    },
    form:{
        margin: '32px',
    },
    logo:{
        width: "124px",
        height: "74px",
        marginBottom: '32px',
    }

  });

class Loginscreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = { valueEMail: "", valuePassword: "", validEMail: true, validPassword: true, initialEMail: true, initialPassword: true};
        this.handleChangeEMail = this.handleChangeEMail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeEMail(event){
        const re = /\S+@\S+\.\S+/; //Regular expression to test email value
        this.setState({ 
            valueEMail: event.target.value, 
            validEMail: (re.test(event.target.value) ? true : false),
            initialEMail: false});           
    }

    handleChangePassword(event){
        this.setState({ 
            valuePassword: event.target.value, 
            validPassword: (event.target.value.length > 0 ? true : false),
            initialPassword: false});
    }
    
    render(){
        const { classes } = this.props;
        return (
            <div className='Loginscreen'>
                <Paper className={ classes.paper } data-testid='bgPaper'>
                    <Grid className={ classes.grid } container justify='space-between' alignItems='center' direction='column'>
                        <Grid item xs={12}>                     
                            <img data-testid='logo' src={Logo} alt="AppBarLogo" className={classes.logo} /> 
                        </Grid>  
                        <Grid item xs={12}>                            
                            <TextField 
                                className={ classes.textFields } 
                                data-testid='inputEMail'
                                id='inputEMail' onChange={this.handleChangeEMail} 
                                value={this.state.valueEMail} 
                                error={!this.state.validEMail} 
                                label='E-Mail Adresse' 
                                required={true} 
                                type='email'
                                size='medium' 
                                variant='standard'/>
                        </Grid>
                        <Grid item xs={12}> 
                            <TextField 
                                className={ classes.textFields }
                                data-testid='inputPassword' 
                                id='inputPassword' 
                                onChange={this.handleChangePassword} 
                                value={this.state.valuePassword} 
                                error={!this.state.validPassword && !this.state.initialPassword} 
                                label='Passwort' 
                                required={true} 
                                type='password' 
                                size='medium' 
                                variant='standard' />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                className={ classes.form }
                                data-testid='formLabel'
                                value='start'
                                control={<Checkbox data-testid='formCheckbox' color='primary'/>}
                                label='Eingeloggt bleiben?'
                                labelPlacement='start'/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                className={ classes.button } 
                                id='buttonLogin' 
                                data-testid='buttonLogin'
                                variant='contained' 
                                disabled={!(this.state.validEMail && this.state.validPassword) || this.state.initialEMail || this.state.initialPassword } 
                                color='default' 
                                href='\'>
                                    LogIn
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(style, { withTheme: true })(Loginscreen);