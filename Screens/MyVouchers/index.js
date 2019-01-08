import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'

export class MyVouchers extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "My Vouchers",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-gift' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Text> MyVouchers </Text>
      </View>
    )
  }
}

export default MyVouchers