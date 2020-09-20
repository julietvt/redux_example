import { put } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
export function* getUsersSaga() {
  try {
    const users = yield fetch('../users.json').then((response) =>
      response.json()
    );
    yield put({
      type: ACTION_TYPES.GET_USERS_SUCCESS,
      users,
    });
  } catch (e) {
    yield put({
      type: ACTION_TYPES.GET_USERS_ERROR,
      error: e,
    });
  }
}
