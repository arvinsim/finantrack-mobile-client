import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

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

// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
const store = createStore(
  rootReducer, 
  undefined,
  compose(
    middleware,
    autoRehydrate()
  )
)

// begin periodically persisting the store
persistStore(store, {storage: AsyncStorage})

export default store