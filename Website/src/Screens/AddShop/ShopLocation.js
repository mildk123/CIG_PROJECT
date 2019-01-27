import React, { Component } from 'react'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Map from '../../Components/Map'

class ShopLocation extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentWillMount = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        })
    }

    updateCoords = (callback) => {
        this.setState = ({
            selectedMarker: {
                latitude: callback.latitude,
                longitude: callback.longitude
            }
        })
    }

    render() {
        const { latitude, longitude, selectedMarker } = this.state;

        return (
            <div>
                <Card style={{ borderRadius: 0, border: 0, padding: 25 }}>
                    <h1>Shop Location</h1>

                    {longitude && <CardContent style={{ height: '100%' }}>
                        <Map
                            coords={{ latitude, longitude }}
                            center={{ latitude, longitude }}
                            updateCoords={this.updateCoords}
                        />

                    </CardContent>}

                </Card>      </div>
        )
    }
}

export default ShopLocation
