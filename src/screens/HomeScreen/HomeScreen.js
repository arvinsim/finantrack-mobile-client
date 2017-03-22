import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

import TransactionList from '../../components/TransactionList'

import { loadTransactions } from '../../store/reducers'

// TODO: For testing purposes
// import Config from 'react-native-config'
// import { firebaseInitialize, firebaseLogin } from '../../lib/firebase'
// firebaseApp = firebaseInitialize()
// firebaseLogin(Config.FIREBASE_ACCOUNT_TEST_EMAIL, Config.FIREBASE_ACCOUNT_TEST_PASSWORD)

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Finantrack'
    }

    /*
    constructor(props) {
        super(props);
        this.itemsRef = this.getRef().child('items');
    }

    getRef() {
        return firebaseApp.database().ref();
    }

    componentDidMount() {
        this.listenForItems(this.itemsRef);
    }

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
            // get children as an array
            var items = [];
            snap.forEach((child) => {
                items.push({
                title: child.val().title,
                _key: child.key
                });
            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        });
    }
    */

    componentDidMount() {
        this.props.handleComponentDidMount()
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
      transactions: state.app.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleComponentDidMount: () => {
        return dispatch(loadTransactions()) 
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
