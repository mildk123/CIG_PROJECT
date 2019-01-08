import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'

export class ContactUs extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-mail' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Text> Contact Us </Text>
      </View>
    )
  }
}

export default ContactUs