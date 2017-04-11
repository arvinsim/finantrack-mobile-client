import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'

class TrasnsactionListSearchBar extends Component {
    render() {
        return (
          <View>
            <SearchBar placeholder='Search Transactions...' />
          </View>
        )
    }
}

export default TrasnsactionListSearchBar