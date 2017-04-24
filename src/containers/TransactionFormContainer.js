import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import TransactionForm from '../components/TransactionForm'
import { updateTransactionInFirebase } from '../lib/firebase'

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
      const { back } = NavigationActions
      updateTransactionInFirebase(key, values)
        .then(() => {
          dispatch(back())
        })
        .catch((error) => {
          console.log('updateTransaction Error: ', error)
        })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionFormContainer)