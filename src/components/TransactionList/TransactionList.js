import styles from './styles.js'

import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import {
  List,
  ListItem
} from 'react-native-elements'

import TransactionListItem from '../TransactionListItem'

class TransactionList extends Component {
  _renderListItem (item) {
    return (
      <Text>{item.transaction}</Text>
    )
  }

  render () {
    const { transactions, handleEdit } = this.props

    return (
      <View>
        <View>
          <List>
            <ScrollView>
            {
              transactions.map((item, i) => (
                <TransactionListItem
                  key={i}
                  title={item.title}
                  subtitle={
                    <Text>{item.description}</Text>
                  }
                  handleEdit={handleEdit.bind(this, item)}
                />
              ))
            }
            </ScrollView>
          </List>
        </View>
      </View>
    )
  }
}

TransactionList.propTypes = {
  transactions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      description: React.PropTypes.string
    })
  ),
  handleEdit: React.PropTypes.func.isRequired
}

export default TransactionList