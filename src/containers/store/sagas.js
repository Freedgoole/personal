import { fork } from 'redux-saga/effects'

import Login from "../Login/Login.saga";
import Routes from '../routes/Routes.saga'
import Main from '../Main/Main.saga'
import Upsert from '../Upsert/Upsert.saga'

export default function * sadaMiddleware() {
    yield fork(Routes)
    yield fork(Login)
    yield fork(Main)
    yield fork(Upsert)
}