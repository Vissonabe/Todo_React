import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import React, { Component } from 'react';
import { persisStore } from 'redux-persist';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './app/store/configureStore'
import App from './app/containers/App'

const store = configureStore().store
const persistor = configureStore().persistor

const TodoApp = () => (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  )

AppRegistry.registerComponent('Todo', () => TodoApp)