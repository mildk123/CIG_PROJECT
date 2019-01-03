import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, View, Image } from "react-native";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../Helper/Header";



class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };

  moveTo = name => {
    this.props.navigation.navigate(name);
  };

  render() {
    return (
      <View style={styles.container}>
         <Header
            headerColor="#C00000"
            icon={"menu"}
            title={"Shop"}
            hasTabs={false}
            searchBtn={true}
            favBtn={false}
            threeDots={false}
            {...this.props}
          />

      </View>
    );
  }
}


export default HomeStackNavigator =  createStackNavigator({
  Homescreen : Homescreen,
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start"
  },
  // imgContainer: {
  //   maxHeight: "100%",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // picSize: {
  //   maxHeight: 360,
  //   maxWidth: 360
  // },
  // btnContainer: {
  //   height: 120,
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "space-between"
  // }
});
