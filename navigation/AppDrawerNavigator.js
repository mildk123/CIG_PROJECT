import React from "react";
import { ScrollView, Text } from 'react-native'

import { createDrawerNavigator } from "react-navigation";

// import MainAppNav from './MainAppNav'
import HomeStackNavigator from "../Screens/Homescreen";
import AddProduct from "../Screens/AddProduct";
import SignOut from "../components/Sign Out";

import DrawerItems from '../components/sideMenu'

export default createDrawerNavigator(
  {
    Main: HomeStackNavigator,
    AddProduct: AddProduct,
    "Sign out": SignOut
  },
  {
    // define customComponent here
    contentComponent: props => (
      <ScrollView>
        <DrawerItems {...props} />
        <Text>Your Own Footer Area After</Text>
      </ScrollView>
    )
  }
);
