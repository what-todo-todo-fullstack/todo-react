import React, { useContext } from 'react';
import { signOut } from '../../services/auth';
import { UserContext } from '../../context/UserContext';
import './Header.css';


export default function Header() {

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <header>
      <h1>what todo, what todo...?</h1>
      {user && <button onClick={handleLogout}>Logout</button> }
      
    </header>
  );
}
