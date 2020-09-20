import { put } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';

export function* loginUserSaga() {
  try {
    const { users } = yield fetch('http://localhost:3000/api/sign_in', {
      method: 'POST',
      body: JSON.stringify(action.values),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json());
    yield put({
      type: ACTION_TYPES.LOGIN_USER_SUCCESS,
      users,
    });
  } catch (e) {
    yield put({
      type: ACTION_TYPES.LOGIN_USERS_ERROR,
      error: e,
    });
  }
}