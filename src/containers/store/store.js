import { createStore,applyMiddleware } from "redux";
import { combineReducers } from 'redux'
import reducers from '../store/reducers'
import createSagaMiddleware from 'redux-saga'
import {connectRouter} from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension'

import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

import rootSaga from './sagas'

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware()

const combine = combineReducers({
    ...reducers,
    router: connectRouter(history)
})

const store = createStore(combine,composeWithDevTools(applyMiddleware(sagaMiddleware ,routerMiddleware(history))));

const configStore = {
        ...store,
        runSaga: sagaMiddleware.run(rootSaga),
}

export default configStore;