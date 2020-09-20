import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTION_TYPE from '../../actions/actionTypes';

class TasksList extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { isFetching, tasks, error } = this.props;
    if (error) {
      return <div>Error</div>;
    }
    if (isFetching) {
      return <div>Load...</div>;
    }
    return (
      <ul>
        {tasks.map((item) => {
          return <li key={item.id}> Task id={item.id}</li>;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return state.tasksStore;
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: () =>
      dispatch({
        type: ACTION_TYPE.GET_TASK_ACTION,
      }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
