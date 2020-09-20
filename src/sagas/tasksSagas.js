import { put } from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actionTypes';

export function* getTasksSags(action) {
  yield put({
    type: ACTION_TYPE.GET_TASK_REQUEST,
  });
  try {
    const data = yield fetch();
    yield put({
      type: ACTION_TYPE.GET_TASK_SUCCESS,
      tasks: data,
    });
  } catch (e) {
    yield put({
      type: ACTION_TYPE.GET_USERS_ERROR,
      error: e,
    });
  }
}
