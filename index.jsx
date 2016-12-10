import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import { App } from './containers'
import pointsGenerator from './middlewares/points-generator'
import rollController from './middlewares/roll-controller'
import frameController from './middlewares/frame-controller'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, {}, composeEnhancers(
  applyMiddleware(pointsGenerator, rollController, frameController)
))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
  , document.querySelector('.app')
)
