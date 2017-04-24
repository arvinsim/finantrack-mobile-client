import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionFormContainer from '../../containers/TransactionFormContainer'

class UpdateTransactionScreen extends Component {
  static navigationOptions = {
    title: 'Update Transaction'
  }

  render() {
    const { navigation: { state: { params } } } = this.props
    return (
      <TransactionFormContainer initialValues={params} />
    )
  }
}

export default UpdateTransactionScreen