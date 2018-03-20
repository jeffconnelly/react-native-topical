/*
 * @providesModule %store
 */

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AsyncStorage } from 'react-native'
import { newsReducer } from './reducers'

const isDebuggingInChrome = global.__DEV__ && !!window.navigator.userAgent
require('react-devtools-core').connectToDevTools()

export const store = createStore(
    newsReducer,
    undefined,
    composeWithDevTools(
        applyMiddleware(thunk),
        autoRehydrate()
    )
)

export function configureStore (onComplete = () => null) {
  // AsyncStorage is the one used in data persistence
  persistStore(store, { storage: AsyncStorage }, onComplete)
  if (isDebuggingInChrome) {
    window.store = store
  }
  return store
}

