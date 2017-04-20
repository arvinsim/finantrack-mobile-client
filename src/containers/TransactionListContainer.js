import React, { Component } from 'react'
import { connect } from 'react-redux'

import TransactionList from '../components/TransactionList'

import { deleteTransaction } from '../store/data'

const mapStateToProps = (state) => {
  return {
    transactions: state.data.transactions
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList)
