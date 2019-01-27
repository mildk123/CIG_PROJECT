import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Input from "../Input";
import DateAndTime from "../../Helper/DateAndTime";
import WhichDays from '../CheckBoxes'


class DetailsCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChoice = (resp) => {
    console.log('response on card ', resp)
  }

  render() {
    return (
      <Card style={{
        borderRadius: 0, border: 0, padding: 25
      }}>
        <h1>{this.props.cardTitle}</h1>
        <CardContent>

          <Input />

        </CardContent>

        <CardContent>

          <DateAndTime handleChoice={this.handleChoice} />

        </CardContent>
        <CardContent>

          <WhichDays />

        </CardContent>
      </Card>
    );
  }
}



export default DetailsCard;
