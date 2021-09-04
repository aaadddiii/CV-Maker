import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";


class Home extends Component{
    state = {
        username : null
    }
    handleChange = (e) =>{
        this.setState({
            username: e.target.value
        })
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
                    <input className="form-control" type="text" id="search" placeholder="Search Username" required onChange={this.handleChange}/>
                </div>
                <br/>
                <div className ="form-group">
                    <button className="btn btn-danger btn-block" onClick={this.props.onSubmit}>
                        Search User
                    </button>
                </div>
            </form>
            <div id="result"></div>
        </div>
        );   
    }
}

export default Home;