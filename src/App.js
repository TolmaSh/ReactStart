import React from 'react';
import './App.css';   
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Users from './components/users';
import Home from './components/home';
import StarWarsPage from './pages/StarWarsPage';
import NoMatch from './components/NoMatch';
import Menu from './components/Menu';

function App() {
  
  return (
    <div className="App">
      
      <Router>
      <div>
        {/* <nav>
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
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Menu />
            <Home />
          </Route>
        <Route  path="/home">
            <Menu />
            <Home />
          </Route>
        <Route path="/Starwars">
            <Menu />
            <StarWarsPage />
          </Route>
          <Route path="/about">
            <Menu />
            <AboutPage />
          </Route>
          <Route path="/users">
            <Menu />
            <Users />
          </Route>
          <Route path="*">
            <Menu />
            <NoMatch />
          </Route>
         
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
