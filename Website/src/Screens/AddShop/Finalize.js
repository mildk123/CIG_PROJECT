import React, { Component } from 'react'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from 'react-redux';

class Finalize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }


  render() {
    return (

      <Card style={{ borderRadius: 0, border: 0 }} raised={false}>
        <CardContent>
          <CardContent>
            <h1>Finalize</h1>
          </CardContent>

          <CardContent style={{ padding: 50 }}>

            
          </CardContent>
        </CardContent>

      </Card>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    state
  };
};
// 
const mapDispatchToProps = {
};
// 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finalize);