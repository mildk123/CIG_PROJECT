import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
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

  onChange = (data) => {
    console.log('time', data)
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} >
        <TextField
        style={{margin: 10}}
          label="Opening Time"
          type="time"
          defaultValue="08:45"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
          onChange = { (data) => this.onChange(data.target.value)}
        />

        <TextField
        style={{margin: 10}}
          label="Closing Time"
          type="time"
          defaultValue="18:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
          onChange = { (data) => this.onChange(data.target.value)}
        />
      </form>
    );
  }
}

export default withStyles(styles)(DateTimePickers);
