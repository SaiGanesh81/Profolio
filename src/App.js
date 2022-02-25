import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Switch>
            <Route path="/" exact>
              <Login/>
              
            </Route>
            <Route path='/Register'>
              <Register/>
              <Link to='/'>Move to Login Page</Link>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
