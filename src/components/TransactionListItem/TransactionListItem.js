import styles from './styles.js'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import moment from 'moment'

import TransactionListItemOptionsContainer from '../../containers/TransactionListItemOptionsContainer'

class TransactionListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    }
  }

  _toggleShowOptions() {
    if (this.state.showOptions) {
      this.setState({
        showOptions: false
      })
    } else {
      this.setState({
        showOptions: true
      })
    }
  }

  renderTitle(title) {
    return <Text style={styles.title}>{title}</Text>
  }

  renderSubtitle(date, inflow, outflow) {
    const dateText = date ? <Text style={styles.date}>{moment(date).format('MM-DD-YYYY')}</Text> : undefined
    const inflowText = inflow ? <Text style={styles.inflow}>{inflow}</Text> : undefined
    const outflowText = outflow ? <Text style={styles.outflow}>{outflow}</Text> : undefined

    return (
      <View style={styles.subtitle}>
        {dateText}
        {inflowText}
        {outflowText}
      </View>
    )
  }

  render() {
    const { item } = this.props
    const { title, date, inflow, outflow } = item

    return (
      <View>
        <ListItem
          title={this.renderTitle(title)}
          subtitle={this.renderSubtitle(date, inflow, outflow)}
          onPress={this._toggleShowOptions.bind(this)}
          hideChevron
        />
        {this.state.showOptions &&
          <TransactionListItemOptionsContainer item={item} onButtonPress={this._toggleShowOptions.bind(this)} />
        }
      </View>
    )
  }
}

TransactionListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    inflow: PropTypes.string.isRequired,
    outflow: PropTypes.string.isRequired
  }).isRequired
}

export default TransactionListItem