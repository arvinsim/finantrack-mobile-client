import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

class TransactionListItemOptions extends Component {
  render() {
    const { handleEditTransaction, handleDeleteTransaction } = this.props
    return (
      <View>
        <Button buttonStyle={styles.edit} title='Edit' onPress={handleEditTransaction} />
        <Button buttonStyle={styles.delete} title='Delete' onPress={handleDeleteTransaction} />
      </View>
    )
  }
}

export default TransactionListItemOptions