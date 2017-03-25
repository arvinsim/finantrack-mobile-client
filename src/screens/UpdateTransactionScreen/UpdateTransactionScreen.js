import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../../components/TransactionForm'

class UpdateTransactionScreen extends Component {
    static navigationOptions = {
        title: 'Update Transaction'
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
      buttonTitle: 'Update Transaction'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleSubmit: (values) => {
          console.log(values)
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTransactionScreen)