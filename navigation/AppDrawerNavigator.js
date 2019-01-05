import React from "react";
import { createDrawerNavigator } from "react-navigation";

// import MainAppNav from './MainAppNav'
import HomeStackNavigator from '../Screens/Homescreen'
import AddProduct from '../Screens/AddProduct'
import SignOut from "../components/Sign Out";

export default createDrawerNavigator({
  Main : HomeStackNavigator,
  AddProduct : AddProduct,
  'Sign out' : SignOut
});


