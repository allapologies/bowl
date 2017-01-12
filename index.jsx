import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import { App } from './containers'
import withCustomId from './middlewares/with-custom-id'
import rollHandler from './middlewares/roll-handler'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, {}, composeEnhancers(
  applyMiddleware(withCustomId, rollHandler)
))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
  , document.querySelector('.app')
)
