import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import TransactionListItemOptions from '../components/TransactionListItemOptions'

import { deleteTransaction } from '../store/data'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { item } = ownProps
  return {
    handleEditTransaction: () => {
      // Close the List Item Options Container
      ownProps.onButtonPress()

      dispatch(NavigationActions.navigate({
        routeName: 'UpdateTransaction',
        params: {
          _key: item._key,
          title: item.title,
          description: item.description,
          inflow: item.inflow,
          outflow: item.outflow
        }
      }))
    },
    handleDeleteTransaction: () => {
      // Close the List Item Options Container
      ownProps.onButtonPress()
      dispatch(deleteTransaction(item._key))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionListItemOptions)
