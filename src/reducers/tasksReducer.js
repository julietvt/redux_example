import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  tasks: [],
  error: null,
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_TASK_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.GET_TASK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.tasks,
      };
    case ACTION_TYPES.GET_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
