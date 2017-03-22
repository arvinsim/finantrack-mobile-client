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