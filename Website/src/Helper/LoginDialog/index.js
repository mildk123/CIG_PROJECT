import React from 'react';
import firebase from '../../Config/firebase.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            open: false,
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    loginHandler = () => {
        let email = this.state.loginEmail;
        let password = this.state.loginPassword;
        if ( (email === 'mildk123@gmail.com') && (password === '12345678') ) {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (success) => {
                await localStorage.setItem('LoggedIN', true)
                await this.props.history.push("./Home");
            })
            .catch(function (error) {
                console.log(error.code);
                console.log(error.message);
            });   
        }else {
            alert('Invalid email / password')
        }
    }



    handleClickOpen = () => (
        this.setState({ open: true })
    )

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            label="Email Address"
                            name='loginEmail'
                            type="email"
                            fullWidth
                            onChange={(event) => this.onChangeHandler(event)}
                        />

                        <TextField
                            margin="dense"
                            id="name"
                            name="loginPassword"
                            label="Password"
                            type="password"
                            fullWidth
                            onChange={(event) => this.onChangeHandler(event)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={() => this.loginHandler()} color="primary">
                            Login
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Login;