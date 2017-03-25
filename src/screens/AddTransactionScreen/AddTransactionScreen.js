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

const mapDispatchToProps = (dispatch) => {
  return {
      handleSubmitHandler: (values) => {
        dispatch(addTransaction(values))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionScreen)