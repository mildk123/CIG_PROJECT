import React, { Component } from "react";

import { ScrollView, Text, View, StyleSheet } from "react-native";

// import { NavigationActions } from "react-navigation";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    console.log(route);
    
    // const navigateAction = NavigationActions.navigate({
      // routeName: route
    // });
    // this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>Section 1</Text>

            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Page1")}
              >
                Page1
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>Section 2</Text>

            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Page2")}
              >
                Page2
              </Text>

              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Page3")}
              >
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
    container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: "lightgrey"
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: "lightgrey"
  }
});
