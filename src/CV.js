import React from "react";

function CV(props){
    return (
            <div>
                <div class="container">
        <div class="header">
            <div class="full-name">
            <span class="first-name">{props.name}</span> 
            {/* <span class="last-name">Last Name</span> */}
            </div>
            <div class="contact-info">
            <span class="email">Email: </span>
            <span class="email-val">john.doe@gmail.com</span>
            <span class="separator"></span>
            <span class="phone">Github </span>
            <span class="phone-val">https://github.com/aaadddiii</span>
            </div>
            
            <div class="about">
            <span class="desc">
                bio 
            </span>
            </div>
        </div>
        <div class="details">
            <div class="section">
            <div class="section__title">Projects </div> 
            <div class="section__list">
                <div class="section__list-item">
                <div class="name">Name of the repo DSP</div>
                <div class="text">Description of the repository  I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
                </div>
                
                <div class="section__list-item">
                            <div class="name">DSP</div>
                <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                </div>
                </div>
            </div>
            </div>
            <div class="section">
            <div class="section__title">Skills</div>
            <div class="skills">
                <div class="skills__item">
                <div class="left"><div class="name">
                    Javascript
                    </div></div>
                <div class="right">
                                <input  id="ck1" type="checkbox" checked/>

                    <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>~
                                <input id="ck3" type="checkbox" />

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" />
                    <label for="ck4"></label>
                                <input id="ck5" type="checkbox" />
                    <label for="ck5"></label>

                </div>
                </div>
                
            </div>
            <div class="skills__item">
                <div class="left"><div class="name">
                    CSS</div></div>
                <div class="right">
                                <input  id="ck1" type="checkbox" checked/>

                    <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                                <input id="ck3" type="checkbox" />

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" />
                    <label for="ck4"></label>
                                <input id="ck5" type="checkbox" />
                    <label for="ck5"></label>

                </div>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    )
}

export default CV;