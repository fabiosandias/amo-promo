import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk';

import App from './App';

import reducers from './store/destinations/combine'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,  
    composeEnhancer(applyMiddleware(promise)));

ReactDOM.render(    
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
