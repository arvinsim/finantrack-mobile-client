import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { fetchFirebaseTransactions } from './store/data'

// Config
import Config from 'react-native-config'

// Store
import store from './store'

// Screens
import HomeScreen from './screens/HomeScreen'
import AddTransactionScreen from './screens/AddTransactionScreen'
import UpdateTransactionScreen from './screens/UpdateTransactionScreen'

// Initial fetch of firebase data
store.dispatch(fetchFirebaseTransactions())

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