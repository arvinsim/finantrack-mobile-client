import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import TransactionList from '../../components/TransactionList'
import TransactionListSearchBar from '../../components/TransactionListSearchBar'

import { deleteTransaction } from '../../store/data'

import colors from '../../config/colors'

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
          backgroundColor={colors.primary} 
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
        dispatch(deleteTransaction(item._key))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
