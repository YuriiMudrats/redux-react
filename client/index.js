import React from 'react';
import { compose } from 'redux' 
import {render} from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './src/store/redusers'
import {createStore, applyMiddleware} from 'redux'
import PropTypes from 'prop-types'
import axios from 'axios'
const store= createStore(reducers, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axios))))




render(<Provider store={store}>
            <BrowserRouter >
              <App/>
          </BrowserRouter>
      </Provider>     
, document.getElementById('root'));

