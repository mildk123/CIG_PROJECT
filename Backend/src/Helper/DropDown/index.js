import React from "react";
import PropTypes from "prop-types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class MenuListComposition extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChoice = (resp) => {
    this.props.handleChoice(resp)
    this.setState({
        noDays : resp,
        open: false
    })
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <FormControl
            aria-describedby="ShopDescprition"
            style={{ margin: 10 }}
          >
            <InputLabel htmlFor="ShopDesc">Number of Days</InputLabel>

            <Input
              onClick={this.handleToggle}
              style={{ width: 250 }}
              value={this.state.noDays && this.state.noDays}
              startAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>

          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={() => this.handleChoice('once a week')}>once a week</MenuItem>
                      <MenuItem onClick={() => this.handleChoice('2 Days a week')}>2 Days a week</MenuItem>
                      <MenuItem onClick={() => this.handleChoice('3 Days a week')}>3 Days a week</MenuItem>
                      <MenuItem onClick={() => this.handleChoice('4 Days a week')}>4 Days a week</MenuItem>
                      <MenuItem onClick={() => this.handleChoice('5 Days a week')}>5 Days a week</MenuItem>
                      <MenuItem onClick={() => this.handleChoice('6 Days a week')}>6 Days a week</MenuItem>
                      <MenuItem onClick={() => this.handleChoice('Full week')}>Full week</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComposition);
