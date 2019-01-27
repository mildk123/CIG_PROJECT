import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";


import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import ShopDetailes from "../../Screens/AddShop/AddDetails";
import ShopLocation from "../../Screens/AddShop/ShopLocation";
import Finalize from "../../Screens/AddShop/Finalize";

import swal from 'sweetalert'

const styles = theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

class HorizontalLabelPositionBelowStepper extends React.Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: false,
      Sunday: false,
      ClosingTime: null,
      NoOfDays: null,
      OpeningTime: null, ShopDesc: null,
      ShopName: null
    };
  }

  handleNext = () => {
    const {
      ClosingTime,
      NoOfDays,
      OpeningTime,
      ShopDesc,
      ShopName,
    } = this.state;

    if (ClosingTime && NoOfDays && OpeningTime && ShopDesc && ShopName) {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
        }else {
          swal('Please fill all the fields')
    }
    let myShopDetails = {
      ClosingTime,
      NoOfDays,
      OpeningTime,
      ShopDesc,
      ShopName,

    }
    
  };

  onChangeHandler = (name, payload) => {
    console.log(name, payload)
    this.setState({
      [name]: payload
    })
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  getSteps = () => {
    return ["Add Shop Details", "Shop Location", "Finalize"];
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }} activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {this.state.activeStep === 0 && <ShopDetailes changesToStepper={(name, payload) => this.onChangeHandler(name, payload)} />}
        {this.state.activeStep === 1 && <ShopLocation />}
        {this.state.activeStep === 2 && <Finalize />}

        <Card style={{
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }}>
          <CardContent >
            {this.state.activeStep === steps.length ? (
              <div>
                <Button className={classes.instructions}>
                  All steps completed
              </Button>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (

                <div>
                  <div>

                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                    >
                      Back
                </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
          </CardContent>
        </Card>

      </div>
    );
  }
}


export default withStyles(styles)(HorizontalLabelPositionBelowStepper);

