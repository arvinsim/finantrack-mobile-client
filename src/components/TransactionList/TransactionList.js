import styles from './styles.js'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  render () {
    const { transactions } = this.props

    return (
      <View>
        <View>
          <List>
            <ScrollView>
            {
              transactions.map((item, i) => (
                <TransactionListItem
                  key={i}
                  item={item}
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
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      inflow: PropTypes.string.isRequired,
      outflow: PropTypes.string.isRequired
    }).isRequired
  )
}

export default TransactionList