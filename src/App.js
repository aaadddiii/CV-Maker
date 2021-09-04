import React, { Component,useState,useEffect } from 'react'
import './App.css'
import CV from './CV';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component{
  state = {
    data: null
  }
  async fetchData(username){
    const data = await fetch('https://api.github.com/users/aaadddiii')
    // this.setState({data})
    let githubData = await data.json()
    this.setState({
      data : githubData
    })
    this.props.history.push('/resume')
  }
  getUsername = (username) =>{
    
    console.log(username)
    this.fetchData(username)
    
  }

  render(){
    return (
      <div className="App">
        <Router>
           <Nav />
           <Route path='/resume' exact render={() => <CV data={this.state.data}/>}/>
           <Route path='/' exact render={() => <Home getUsername={this.getUsername}/>} />
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