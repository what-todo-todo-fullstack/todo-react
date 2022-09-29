
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Todos from './components/Todos/Todos';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/auth/:type' component={Auth}/>
        <Route path='/todos' component={Todos}/>
        <Route exact path='/'>
          {!user && <Redirect to='/auth/sign-in'/>}
          {user && <Redirect to='/todos'/>}
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
