import React, { Component } from "react";

// Material Button
// import Button from "@material-ui/core/Button";

// Drawer Material
import Drawer from "../../Helper/Drawer";

// Navbar
import NavBar from "../../Helper/NavBar/";
import Card from "../../Helper/Card";

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

        <div style={{ padding: 50 }}>
          <Card />
        </div>

        <div />
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   return {
//     state
//   };
// };

// const mapDispatchToProps = {
//   onUpdateUser: updateUser,
//   onCurrentUserIndex: CurrentUserIndex
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AddShop);
