import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import TransactionList from '../../components/TransactionList'
import TransactionListSearchBar from '../../components/TransactionListSearchBar'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Finantrack'
  }

  render() {
    const { transactions, 
      handleEditTransaction, handleDeleteTransaction,
      navigation: { navigate } } = this.props

    return (
      <View>
        <Button
          onPress={() => navigate('AddTransaction')}
          title="Add New Transaction"
          backgroundColor="#3748AC" 
        />
        <View>
          <TransactionListSearchBar 
            placeholder='Search Transactions...' 
          />
        </View>
        <TransactionList 
          handleEditTransaction={handleEditTransaction}
          handleDeleteTransaction={handleDeleteTransaction}
          transactions={transactions} 
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.data.transactions
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleEditTransaction: (item) => {
      const { navigation: { navigate }} = ownProps
      
      navigate('UpdateTransaction', {
        _key: item._key,
        title: item.title,
        description: item.description,
        inflow: item.inflow,
        outflow: item.outflow
      })
    },
    handleDeleteTransaction: (item) => {
      console.log('handleDeleteTransaction')
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
