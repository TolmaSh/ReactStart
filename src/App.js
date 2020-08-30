import React from 'react';
import './App.css';   
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Users from './components/users';
import Home from './components/home';
import Dashboard from './components/dashboard';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
         
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
