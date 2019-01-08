import React from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  Image
} from "react-native";

import { createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeStackNavigator from "../Screens/Homescreen";
import AddProduct from "../Screens/AddProduct";
import SignOut from "../components/Sign Out";

import MyOrders from "../Screens/MyOrders";
import MyProfile from "../Screens/AddProduct";
import MyAddresses from "../Screens/AddProduct";
import MyVouchers from "../Screens/AddProduct";
import ContactUs from "../Screens/AddProduct";
import Settings from "../Screens/AddProduct";


const { width } = Dimensions.get("window");

export default createDrawerNavigator(
  {
    HomeStackNavigator,
    MyOrders,
    MyProfile,
    MyAddresses,
    MyVouchers,
    ContactUs,
    Settings,
    AddProduct,
    SignOut
  },
  {
    // drawerWidth: width,
    contentComponent: props => (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 180,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            alt="Header"
            style={{ height: 150, width: 150, padding: 25 }}
          />
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    ),
    contentOptions: {
      activeTintColor: "red"
    }
  }
);
