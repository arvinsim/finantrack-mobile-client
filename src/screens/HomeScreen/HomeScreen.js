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
        const { transactions, navigation: { navigate } } = this.props

        return (
            <View>
                <Button 
                    onPress={() => navigate('AddTransaction')}
                    title="Add New Transaction" 
                    backgroundColor="#3748AC" />
                <TransactionList onPress={() => navigate('UpdateTransaction')} 
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
