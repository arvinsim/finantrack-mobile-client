import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

class TransactionListItemOptions extends Component {
  render() {
    const { handleEdit } = this.props
    return (
      <View>
        <View style={styles.edit}>
          <Button title='Edit' onPress={handleEdit} />
        </View>
        <View style={styles.delete}>
          <Button title='Delete' />
        </View>
      </View>
    )
  }
}

export default TransactionListItemOptions