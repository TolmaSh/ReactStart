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
      <div className="Main-Wrapper">
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
