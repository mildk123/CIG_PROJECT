import React from 'react';

import Auth from './Auth/index';

import Home from './Home';
import AddProducts from './AddProducts';
import AddShop from './AddShop';
import Error from './Error';


import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

class Routes extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            redirectTo: 'Dashboard'
        };
    }

    handleClick = (name) => {
        if (name === "Dashboard") {
            this.setState({
                redirectTo: name,
                value: 0
            })
        } else {
            this.setState({
                redirectTo: name,
                value: 1
            })
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Auth} />
                        <Route path="/Home" component={Home} />
                        <Route path="/AddProducts" component={AddProducts} />
                        <Route path="/AddShop" component={AddShop} />
                        <Route component={Error} />
                        
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }

}


export default Routes;