import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Todos.css';
import { Redirect } from 'react-router-dom';

export default function Todos() {

  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to='/auth/sign-in'/>;
  }

  return (
    <div className='todo-main'>
      <div className='input-container'>
        <div className='todo-input'>
          <input type='text'></input>
          <button>Add Todo</button>
        </div>
        
      </div>
      <div className='todo-container'>
        <ul>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
        </ul>
      </div>
    </div>
  );
}
