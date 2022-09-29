import React from 'react';
import './Auth.css';

export default function Auth() {
  return (
    <main>
      <div className='form'>
        <label>Email</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='text'></input>
        <button>Submit</button>
      </div>
    </main>
  );
}
