import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'

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
        <Text> My Addresses </Text>
      </View>
    )
  }
}

export default MyAddresses