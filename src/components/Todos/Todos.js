import React from 'react';
import './Todos.css';

export default function Todos() {
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
