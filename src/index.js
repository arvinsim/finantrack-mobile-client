import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { fetchFirebaseTransactions } from './store/data'

// Store
import store from './store'

// App with Navigation State
import AppWithNavigationState from './containers/AppWithNavigationState'

// Initial fetch of firebase data
store.dispatch(fetchFirebaseTransactions())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>

    )
  }
}

export default App