import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
