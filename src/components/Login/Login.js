import React from 'react'
import StyleSheet from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './login.css'
import { axios } from 'axios';
class Login extends React.Component{
    state = {
        email: '',
        password: ''
    };
    handleEmailChange = (e)=> {
        this.setState({
            email : e.target.value
        })
        console.log(this.state.email);
    }
    onSubmit = (e) => {
        console.log(this.state.email + "\n"+ this.state.password);
    }
    render() {
        return (
            <div className="body">
                <div className="paper">
                    <Paper elevation={16}>
                    <form className="form" noValidate>
                        <Grid container spacing={2} className="box">
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleEmailChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        this.setState({
                                        password : e.target.value 
                                    });
                                    }}
                                />
                            </Grid>
                            
                        </Grid>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.onSubmit}
                        >
                            Sign in
                        </Button>
                        <Grid container justify="center">
                            <Grid item>
                            <Link href="/register" variant="body2">
                                Don't have account? Sign up.
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </Paper>
                </div>
            </div>
        )
    }
}
export default Login