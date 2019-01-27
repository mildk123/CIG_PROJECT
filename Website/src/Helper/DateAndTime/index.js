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

  onChange = (name, payload) => {
    this.props.onChangeHandler(name, payload)
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container}>
        <TextField
          style={{ margin: 10 }}
          label="Opening Time"
          type="time"
          defaultValue="00:00"
          className={classes.textField}
          onChange={data => this.onChange('OpeningTime' ,data.target.value)}
        />

        <TextField
          style={{ margin: 10 }}
          label="Closing Time"
          type="time"
          defaultValue="00:00"
          className={classes.textField}
          onChange={data => this.onChange('ClosingTime' ,data.target.value)}
        />

        <DropDown handleChoice={data => this.onChange('NoOfDays' , data)} />
      </form>
    );
  }
}

export default withStyles(styles)(DateTimePickers);
