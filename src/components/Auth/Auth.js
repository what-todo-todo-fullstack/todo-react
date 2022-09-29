import React, { useState, useContext } from 'react';
import { authUser } from '../../services/auth';
import { UserContext } from '../../context/UserContext';
import './Auth.css';
import { NavLink, Redirect, useParams } from 'react-router-dom';


export default function Auth() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  const submitAuth = async () => {
    const userResp = await authUser(email, password, type);
    setUser(userResp);

  };
 

  if (user) {
    return <Redirect to='/todos'/>;
  }

  return (
    <main>
      <div className='switch'>
        <NavLink to='/auth/sign-in'>Sign in</NavLink>
        <NavLink to='/auth/sign-up'>Sign up</NavLink>
      </div>
      <div className='form'>
        <label>Email</label>
        <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
        { type === 'sign-up' && <button onClick={submitAuth}>Sign up</button> }
        { type === 'sign-in' && <button onClick={submitAuth}>Sign in</button> }
        
      </div>
    </main>
  );
}
