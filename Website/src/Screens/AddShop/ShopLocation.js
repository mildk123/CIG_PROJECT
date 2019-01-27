import React, { Component } from 'react'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Map from '../../Components/Map/Map'

export class AddDetails extends Component {
    render() {
        return (
            <div>
                <Card style={{
                    borderRadius: 0, border: 0, padding: 25
                }}>
                    <h1>Shop Location</h1>
                    <CardContent>

                        <Map />
                    </CardContent>

                </Card>      </div>
        )
    }
}

export default AddDetails
