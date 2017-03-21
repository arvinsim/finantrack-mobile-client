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

import styles from './styles.js'

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
                            <ListItem
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
    transactions: React.PropTypes.array
}

export default TransactionList