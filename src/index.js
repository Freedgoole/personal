import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import configStore from "./containers/store/store";


import Routes from './containers/routes/Routes'
import Loader from './containers/Loader/Loader'

ReactDOM.render(  
    <Provider store={configStore}>
        <Routes/>
        <Loader/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https:////bit.ly/CRA-PWA
serviceWorker.unregister();
