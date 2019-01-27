import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class ComposedTextField extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (name, event) => {
    this.props.onChangeHandler(name, event.target.value)
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>

        <div style={{ flex: 1 }}>
          <FormControl aria-describedby="ShopName" style={{ margin: 10 }}>
            <InputLabel htmlFor="ShopName">Name</InputLabel>

            <Input
              id="ShopName"
              onChange={event => this.handleChange("ShopName", event)}
              style={{ width: 450 }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <FormHelperText id="ShopName-help">The Smoke Shop</FormHelperText>
          </FormControl>

          <FormControl
            aria-describedby="ShopDescprition"
            style={{ margin: 10 }}
          >
            <InputLabel htmlFor="ShopDesc">Descprition</InputLabel>

            <Input
              id="ShopDesc"
              onChange={event => this.handleChange("ShopDesc", event)}
              style={{ width: 450 }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <FormHelperText id="ShopDesc-help">
              We provide the cheapest 20-pack around town....
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
