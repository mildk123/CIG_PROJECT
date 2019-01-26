import React, { Component, Fragment } from 'react';

// Login Dialog 
import LoginDialog from '../../Helper/LoginDialog/'

// Material Button
import Button from '@material-ui/core/Button';

// Local CSS
import './style.css'


class AuthScreen extends Component {
    constructor() {
        super()

        this.showLogin = this.showLogin.bind(this);
        this.LoginDialogs = React.createRef()
    }


    componentWillMount() {
        if (localStorage.getItem('LoggedIN')) {
            this.props.history.push('Home')
        }
    }

    onChangeHandler = (targetName, targetValue) => {
        this.setState({
            [targetName]: targetValue,
        })
    }

    showLogin = () => {
        this.LoginDialogs.current.handleClickOpen();
    }

    render() {
        return <Fragment >
            <div className="myComponent">
                <h1>Ciggy</h1>

                <LoginDialog ref={this.LoginDialogs} {...this.props}/>

                <div className='btnDiv'>
                    <Button className="btn" onClick={this.showLogin} variant='contained' style={{color: 'white', backgroundColor: 'black', width: 222}}  >
                        Admin Login
                    </Button>
                </div>

            </div>
        </Fragment>
    }


}

export default AuthScreen;