import React, { Component } from "react";

import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Input, Button } from "react-native-elements";

export class SignUp extends Component {
  static navigationOptions = {
    title: "Create Account",
    headerStyle: {
      backgroundColor: "#E79E2F"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  _onPress = async () => {
    await AsyncStorage.setItem("userToken", "signedUp");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputDiv}>
          <Input
            labelStyle={{
              margin: 5,
              fontSize: 22,
                fontWeight: "300",
              color: "#E79E2F",
              fontStyle: "italic"
            }}
            label="First Name"
            placeholder="Abdullah"
            leftIcon={<Icon size={20} name="user" />}
          />
          <Input
            labelStyle={{
              margin: 5,
              fontSize: 22,
              fontWeight: "300",
              color: "#E79E2F",
              fontStyle: "italic"
            }}
            label="Last Name"
            placeholder="Khan"
            leftIcon={<Icon size={20} name="user" />}
          />
          <Input
            label="Email"
            labelStyle={{
              margin: 5,
              fontSize: 22,
              fontWeight: "300",
              color: "#E79E2F",
              fontStyle: "italic"
            }}
            placeholder="abec@domain.com"
            leftIcon={<Icon size={20} name="mail" />}
          />
          <Input
            labelStyle={{
              margin: 5,
              fontSize: 22,
              fontWeight: "300",
              color: "#E79E2F",
              fontStyle: "italic"
            }}
            label="Password"
            placeholder="********"
            leftIcon={<Icon size={20} name="lock" />}
          />
        </View>

        <View style={styles.btnDiv}>
          <Button
            title="Done"
            iconRight
            onPress={() => this._onPress()}
            icon={<Icon name="chevron-right" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#E79E2F",
              width: 150,
              height: 55,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
          />
        </View>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  inputDiv: {
    marginTop: 18,
    flexDirection: "column",
    alignItems: "center"
  },
  btnDiv: {
    alignItems: "flex-end",
    margin: 25
  }
});
