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
      activeStep: 1
    };
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

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

  // getStepContent = stepIndex => {
  //   switch (stepIndex) {
  //     case 0:
  //       return
  //     case 1:
  //       return
  //     case 2:
  //       return "This is the bit I really care about!";
  //     default:
  //       return "Unknown stepIndex";
  //   }
  // };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;
    // const data = this.getStepContent();
    // this.getStepContent(this.state.activeStep);

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

        {this.state.activeStep === 0 && <ShopDetailes />}
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

