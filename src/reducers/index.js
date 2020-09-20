import usersReducer from './usersReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  usersState: usersReducer,
  counterState: counterReducer,
});
