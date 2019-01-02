import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Input, Button } from "react-native-elements";

export class SignIn extends Component {
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "#E22929"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  _onPress = async () => {
    await AsyncStorage.setItem("userToken", "LoggedIn");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputDiv}>
          <Input
            label="Email"
            labelStyle={{
              margin: 5,
              fontSize: 22,
              fontWeight: '300',
              color: "#E22929",
              fontStyle: "italic"
            }}
            placeholder="abc@domain.com"
            leftIcon={<Icon size={20} name="envelope-o" />}
          />
          <Input
            labelStyle={{
              margin: 5,
              fontSize: 22,
              fontWeight: '300',
              color: "#E22929",
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
              backgroundColor: "#E22929",
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

export default SignIn;

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