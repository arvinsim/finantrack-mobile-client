import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, Grid, Row, Col} from 'react-native-elements'

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
        <Row size={10}>
          <Col size={60}>
            <Button
              onPress={() => navigate('AddTransaction')}
              title="Add New Transaction"
              backgroundColor={colors.primary}
            />
          </Col>
          <Col size={40}>
            <TransactionListSearchBar
              placeholder='Search Transactions...'
            />
          </Col>
        </Row>
        <Row size={90}>
          <TransactionListContainer />
        </Row>
      </Grid>
    )
  }
}

export default HomeScreen