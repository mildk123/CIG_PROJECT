import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Input from "../../Helper/Input";
import DateAndTime from "../../Helper/DateAndTime";
import WhichDays from '../../Helper/CheckBoxes'


import { connect } from 'react-redux';
import { storeShopDetails } from '../../Redux/Actions/shopAction'

class ShopDetails extends React.Component {
  constructor() {
    super()
    this.state = {

    };
  }


  onChangeHandler = (name, payload) => {
    this.props.changesToStepper(name, payload)
  }

  render() {
    return (
      <Card style={{
        borderRadius: 0, border: 0, padding: 25
      }}>
        <h1>{this.props.cardTitle}</h1>
        <CardContent>

          <Input onChangeHandler={(name, payload) => this.onChangeHandler(name, payload)} />

        </CardContent>

        <CardContent>

          <DateAndTime
            onChangeHandler={(name, payload) => this.onChangeHandler(name, payload)}
          />

        </CardContent>
        <CardContent>

          <WhichDays onChangeHandler={(name, payload) => this.onChangeHandler(name, payload)} />

        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    state
  };
};
// 
const mapDispatchToProps = {
  onStoreShopDetails: storeShopDetails,
};
// 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopDetails);

