import React from 'react'
import './App.css'
import CV from './CV';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App(){
  return (
    <div>
      <Router>
       <div className="App">
         <Nav />
         <Home />
         <CV/>
       </div>
     </Router>
    </div>
  );
}


const Nav = () => (
    <nav>
        <h3>CV Maker</h3>
    </nav>
);

export default App;