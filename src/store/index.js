import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import appReducer from './reducers'

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
  app: appReducer
})

export default createStore(rootReducer, middleware)