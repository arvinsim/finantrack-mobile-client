import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers'

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    app: appReducer
  })

  return createStore(rootReducer, data, middleware)
}