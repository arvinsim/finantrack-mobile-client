import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../../components/TransactionForm'

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

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitHandler: (values) => {
      console.log(values)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTransactionScreen)