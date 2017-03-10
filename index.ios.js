/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// TODO: Load mock data
const mockTransactionData = require('./MOCK_TRANSACTION_DATA.json');

import HomeScreen from './app/screens/HomeScreen';
import AddTransactionScreen from './app/screens/AddTransactionScreen';
import UpdateTransactionScreen from './app/screens/UpdateTransactionScreen';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  AddTransaction: { screen: AddTransactionScreen },
  UpdateTransaction: { screen: UpdateTransactionScreen },
});

AppRegistry.registerComponent('finantrack_mobile_client', () => App);
