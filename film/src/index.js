import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//setup Redux & thunk
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import  rootReducer  from './redux/reducers/rootReducer';
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
//setup Bootstrap, jquery, pooper
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery/dist/jquery.min.js";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));