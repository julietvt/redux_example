import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actionTypes';
import { getUsersSaga } from './usersSagas';
import { loginUserSaga } from './loginUserSaga';

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPE.GET_USERS_REQUEST, getUsersSaga);
  yield takeLatest(ACTION_TYPE.LOGIN_USER_REQUEST, loginUserSaga);
}
