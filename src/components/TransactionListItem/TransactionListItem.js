import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

import TransactionListItemOptions from '../TransactionListItemOptions'

class TransactionListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    }
  }

  _toggleShowOptions () {
    console.log(this.state)
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

  render() {
    const { title, subtitle, handleEditTransaction, handleDeleteTransaction } = this.props

    return (
      <View>
        <ListItem
          title={title}
          subtitle={subtitle}
          onPress={this._toggleShowOptions.bind(this)}          
        />
        { this.state.showOptions && 
        <TransactionListItemOptions 
          handleEditTransaction={handleEditTransaction} 
          handleDeleteTransaction={handleDeleteTransaction}
        />
        }
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