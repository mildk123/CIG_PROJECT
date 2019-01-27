import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

class CheckboxesGroup extends React.Component {
  constructor() {
    super();
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

  handleChange = name => event => {
    this.props.onChangeHandler(name, event.target.checked)
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    } = this.state;


    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Monday}
                  onChange={this.handleChange("Monday")}
                  value="Monday"
                />
              }
              label="Monday"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Tuesday}
                  onChange={this.handleChange("Tuesday")}
                  value="Tuesday"
                />
              }
              label="Tuesday"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Wednesday}
                  onChange={this.handleChange("Wednesday")}
                  value="Wednesday"
                />
              }
              label="Wednesday"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Thursday}
                  onChange={this.handleChange("Thursday")}
                  value="Thursday"
                />
              }
              label="Thursday"
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Friday}
                  onChange={this.handleChange("Friday")}
                  value="Friday"
                />
              }
              label="Friday"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={Saturday}
                  onChange={this.handleChange("Saturday")}
                  value="Saturday"
                />
              }
              label="Saturday"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={Sunday}
                  onChange={this.handleChange("Sunday")}
                  value="Sunday"
                />
              }
              label="Sunday"
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxesGroup);
