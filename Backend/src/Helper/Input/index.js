import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  }
});

class ComposedTextField extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div style={{flex: 1, justifyContent: "space-evenly"}}>
          <FormControl aria-describedby="ShopName">
            <InputLabel htmlFor="ShopName">Name</InputLabel>

            <Input
              id="ShopName"
              onChange={event => this.handleChange("ShopName", event)}
              style={{ width: 450 }}
            />
            <FormHelperText id="ShopName-help">
              Some important helper text
            </FormHelperText>
          </FormControl>

          <FormControl aria-describedby="ShopDescprition">
            <InputLabel htmlFor="ShopDesc">Descprition</InputLabel>

            <Input
              id="ShopDesc"
              onChange={event => this.handleChange("ShopDesc", event)}
              style={{ width: 450 }}
            />
            <FormHelperText id="ShopDesc-help">
              Some important helper text
            </FormHelperText>
          </FormControl>
        </div>

        <div style={{flex: 1, justifyContent: "space-evenly"}}>

        <FormControl aria-describedby="ShopName">
            <InputLabel htmlFor="ShopName">Select </InputLabel>

            <Input
              id="ShopName"
              onChange={event => this.handleChange("ShopName", event)}
              style={{ width: 450 }}
            />
            <FormHelperText id="ShopName-help">
              Some important helper text
            </FormHelperText>
          </FormControl>

        </div>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComposedTextField);
