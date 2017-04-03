import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../../components/TransactionForm'

import { updateTransaction } from '../../store/data'

class UpdateTransactionScreen extends Component {
  static navigationOptions = {
    title: 'Update Transaction'
  }

  render() {
    const { navigation: { state: { params } } } = this.props

    return (
      <TransactionForm initialValues={params} {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    buttonTitle: 'Update Transaction'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmitHandler: (values) => {
      const key = values._key
      delete values._key
      // Update transaction then go back if it successful,
      // else stay on page and display an error message
      const { navigation: { goBack } } = ownProps
      dispatch(updateTransaction(key, values, () => goBack()))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTransactionScreen)