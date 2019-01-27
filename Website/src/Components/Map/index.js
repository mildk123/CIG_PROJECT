import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class Map extends Component {
    constructor() {
        super()
        this.state = {}
    }
    onChange = (searchTerm) => {
        this.setState({
            searchTerm : searchTerm
        })
    }

    render() {
        const { myLocation, updateCoords } = this.props
        return (
            <div>
                
                {this.props.myLocation ? <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL7SI42Rqai7mHVJ9T8wP480weaQkVnn8&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `60vh`, }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: 20 }} />}

                    updateCoords={updateCoords}
                    center={myLocation}
                    markerLocation={myLocation}
                /> : <h1>Loading</h1>}
                <div style={{position: 'sticky', top: 1, left: 1}}>
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
        {props.isMarkerShown &&
            <Marker
                draggable
                defaultCursor="asdasd"
                clickable={true}
                title="Shop Location"
                label="."
                defaultPosition={{ lat: props.markerLocation.latitude, lng: props.markerLocation.longitude }}
                onDragEnd={position => {
                    props.updateCoords({ latitude: position.latLng.lat(), longitude: position.latLng.lng() })
                }}
            >
            </Marker>
        }
    </GoogleMap>
))

export default Map;