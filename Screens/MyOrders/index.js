import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'

export class MyOrders extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "My Orders",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-checkbox-outline' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Text> MyOrders </Text>
      </View>
    )
  }
}

export default MyOrders