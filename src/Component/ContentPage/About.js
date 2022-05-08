import React from "react";
import MyTitle from "../Element/MyTitle";

const About = function (){
    return(
        <div id="about" class="container" style={{backgroundColor:'#f9f9f9'}}>
            <MyTitle Title="ABOUT ME"/>
            <div class='con' style={{marginTop:'50px'}}></div>
        </div>
    );
}

export default About;