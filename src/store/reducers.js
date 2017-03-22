import { fetchTransactions } from '../lib/api'

// Constants
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION'
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION'
export const LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS'

// Actions
export const loadTransactions = () => {
  return (dispatch) => {
    return dispatch({
      type: LOAD_TRANSACTIONS,
      payload: {
        transactions: fetchTransactions()
      }
    })
  }
}

// Reducer
const initialState = {
  transactions: []
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRANSACTIONS:
      return Object.assign({}, state, {
        transactions: action.payload.transactions  
      })
    default:
      return state
  }
}

export default appReducer