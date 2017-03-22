import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import * as firebase from 'firebase'

import { firebaseInitialize, firebaseLogin } from '../../lib/firebase'
import TransactionList from '../../components/TransactionList'
import { loadTransactions } from '../../store/data'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Finantrack'
    }

    componentDidMount() {
        // Firebase
        firebaseInitialize()
        const transactionsRef = firebase.app().database().ref('transactions')
        this.listenForItems(transactionsRef)
    }

    listenForItems(transactionsRef) {
        transactionsRef.on('value', (snap) => {
            console.group('SNAP')
            console.log(snap)
            console.groupEnd()
            // // get children as an array
            // var items = [];
            // snap.forEach((child) => {
            //     items.push({
            //     title: child.val().title,
            //     _key: child.key
            //     });
            // });

            // TODO: Dispatch
            // this.setState({
            //     dataSource: this.state.dataSource.cloneWithRows(items)
            // });
        }, (error) => {
            console.log("Error: " + error.code);
        });
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
