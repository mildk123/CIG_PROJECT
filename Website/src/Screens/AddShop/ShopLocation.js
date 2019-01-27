import React, { Component } from 'react'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Map from '../../Components/Map'

class ShopLocation extends Component {
    constructor() {
        super()
        this.state = {
            myLocation: null
        }
    }

    componentWillMount = () => {

        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                myLocation: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            })
        })

    }

    updateCoords = (callback) => {
        console.log(callback)
        this.setState = ({
            selectedPlace: {
                latitude: callback.latitude,
                longitude: callback.longitude
            }
        })
    }

   

    render() {
        const { myLocation } = this.state;

        return (
            <div>
                <Card style={{ borderRadius: 0, border: 0, padding: 20 }}>
                    <h1>Shop Location</h1>

                    {myLocation && <CardContent style={{ height: '100%' }}>
                        <Map
                            updateCoords={this.updateCoords}
                            myLocation={myLocation}
                            onChangeHandler={this.onChange}
                        />

                    </CardContent>}

                </Card>      </div>
        )
    }
}

export default ShopLocation
