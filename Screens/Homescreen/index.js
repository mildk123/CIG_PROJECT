import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, View, Text } from "react-native";

import Header from "../../Helper/Header";

import { Content, Card, CardItem, Body } from "native-base";

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
        <Content>
          <View>
            <Card>
              <CardItem footer bordered>
                <Body>
                  <Text>//Your text here</Text>
                </Body>
              </CardItem>
            </Card>
          </View>
          <View>
            <Text>123</Text>
          </View>
        </Content>
      </View>
    );
  }
}

export default (HomeStackNavigator = createStackNavigator({
  Homescreen: Homescreen
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start"
  }
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
