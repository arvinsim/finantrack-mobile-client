import styles from './styles.js'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, FlatList} from 'react-native'
// import {List} from 'react-native-elements'

import TransactionListItem from '../TransactionListItem'

class TransactionList extends Component {
  _renderListView(row) {
    return (<TransactionListItem key={row.index} item={row.item}/>)
  }

  _keyExtractor(item, index) {
    return item._key
  }

  render() {
    const {transactions} = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={transactions}
          renderItem={this._renderListView}
          keyExtractor={this._keyExtractor}
        />
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
    })
  ).isRequired
}

export default TransactionList