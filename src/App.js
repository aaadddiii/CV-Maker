import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App(){
  return (
    <Router>
      <div className="App">
        <Nav />
        
      </div>
    </Router>
  );
}


const Nav = () => (
    <nav>
        <h3>CV Maker</h3>
    </nav>
);