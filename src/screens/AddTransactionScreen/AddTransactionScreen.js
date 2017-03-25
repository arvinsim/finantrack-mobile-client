import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../../components/TransactionForm'

import { addTransaction } from '../../store/data'

class AddTransactionScreen extends Component {
    static navigationOptions = {
        title: 'Add Transaction'
    }

    render() {
        const props = this.props

        return (
            <TransactionForm {...props} />
        )
    }
}

const mapStateToProps = (state) => {
  return {
      buttonTitle: 'Save Transaction'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      handleSubmitHandler: (values) => {
        const { navigation: { goBack } } = ownProps
        dispatch(addTransaction(values, () => goBack()))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionScreen)