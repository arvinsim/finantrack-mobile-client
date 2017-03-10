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

import HomeScreen from './app/screens/HomeScreen';

const mockTransactionData = require('./MOCK_TRANSACTION_DATA.json');

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('finantrack_mobile_client', () => App);
