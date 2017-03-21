import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import TransactionList from '../../components/TransactionList'

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

    render() {
        const { navigate } = this.props.navigation
        // TODO: Example Data
        const transactions = [
            {
                title: 'Groceries',
                description: 'Eggs, Milk, Cream, Vegetables',
                category: 'Health and Fitness',
                outflow: '300php',
                inflow: '0php',
            },
            {
                title: 'Salary',
                description: 'Foobar Inc.',
                category: 'Money and Finances',
                outflow: '0php',
                inflow: '80000php',
            }
        ]

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

export default HomeScreen