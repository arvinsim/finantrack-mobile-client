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
import Config from 'react-native-config';

// TODO: Load mock data
//const mockTransactionData = require('./MOCK_TRANSACTION_DATA.json');

// Firebase code
import * as firebase from 'firebase';
import { firebaseLogin } from './app/lib/firebase';

firebase.initializeApp({
    apiKey: Config.FIREBASE_API_KEY,
    authDomain: Config.FIREBASE_AUTH_DOMAIN,
    databaseURL: Config.FIREBASE_DATABASE_URL,
    storageBucket: Config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID
});

// Screens
import HomeScreen from './app/screens/HomeScreen';
import AddTransactionScreen from './app/screens/AddTransactionScreen';
import UpdateTransactionScreen from './app/screens/UpdateTransactionScreen';

export const App = StackNavigator({
  Home: { screen: HomeScreen },
  AddTransaction: { screen: AddTransactionScreen },
  UpdateTransaction: { screen: UpdateTransactionScreen },
});

AppRegistry.registerComponent('finantrack_mobile_client', () => App);
