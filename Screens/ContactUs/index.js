import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Header from "../../Helper/Header";

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
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"Contact Us"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />
        <Text> Contact Us </Text>
      </View>
    )
  }
}

export default ContactUs