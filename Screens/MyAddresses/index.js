import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'

import Header from "../../Helper/Header";

export class MyAddresses extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "My Addresses",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-pin' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"My Addresses"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />
        <Text> My Addresses </Text>
      </View>
    )
  }
}

export default MyAddresses