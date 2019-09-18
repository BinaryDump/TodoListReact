// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore , applyMiddleware} from 'redux';

import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'
import reducers from './reducers/rootReducer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
</Provider>, document.getElementById('root'));

