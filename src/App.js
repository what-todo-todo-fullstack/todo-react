
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/auth' component={Auth}/>
        <Route path='/todos' component={Todos}/>
      </Switch>
    </div>
  );
}

export default App;
