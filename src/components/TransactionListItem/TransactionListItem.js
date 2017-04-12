import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

import TransactionListItemOptions from '../TransactionListItemOptions'

class TransactionListItem extends Component {
  render() {
    const { title, subtitle, handleEdit } = this.props

    return (
      <View>
        <ListItem
          title={title}
          subtitle={subtitle}
        />
        <TransactionListItemOptions handleEdit={handleEdit} />
      </View>
    )
  }
}

TransactionListItem.propTypes = {
  title: React.PropTypes.string,
  handleEdit: React.PropTypes.func.isRequired
}

export default TransactionListItem