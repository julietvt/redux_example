import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actionTypes';
import { getUsersSaga } from './usersSagas';
import { loginUserSaga } from './loginUserSaga';
import { getTasksSaga } from './tasksSagas';

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPE.GET_USERS_REQUEST, getUsersSaga);
  yield takeLatest(ACTION_TYPE.LOGIN_USER_REQUEST, loginUserSaga);
  yield takeLatest(ACTION_TYPE.GET_TASK_ACTION, getTasksSaga);
}
