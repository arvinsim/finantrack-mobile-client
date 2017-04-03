import * as firebase from 'firebase'
import { addTransactionToFirebase, firebaseInitialize } from '../lib/firebase'

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
    firebaseInitialize()
    const transactionsRef = firebase.app().database().ref('transactions')
    transactionsRef.once('value', (snap) => {
      let transactions = []
      snap.forEach((transaction) => {
        const { title, category, description, inflow, outflow } = transaction.val()

        transactions.push({
          title: title,
          category: category,
          description: description,
          inflow: inflow,
          outflow: outflow,
          _key: transaction.key
        })
      })

      dispatch(loadTransactions(transactions))
    }, (error) => {
      console.log("Error: " + error.code);
    });
  }
}

export const addTransaction = (values, successCallback) => {
  return (dispatch) => {
    addTransactionToFirebase(values).then(() => {
      successCallback()
    }).catch((error) => {
      console.log('addTransaction Error: ', error)
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