import * as firebase from 'firebase'
import {
  getTransactionsFromFirebase,
  addTransactionToFirebase,
  updateTransactionInFirebase,
  deleteTransactionInFirebase
} from '../lib/firebase'

// Constants
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION'
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION'
export const LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS'

// Actions
export const loadTransactions = (transactions) => {
  return {
    type: LOAD_TRANSACTIONS,
    payload: {
      transactions: transactions
    }
  }
}

export const fetchFirebaseTransactions = () => {
  return (dispatch) => {
    getTransactionsFromFirebase().then((transactions) => {
      dispatch(loadTransactions(transactions))
    }).catch((error) => {
      console.log("Error: " + error.code);
    })
  }
}

export const addTransaction = (values, success) => {
  return (dispatch) => {
    return addTransactionToFirebase(values).then(success).catch((error) => {
      console.log('addTransaction Error: ', error)
    })
  }
}

export const updateTransaction = (key, values, success) => {
  return (dispatch) => {
    updateTransactionInFirebase(key, values).then(success).catch((error) => {
      console.log('updateTransaction Error: ', error)
    })
  }
}

export const deleteTransaction = (key, success) => {
  return (dispatch) => {
    deleteTransactionInFirebase(key)
      .then(success)
      .then(() => {
        dispatch(fetchFirebaseTransactions())
      })
      .catch((error) => {
        console.log('deleteTransaction Error: ', error)
      })
  }
}

// Reducer
const initialState = {
  transactions: []
}

function dataReducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_TRANSACTIONS:
    return Object.assign({}, state, {
      transactions: action.payload.transactions
    })
  default:
    return state
  }
}

export default dataReducer