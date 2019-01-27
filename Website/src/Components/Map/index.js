import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const myApiKey = 'AIzaSyCUjCXZGLkLYS0TbebvN_Mi1hmq9P2XLQA'

class Map extends Component {
    constructor() {
        super()

        this.state = {
            coords: null,
            mylocation : null,
            newCoords : null
        };

    }

    // componentDidMount() {
    //     this.setPosition();
    // }

    render() {

        return (
        // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUjCXZGLkLYS0TbebvN_Mi1hmq9P2XLQA"></script>
            <div>
                {this.props.coords ? <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL7SI42Rqai7mHVJ9T8wP480weaQkVnn8&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `70vh`,  }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: 25 }} />}

                    updateCoords={this.updateCoords}
                    // center={this.props.coords}
                    // markerCoords={this.props.coords}
                    // newCoords={this.state.newCoords}
                /> : <h1>Loading</h1>
            
            }
            </div>
        )
    }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        // defaultCenter={{lat: props.center.latitude, lng: props.center.longitude}}
        defaultCenter={{lat: 24.9185737, lng: 67.1024671}}

        onClick={(position) => {
            props.updateCoords({
                latitude: position.latLng.lat(),
                longitude: position.latLng.lng()
            })
        }
        }
    >
        {props.isMarkerShown ?
            (<Marker
                draggable
                position={{ lat: 24.9185737, lng: 67.1024621 }}
                
                onDragEnd={position => {
                    props.updateCoords({ latitude: position.latLng.lat(), longitude: position.latLng.lng() })
                }}
            />) : 
            (<Marker
            
                draggable
                position={{ lat: props.markerCoords.latitude, lng: props.markerCoords.longitude }}
                onDragEnd={position => {
                    props.updateCoords({ latitude: position.latLng.lat(), longitude: position.latLng.lng() })
                }}
            />)
            }
    </GoogleMap>
))

export default Map;