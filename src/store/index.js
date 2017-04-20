import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import navReducer from './nav'
import dataReducer from './data'

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
  nav: navReducer,
  data: dataReducer,
  form: formReducer
})

export default createStore(rootReducer, middleware)