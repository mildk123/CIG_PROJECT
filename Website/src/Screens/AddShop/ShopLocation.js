import React, { Component } from 'react'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Map from '../../Components/Map'

import { connect } from 'react-redux';

import { storeMapDetails } from '../../Redux/Actions/shopAction'

class ShopLocation extends Component {
    constructor() {
        super()
        this.state = {}
   }

    getloc = (callback) => {
        this.props.getLocation({
            latitude: callback.latitude,
            longitude: callback.longitude
        })

    }

    render() {
        const { myLocation } = this.state;

        return (
            <div>
                <Card style={{ borderRadius: 0, border: 0, padding: 20 }}>
                    <h1>Shop Location</h1>

                    <CardContent style={{ height: '100%' }}>
                        <Map
                            getloc={(callback) => this.getloc(callback)}
                        />

                    </CardContent>

                </Card>      </div>
        )
    }
}

// export default ShopLocation
const mapStateToProps = (state, props) => {
    return {
        state
    };
};
// 
const mapDispatchToProps = {
    onStoreMapDetails: storeMapDetails,
};
// 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopLocation);
