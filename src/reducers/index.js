import usersReducer from './usersReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

export default combineReducers({
  usersState: usersReducer,
  counterState: counterReducer,
  tasksStore: tasksReducer,
});
