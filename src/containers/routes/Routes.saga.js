import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { ROUTES } from './Routes.const'

function * navigate ({ payload: url }) {
    yield put(push(url))
    console.log('navigate '+ url )
}

export default function * () {
    yield takeLatest(ROUTES.NAVIGATE_SAGA, navigate)
}
