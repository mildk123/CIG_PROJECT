import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Input from "../Input";
import DateAndTime from "../../Helper/DateAndTime";
import WhichDays from '../CheckBoxes'


import { connect } from 'react-redux';
import { storeShopDetails } from '../../Redux/Actions/shopAction'
import swal from "sweetalert";

class DetailsCard extends React.Component {
  constructor() {
    super()
    this.state = {
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: false,
      Sunday: false
    };
  }

  componentWillUnmount = () => {
    const {
      ClosingTime,
      NoOfDays,
      OpeningTime,
      ShopDesc,
      ShopName,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
    } = this.state;

    if (ClosingTime ||
      NoOfDays ||
      OpeningTime ||
      ShopDesc ||
      ShopName ||
      Monday ||
      Tuesday ||
      Wednesday ||
      Thursday ||
      Friday ||
      Saturday ||
      Sunday
    ) {
      swal('Please fill out all the fields!')
      return false
    }else{

      
      let myShopDetails = {
        ClosingTime,
        NoOfDays,
        OpeningTime,
        ShopDesc,
        ShopName,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
      }
      
      this.props.onStoreShopDetails(myShopDetails)
    }
  }

  onChangeHandler = (name, payload) => {
    this.setState({
      [name]: payload
    })
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

