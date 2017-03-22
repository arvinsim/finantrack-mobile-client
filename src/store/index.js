import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import dataReducer from './data'

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
  data: dataReducer
})

export default createStore(rootReducer, middleware)