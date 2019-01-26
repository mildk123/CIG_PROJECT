import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DropDown from "../DropDown";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class DateTimePickers extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChoice = (resp) => {
    this.props.handleChoice(resp)
  }

  onChange = data => {
    console.log("time", data);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container}>
        <TextField
          style={{ margin: 10 }}
          label="Opening Time"
          type="time"
          defaultValue="08:45"
          className={classes.textField}
          onChange={data => this.onChange(data.target.value)}
        />

        <TextField
          style={{ margin: 10 }}
          label="Closing Time"
          type="time"
          defaultValue="18:30"
          className={classes.textField}
          onChange={data => this.onChange(data.target.value)}
        />

        <DropDown handleChoice={this.handleChoice} />
      </form>
    );
  }
}

export default withStyles(styles)(DateTimePickers);
