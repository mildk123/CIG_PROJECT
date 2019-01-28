import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class Map extends Component {
    constructor() {
        super()
        this.state = {
            selectedPlace: null
        }
        this.getLocation()
    }


    getLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                myLocation: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            })
        })

    }

    onChange = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    updateCoords = (callback) => {
        this.props.getloc(callback)
        this.setState({
            updated: {
                latitude: callback.latitude,
                longitude: callback.longitude
            }
        })
    }

    render() {
        const { myLocation, updated } = this.state
        return (
            <div>

                {myLocation ? <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL7SI42Rqai7mHVJ9T8wP480weaQkVnn8&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `60vh`, }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: 20 }} />}

                    center={myLocation}
                    updateCoords={(callback) => this.updateCoords(callback)}
                    updated={updated}
                /> : <h1>Loading</h1>}

                <div style={{ position: 'sticky' }}>
                    <TextField
                        onChange={(event) => this.onChange(event.target.value)}
                        label="Search"
                        margin="dense"
                    />
                </div>

            </div>
        )
    }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.center.latitude, lng: props.center.longitude }}
        onClick={(position) => {
            props.updateCoords({
                latitude: position.latLng.lat(),
                longitude: position.latLng.lng()
            })
        }

        }
    >
        <Marker
            draggable
            clickable={true}
            title="Shop Location"
            position={props.updated ?
                { lat: props.updated.latitude, lng: props.updated.longitude }
                : {
                    lat: props.center.latitude, lng: props.center.longitude
                }
            }

            onDragEnd={position => {
                props.updateCoords({ latitude: position.latLng.lat(), longitude: position.latLng.lng() })
            }}
        />
    </GoogleMap>
))

export default Map;