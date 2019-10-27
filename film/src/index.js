import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//setup Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  rootReducer  from './redux/reducers/rootReducer';
//setup Bootstrap, jquery, pooper
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery/dist/jquery.min.js";

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));