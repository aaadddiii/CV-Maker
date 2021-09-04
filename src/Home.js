import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import {Link} from 'react-router-dom'
import CV from './CV';

class Home extends Component{
    state = {
        username : null
    }
    handleChange = (username) =>{
        this.setState({
            username: username.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.getUsername(this.state.username)
    }
    render(){
        return (
            <div class="container">
            <br/>
            <h1>
                Enter Your Github Username
            </h1>
            <form id="myForm" autocomplete="off">
                <div className="form-group"> 
                    <input className="form-control" type="text" id="search" placeholder="Enter Username" required onChange={this.handleChange}/>
                </div>
                <br/>
                <div className ="form-group">
                <Link to="/resume">
                <button className="btn btn-danger btn-block" type="button" onClick={this.onSubmit}>
                <Link to="/resume">
                    <a type="button">
                        Click Me!
                    </a>
                </Link>
                </button>
                </Link>
                </div>
            </form>
            <div id="result"></div>
        </div>
        );   
    }
}

export default Home;