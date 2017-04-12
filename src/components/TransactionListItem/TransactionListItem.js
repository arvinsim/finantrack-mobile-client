import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

import TransactionListItemOptions from '../TransactionListItemOptions'

class TransactionListItem extends Component {
  render() {
    const { title, subtitle, handleEditTransaction, handleDeleteTransaction } = this.props

    return (
      <View>
        <ListItem
          title={title}
          subtitle={subtitle}
        />
        <TransactionListItemOptions 
          handleEditTransaction={handleEditTransaction} 
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </View>
    )
  }
}

TransactionListItem.propTypes = {
  title: React.PropTypes.string,
  handleEditTransaction: React.PropTypes.func.isRequired,
  handleDeleteTransaction: React.PropTypes.func.isRequired
}

export default TransactionListItem