import { takeEvery, put, delay } from 'redux-saga/effects'
import { SHOWMODAL_ASYNC_SAGA } from '../const/modal.const'
import { show } from '../actions/modal.actions'

function* showModal_async_fn() {
  yield delay(2000)
  yield put(show())
}

export default function* modalSaga() {
  yield takeEvery(SHOWMODAL_ASYNC_SAGA, showModal_async_fn)
}
