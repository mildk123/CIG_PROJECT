import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'

export class Settings extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "Settings",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-checkbox-outline' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Text> Settings </Text>
      </View>
    )
  }
}

export default Settings