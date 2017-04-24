import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import TransactionForm from '../components/TransactionForm'
import { updateTransaction } from '../store/data'

class TransactionFormContainer extends Component {
  render() {
    const { params } = this.props
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
      const { goBack } = NavigationActions
      dispatch(updateTransaction(key, values, () => goBack()))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionFormContainer)