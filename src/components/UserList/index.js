import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';

const UsersList = (props) => {
  const { isFetching, users, error, getUsersRequest } = props;

  const loadUsers = () => {
    getUsersRequest();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (error) {
    return <h1>Error</h1>;
  }
  if (isFetching) {
    return <h1>LOAD...</h1>;
  }
  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>
        ))}
      </ul>
    </>
  );
};

/*
  loadUsers = () => {
    this.props.getUsersRequest();
    fetch('../../users.json')
      .then((response) => response.json())
      .then((data) => {
        this.props.getUsersSuccess(data);
      })
      .catch((e) => {
        this.props.getUsersError(e);
      });
  };

  componentDidMount() {
    this.loadUsers();
  }
  render() {
    if (this.props.error) {
      return <div>Error!!!</div>;
    }
    if (this.props.isFetching) {
      return <div>Load...</div>;
    }
    return (
      <ol>
        {this.props.users.map((item) => (
          <li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>
        ))}
      </ol>
    );
  }
}
*/
const mapStateToProps = (state) => {
  const { usersState } = state;
  return usersState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersRequest: () => dispatch({ type: ACTION_TYPES.GET_USERS_REQUEST }),
    getUsersSuccess: (data) =>
      dispatch({ type: ACTION_TYPES.GET_USERS_SUCCESS, users: data }),
    getUsersError: (error) =>
      dispatch({ type: ACTION_TYPES.GET_USERS_ERROR, error }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
