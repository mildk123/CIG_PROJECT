import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
    constructor() {
        super()

        this.state = {
            coords: null,
            mylocation : null
        };

    }

   
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                myLocation: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            })
        })
    }

    render() {

        return (
        // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUjCXZGLkLYS0TbebvN_Mi1hmq9P2XLQA"></script>
            <div>
                {this.props.center ? <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUjCXZGLkLYS0TbebvN_Mi1hmq9P2XLQA&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `70vh`,  }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: 25 }} />}
                    coords={this.props.center}
                    updateCoords={this.props.updateCoords}
                    center={this.props.center}
                /> : <h1>Loading</h1>
            
            }
            </div>
        )
    }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{lat: props.center.latitude, lng: props.center.longitude}}
    >
        {props.isMarkerShown &&
            <Marker
                draggable
                position={{ lat: props.coords.latitude, lng: props.coords.longitude }}
                onDragEnd={position => {
                    props.updateCoords({ latitude: position.latLng.lat(), longitude: position.latLng.lng() })
                }}
            />}
    </GoogleMap>
))

export default Map;