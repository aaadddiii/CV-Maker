import React, { Component } from 'react'
import './App.css'
import CV from './CV';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component{
  onSubmit = (e) => {
    e.preventDefault();
    let username = e.target.value;
    console.log(username)
  }
  render(){
    return (
      <div>
        <Router>
         <div className="App">
           <Nav />
           <Home onSubmit={this.onSubmit}/>
           <Route path='/resume' component={CV}/>
         </div>
       </Router>
      </div>
    );
  }
}


const Nav = () => (
    <nav>
        <h3>CV Maker</h3>
    </nav>
);

export default App;