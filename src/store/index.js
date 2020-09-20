import { createStore, applyMiddleware } from 'redux';
import reducer from './../reducers';
import ACTION_TYPES from '../actions/actionTypes';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
