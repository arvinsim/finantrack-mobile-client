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

import TransactionList from './app/components/TransactionList';

export default class finantrack_mobile_client extends Component {
  render() {
    return (
      <TransactionList />
    )
  }
}

AppRegistry.registerComponent('finantrack_mobile_client', () => finantrack_mobile_client);
