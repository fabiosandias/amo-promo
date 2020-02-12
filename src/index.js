import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import App from './App';

import reducers from './store/destinations/combine'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/dist/css/react-widgets.css';

import dateFnsLocalizer, { defaultFormats } from 'react-widgets-date-fns'

import pt from 'date-fns/locale/pt'


import './index.css';

// Moment.locale(pt)

momentLocalizer()


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,  
    composeEnhancer(applyMiddleware(thunk, multi, promise)));

ReactDOM.render(    
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
