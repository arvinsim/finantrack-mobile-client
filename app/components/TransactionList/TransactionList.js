import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
} from 'react-native';
import { 
    List,
    ListItem,
    SearchBar, 
} from 'react-native-elements';

import styles from './styles.js'

class TransactionList extends Component {
    render() {
        const transactions = this.props.transactions;

        return (
            <View>
                <View>
                    <SearchBar placeholder='Search Transactions...' />
                </View>
                <View>
                    <List>
                    {
                        transactions.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title} 
                                subtitle={
                                    <Text>{item.description}</Text>
                                }
                            />
                        ))
                    }
                    </List>
                </View>
            </View>
        )
    }
}

TransactionList.defaultProps = {
    transactions: [
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
}

export default TransactionList;