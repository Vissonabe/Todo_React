import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorag
// Thunk middleware allows actions to be chained and waited on by returning
// a function from that action
// https://github.com/gaearon/redux-thunk
import thunk from 'redux-thunk'

// Logs all actions going through redux into console
// https://github.com/evgenyrodionov/redux-logger
import logger from 'redux-logger'
import { reducer } from '../redux/todoRedux'

// http://redux.js.org/docs/advanced/Middleware.html
const middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
  // Turns on Reactotron debugging tool
  //require('../config/ReactotronConfig')
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// Can use a preloaded initialState if available, in this case we don't
export default (initialState) => {
  // http://redux.js.org/docs/api/createStore.html
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleware)
  )
  let persistor = persistStore(store)
  return { store, persistor }
}
