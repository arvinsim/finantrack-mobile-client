import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { fetchFirebaseTransactions } from './store/data'

// Configuration variables
import { AppRouteConfigs } from './config/navigation'
import Config from 'react-native-config'

// Store
import store from './store'

// Initial fetch of firebase data
store.dispatch(fetchFirebaseTransactions())

const AppNavigator = StackNavigator(AppRouteConfigs)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>

    )
  }
}

export default App