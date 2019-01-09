import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'
import Header from "../../Helper/Header";

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
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"My Profile"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />
        <Text> MyOrders </Text>
      </View>
    )
  }
}

export default MyProfile