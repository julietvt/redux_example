import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from '../src/components/Counter';
import UsersList from '../src/components/UserList';

function App() {
  return (
    <>
      <Counter />;
      <UsersList />;
    </>
  );
}

export default App;
