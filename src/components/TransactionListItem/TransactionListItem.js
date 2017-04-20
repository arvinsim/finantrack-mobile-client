import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

import TransactionListItemOptionsContainer from '../../containers/TransactionListItemOptionsContainer'

class TransactionListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    }
  }

  _toggleShowOptions () {
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
    const { item } = this.props
    const { title, description } = item

    return (
      <View>
        <ListItem
          title={title}
          subtitle={description}
          onPress={this._toggleShowOptions.bind(this)}          
        />
        { this.state.showOptions && 
        <TransactionListItemOptionsContainer item={item} />
        }
      </View>
    )
  }
}

TransactionListItem.propTypes = {
  title: React.PropTypes.string
}

export default TransactionListItem