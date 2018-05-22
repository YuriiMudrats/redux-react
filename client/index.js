import React from 'react';
import { compose } from 'redux' 
import {render} from 'react-dom';
import App from './App';
import {Router, Route,BrowserRouter, browserHistory} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './src/store/redusers'
import {createStore, applyMiddleware} from 'redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
const history = createHistory()
const middleware = routerMiddleware(history)
const store= createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk.withExtraArgument(axios))))
import {initialize} from './src/store/actions'

store.dispatch(initialize())

render(<Provider store={store}>
            <ConnectedRouter history={history}>
              <App/>
              </ConnectedRouter>
      </Provider>     
, document.getElementById('root'));

