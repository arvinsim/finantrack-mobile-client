import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

// Config
import Config from 'react-native-config'

// Store
import store from './store'

// Firebase
// import { firebaseInitialize, firebaseLogin } from './app/lib/firebase'
// firebaseApp = firebaseInitialize()
// firebaseLogin(Config.FIREBASE_ACCOUNT_TEST_EMAIL, Config.FIREBASE_ACCOUNT_TEST_PASSWORD)

// Screens
import HomeScreen from './screens/HomeScreen'
import AddTransactionScreen from './screens/AddTransactionScreen'
import UpdateTransactionScreen from './screens/UpdateTransactionScreen'

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  AddTransaction: { screen: AddTransactionScreen },
  UpdateTransaction: { screen: UpdateTransactionScreen }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <AppNavigator />
      </Provider>
    );
  }
}

export default App