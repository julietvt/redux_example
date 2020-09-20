import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';

//<h1>{props.value}</h1>;
const Counter = (props) => {
  return (
    <>
      <h1>{props.counterState.value}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </>
  );
};

const mapStateToProps = (state) => {
  const { counterState } = state;
  return {
    counterState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch({
        type: ACTION_TYPES.INCREMENT_COUNTER,
      }),
    decrement: () =>
      dispatch({
        type: ACTION_TYPES.DECREMENT_COUNTER,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
