import React, { Component } from "react";

import Drawer from "../../Helper/Drawer";

// Navbar
import NavBar from "../../Helper/NavBar/";

export default class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.showDrawer = React.createRef();
  }

  Drawer = () => {
    this.showDrawer.current.handleClickOpen("left", true);
  };

  render() {
    return (
      <div>
        <Drawer ref={this.showDrawer} {...this.props} />

        <NavBar Drawer={this.Drawer} {...this.props}>
          Add Products
        </NavBar>

        <div />
      </div>
    );
  }
}
