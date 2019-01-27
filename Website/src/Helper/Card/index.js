import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Input from "../Input";
import DateAndTime from "../../Helper/DateAndTime";
import WhichDays from '../CheckBoxes'


import { connect } from 'react-redux';
import { storeShopDetails } from '../../Redux/Actions/shopAction'

class DetailsCard extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  onChangeHandler = (name, payload) => {
    console.log(name, payload)
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
)(DetailsCard);

