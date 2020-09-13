import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />

          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
