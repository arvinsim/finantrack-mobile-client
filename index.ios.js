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

import TransactionList from './app/components/TransactionList';

const App = StackNavigator({
  Home: { screen: TransactionList }
});

AppRegistry.registerComponent('finantrack_mobile_client', () => App);
