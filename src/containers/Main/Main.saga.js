import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import 'firebase/firestore';
import firebase from '../../Firebase/Firebase.conf'
import { message } from 'antd';

import { FIREBASE, MAIN, UPSERT, LOADER } from '../store/constans'

let db = firebase.firestore();

function * getData () {
    yield put({type: LOADER.STORE.STATUS, payload: true});
    let data = {}
    try {
        const querySnapshot = yield db.collection(FIREBASE.COLLECTION_NAME).get()
        querySnapshot.forEach((doc) => data[doc.id] = doc.data())
        yield put({ type: MAIN.STORE.MAIN_DATA, payload: data});
    } catch(e){
        console.log(e)
    }
    yield put({ type: LOADER.STORE.STATUS, payload: false});
}

function * editItem({payload : id}) { 
    let redirectTo = `${UPSERT.ROUTES.UPSERT}/${id}`
    yield put({ type: MAIN.STORE.SELECTED_ITEM, payload: id});
    yield call(redirect, redirectTo)
 }

 function * createItem({payload}) {
    let redirectTo = `${UPSERT.ROUTES.UPSERT}`
    yield call(redirect, redirectTo)
 }
function * deleteItem({payload: id}) { 
    yield put({ type: LOADER.STORE.STATUS, payload: true});
    try{
        yield db.collection(FIREBASE.COLLECTION_NAME).doc(id).delete()
        let successfullyTxt = 'Successfully deleted ' + id
        yield call(displayMsg,'info', successfullyTxt);
        yield put({ type: MAIN.STORE.SELECTED_ITEM, payload: null});
        yield call(getData)
    }catch(e) {
        console.log(e)
    }
    yield put({ type: LOADER.STORE.STATUS, payload: false});
}

// TODO: to Router.saga
export function * redirect(redirectTo) { 
    yield put(push(redirectTo)); 
 }
 function displayMsg(type, text, delay = 0) {
    message[type](text);
 }

export default function * () {
    yield takeLatest(MAIN.SAGA.GET_DATA, getData)
    yield takeLatest(MAIN.SAGA.EDIT_ITEM_DATA, editItem)
    yield takeLatest(MAIN.SAGA.CREATE_NEW_ITEM, createItem)
    yield takeLatest(MAIN.SAGA.DELETE_ITEM, deleteItem)
}
