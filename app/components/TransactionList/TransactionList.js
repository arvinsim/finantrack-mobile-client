import styles from './styles.js'

import React, { Component } from 'react'
import {
    View,
    Text,
    ListView,
} from 'react-native'
import { 
    List,
    ListItem,
    SearchBar, 
} from 'react-native-elements'
import TransactionListItem from '../TransactionListItem'


class TransactionList extends Component {
    render() {
        const { transactions, onPress } = this.props

        return (
            <View>
                <View>
                    <SearchBar placeholder='Search Transactions...' />
                </View>
                <View>
                    <List>
                    {
                        transactions.map((item, i) => (
                            <TransactionListItem
                                key={i}
                                title={item.title} 
                                subtitle={
                                    <Text>{item.description}</Text>
                                }
                                onPress={onPress}
                            />
                        ))
                    }
                    </List>
                </View>
            </View>
        )
    }
}

TransactionList.propTypes = {
    transaction: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            description: React.PropTypes.string,
            onPress: React.PropTypes.func.isRequired
        })
    )
}

export default TransactionList