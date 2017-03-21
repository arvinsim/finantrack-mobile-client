/**
 * Finantrack Mobile App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

// Config
import Config from 'react-native-config'

// Firebase
// import { firebaseInitialize, firebaseLogin } from './app/lib/firebase'
// firebaseApp = firebaseInitialize()
// firebaseLogin(Config.FIREBASE_ACCOUNT_TEST_EMAIL, Config.FIREBASE_ACCOUNT_TEST_PASSWORD)

// Screens
import HomeScreen from './app/screens/HomeScreen'
import AddTransactionScreen from './app/screens/AddTransactionScreen'
import UpdateTransactionScreen from './app/screens/UpdateTransactionScreen'

export const App = StackNavigator({
  Home: { screen: HomeScreen },
  AddTransaction: { screen: AddTransactionScreen },
  UpdateTransaction: { screen: UpdateTransactionScreen }
})

AppRegistry.registerComponent('finantrack_mobile_client', () => App)
