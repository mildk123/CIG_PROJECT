import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'

export class MyProfile extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "My Profile",
        drawerIcon: ({ tintColor }) => (
         <Icon name='md-person' fontSize={24} style={{color: tintColor}} />
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

export default MyProfile