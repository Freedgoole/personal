import { takeLatest, call, put } from 'redux-saga/effects'
import { message } from 'antd';
import { redirect } from '../Main/Main.saga'

import firebase from '../../Firebase/Firebase.conf'

import { UPSERT, LOADER, MAIN, FIREBASE } from '../store/constans'

let db = firebase.firestore();

function * createNewItem({payload}) { 
    yield put({ type: LOADER.STORE.STATUS, payload: true});
    try {
        yield db.collection(FIREBASE.COLLECTION_NAME).add(payload)
        message.success('Create!');
        yield call(redirect, MAIN.ROUTES.MAIN)
    } catch(e) {
        message.warning('This is a warning message');
    }
    yield put({ type: LOADER.STORE.STATUS, payload: false});
 }

 function * updateItem({payload}) {
     const { selectedItem, values } = payload;
     yield put({ type: LOADER.STORE.STATUS, payload: true});
     try {
        yield db.collection(FIREBASE.COLLECTION_NAME).doc(selectedItem).update(values)
        message.success('Edit!');
        yield call(redirect, MAIN.ROUTES.MAIN)
     } catch(e) {
        message.warning('This is a warning message');
     }
     yield put({ type: LOADER.STORE.STATUS, payload: false});
 }

function * cancelForm() { 
    yield call(redirect,MAIN.ROUTES.MAIN)
 }

export default function * () {
    yield takeLatest(UPSERT.SAGA.CANCEL_FORM, cancelForm)
    yield takeLatest(UPSERT.SAGA.CREATE_NEW_ITEM_DATA, createNewItem)
    yield takeLatest(UPSERT.SAGA.UPDATE_ITEM_DATA,updateItem)
}
