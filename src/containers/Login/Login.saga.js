import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import firebase from '../../Firebase/Firebase.conf';

import { LOGIN, MAIN, LOADER } from '../store/constans'
import { message, notification } from 'antd';

function * authorization ({ payload }) {
    const { name, password  } = payload;
    yield put({ type: LOADER.STORE.STATUS, payload: true});
    try {
        let data = yield firebase.auth().signInWithEmailAndPassword(name,password)
        yield put({ type: LOGIN.STORE.LOGIN_STATUS, payload: true});
        yield put({ type: LOGIN.STORE.LOGIN_DATA, payload: data});
        notification.open({message: 'Welcome!',description: data.user.email,duration: 0});
        yield put(push(MAIN.ROUTES.MAIN));
    } catch(e) {
        const {message : messageTxt} = e;
        yield put({ type: LOGIN.STORE.LOGIN_STATUS, payload: false});
        yield put({ type: LOGIN.STORE.LOGIN_DATA, payload: e});
        message.info(messageTxt)
    }  
    yield put({ type: LOADER.STORE.STATUS, payload: false});
}

export default function * () {
    yield takeLatest(LOGIN.SAGA.LOGIN_AUTHORIZATION, authorization)
}
