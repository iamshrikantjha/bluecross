import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import GetIn from '../screens/GetIn';
import Dashboard from '../screens/Dashboard';
import Report from '../screens/Report';
import Click from '../screens/Click';
import Doctors from '../screens/Doctors';
import MedicalShops from '../screens/MedicalShops';
import exampleCamera from '../screens/exampleCamera';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    GetIn: {
      screen: GetIn
    },
   
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    },
    Click: {
      screen: Click
    },
    Report: {
      screen: Report
    },
    Doctors: {
      screen: Doctors
    },
    
    MedicalShops: {
      screen: MedicalShops
    },
    // exampleCamera: {
    //   screen: exampleCamera
    // },
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);