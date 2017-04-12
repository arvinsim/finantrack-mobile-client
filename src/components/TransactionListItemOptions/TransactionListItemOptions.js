import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

class TransactionListItemOptions extends Component {
  render() {
    const { handleEditTransaction, handleDeleteTransaction } = this.props
    return (
      <View>
        <View style={styles.edit}>
          <Button title='Edit' onPress={handleEditTransaction} />
        </View>
        <View style={styles.delete}>
          <Button title='Delete' onPress={handleDeleteTransaction} />
        </View>
      </View>
    )
  }
}

export default TransactionListItemOptions