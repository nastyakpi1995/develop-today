import { put, call, takeEvery } from 'redux-saga/effects';
import FETCH_TYPES from '../types';

import { postsPost, userList } from '../../api/index';

function* getPostSaga(data) {
  try {
    yield call(() => postsPost(data.data));
    const users = yield call(() => userList());

    yield put({
      type: FETCH_TYPES.POST_SUCCESS,
      data: users,
    });
  } catch (e) {
    yield put({type: FETCH_TYPES.POST_FAIL, data: e.errors});
  }
}

export default function* postRequest() {
  yield takeEvery(FETCH_TYPES.POST_REQUEST, getPostSaga);
}
