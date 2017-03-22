import styles from './styles.js'

import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'

class TransactionListItem extends Component {
    render() {
        const { title, subtitle, onPress } = this.props

        return (
            <ListItem
                title={title} 
                subtitle={subtitle}
                onPress={onPress}
            />
        )
    }
}

TransactionListItem.propTypes = {
    title: React.PropTypes.string,
    onPress: React.PropTypes.func
}

export default TransactionListItem