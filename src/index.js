import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import hueReducer from './reducers/hue-reducer'
import saturationReducer from './reducers/saturation-reducer'
import lightnessReducer from './reducers/lightness-reducer'

const allReducers = combineReducers({
  hue: hueReducer,
  saturation: saturationReducer,
  lightness: lightnessReducer
})

const store = createStore(
  allReducers,
  {
    hue: 150,
    saturation: 68,
    lightness: 48
  },
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
