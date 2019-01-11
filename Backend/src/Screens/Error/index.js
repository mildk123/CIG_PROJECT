import React, { Component } from "react";

// Material Button
import Button from "@material-ui/core/Button";

// Drawer Material
import Drawer from "../../Helper/Drawer";

// Navbar
import NavBar from "../../Helper/NavBar/";

// import firebase from '../../Config/firebase'
// const database = firebase.database().ref();

class Error extends Component {
  render() {
    return (
      <div>
        <h1>Error #404</h1>
        <h6>PAGE NOT FOUND.</h6>
      </div>
    );
  }
}

export default Error;
