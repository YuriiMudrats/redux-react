import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import PropTypes from 'prop-types'
const store= createStore((state={})=>state,
applyMiddleware(thunk)
);


render(<Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>     
, document.getElementById('root'));

