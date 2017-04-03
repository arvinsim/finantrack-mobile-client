import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import TransactionList from '../../components/TransactionList'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Finantrack'
  }

  render() {
    const { transactions, onPressHandler, navigation: { navigate } } = this.props

    return (
      <View>
        <Button
          onPress={() => navigate('AddTransaction')}
          title="Add New Transaction"
          backgroundColor="#3748AC" />
        <TransactionList onPress={onPressHandler.bind(this, navigate)}
          transactions={transactions} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.data.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressHandler: (navigate, item) => {
      navigate('UpdateTransaction', {
        title: item.title,
        description: item.description,
        inflow: item.inflow,
        outflow: item.outflow
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
