import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Home(){
    return (
        <div class="container">
        <br/>
        <h1>
            Enter Your Github Username
        </h1>
        <form id="myForm" autocomplete="off">
            <div class="form-group"> 
                <input class="form-control" type="text" id="search" placeholder="Search Username" required/>
            </div>
            <br/>
            <div class ="form-group">
                <button class="btn btn-danger btn-block">
                    Search User
                </button>
            </div>
        </form>
        <div id="result"></div>
    </div>
    )
}

export default Home;