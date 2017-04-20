import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View,
  Text 
} from 'react-native'
import { Button, } from 'react-native-elements'

import TransactionListContainer from '../../containers/TransactionListContainer'
import TransactionListSearchBar from '../../components/TransactionListSearchBar'

import colors from '../../config/colors'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Finantrack'
  }

  render() {
    const { transactions, navigation: { navigate } } = this.props

    return (
      <View>
        <Button
          onPress={() => navigate('AddTransaction')}
          title="Add New Transaction"
          backgroundColor={colors.primary} 
        />
        <View>
          <TransactionListSearchBar 
            placeholder='Search Transactions...' 
          />
        </View>
        <TransactionListContainer />
      </View>
    )
  }
}

export default HomeScreen