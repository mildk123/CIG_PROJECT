import React, { Component } from "react";

// Material Button
import Button from "@material-ui/core/Button";

// Drawer Material
import Drawer from "../../Helper/Drawer";

// Navbar
import NavBar from "../../Helper/NavBar/";

// SweetAlert
// import swal from 'sweetalert'

// import { updateUser } from "../../Redux/Actions/authAction";
// import { CurrentUserIndex } from "../../Redux/Actions/meetingAction";
// import { connect } from "react-redux";

// import firebase from '../../Config/firebase'
// const database = firebase.database().ref();

export default class AddShop extends Component {
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

        <NavBar Drawer={this.Drawer} {...this.props} >
          Add Shop
          
        </NavBar>

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
