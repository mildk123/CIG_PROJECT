import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Material Button
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// Firebase
import firebase from '../../Config/firebase.js';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends React.Component {
  signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("Signed Out");

        localStorage.removeItem("LoggedIN");
        localStorage.removeItem("myUid");

        this.props.history.push("/");
      })
      .catch(error => {
        console.error("Sign Out Error", error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              onClick={this.props.Drawer}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <h3>{this.props.children}</h3>

            <Button
              onClick={this.signOut}
              color="secondary"
              variant="outlined"
              size="large"
              style={{ position: "absolute", right: 10 }}
            >
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
