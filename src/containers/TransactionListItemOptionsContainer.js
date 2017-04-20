import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import TransactionListItemOptions from '../components/TransactionListItemOptions'

import { deleteTransaction } from '../store/data'

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  const { nav: { navigate }, item } = ownProps
  return {
    handleEditTransaction: () => {
      navigate({
        routeName: 'UpdateTransaction',
        params: {
          _key: item._key,
          title: item.title,
          description: item.description,
          inflow: item.inflow,
          outflow: item.outflow
        }
      })
    },
    handleDeleteTransaction: () => {
      dispatch(deleteTransaction(item._key))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionListItemOptions)
