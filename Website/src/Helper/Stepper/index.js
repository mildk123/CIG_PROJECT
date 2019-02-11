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

class StepperThing extends React.Component {
  constructor() {
    super();
    this.state = {
      activeStep: 2,
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
      activeStep,
      ClosingTime,
      NoOfDays,
      OpeningTime,
      ShopDesc,
      ShopName,
    } = this.state;

    if (activeStep === 0) {
      if (!NoOfDays && !ShopDesc && !ShopName) {
        swal('Please fill all the fields')

      } else if (!ClosingTime && !OpeningTime) {
        swal('Please select your shop timmings')
      } else {
        // All the data from ShopDetails is saved in state!
        this.setState(state => ({
          activeStep: state.activeStep + 1
        }));
      }
    } else {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }))
    }

  }

  getLocation = (callback) => {
    this.setState({
      ShopLocation: callback
    })
  }

  onChangeHandler = (name, payload) => {
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
    return ["Add Shop Details", "Shop Location"];
  };

  CompletedSteps = () => {
    console.log(this.state)
    console.log('12311 21312', this.props)
  }

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
        {this.state.activeStep === 1 && <ShopLocation getLocation={(callback) => this.getLocation(callback)} />}
        {/* {this.state.activeStep === 2 && <Finalize />} */}

        <Card style={{
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }}>
          <CardContent >
            {this.state.activeStep === steps.length ? (
              <div>
                <div style={{ padding: '5%' }}>
                  <img src={require('../../Assetts/site-Content/gTick.png')} alt="ALL STEPS DONE." style={{
                    width: '25%'
                  }} />
                </div>
                <Button style={{margin: '2%'}} variant='raised' color="primary" onClick={this.handleReset}>Reset</Button>
                <Button color="secondary" variant="contained" onClick={() => this.CompletedSteps()} className={classes.instructions}>
                  All steps completed
              </Button>
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


export default withStyles(styles)(StepperThing);

