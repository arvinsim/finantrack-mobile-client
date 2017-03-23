import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../../components/TransactionForm'

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
      handleSubmit: () => {
        console.log(this)  
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionScreen)