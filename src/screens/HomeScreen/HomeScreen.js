import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, Grid, Row} from 'react-native-elements'

import TransactionListContainer from '../../containers/TransactionListContainer'
import TransactionListSearchBar from '../../components/TransactionListSearchBar'

import colors from '../../config/colors'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Finantrack'
  }

  render() {
    const {transactions, navigation: {navigate}} = this.props

    return (
      <Grid>
        <Row size={8}>
          <Button
            onPress={() => navigate('AddTransaction')}
            title="Add New Transaction"
            backgroundColor={colors.primary}
          />
        </Row>
        <Row size={8}>
          <View>
            <TransactionListSearchBar
              placeholder='Search Transactions...'
            />
          </View>
        </Row>
        <Row size={84}>
          <TransactionListContainer />
        </Row>
      </Grid>
    )
  }
}

export default HomeScreen