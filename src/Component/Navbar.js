import React, { useEffect } from "react";
import "../index.css";
import { BsFacebook,BsInstagram,BsGithub,BsLinkedin} from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = function(){
    
    return (
        <div class="sidenav">
            <div>
                <img class="sidenav-circle-img" src="https://i1.sndcdn.com/artworks-000345913182-efwc23-t500x500.jpg"></img>
            </div>
            <div class="social-media">
                <a href="" target="_blank"><BsFacebook style={{color: 'white'}} size={30} /></a>
                <a href="" target="_blank"><BsInstagram style={{color: 'white'}} size={30}/></a>
                <a href="" target="_blank"><BsGithub style={{color: 'white'}} size={30}/></a>
                <a href="" target="_blank"><BsLinkedin style={{color: 'white'}} size={30}/></a>
            </div>
            <span class="sidenav-name">VUDTIPAT SAICHANA</span>
            <div id="sidemenu">
                <div class='sidenav-a'>
                    <Link activeClass="active" spy to="about" >About</Link>
                </div>
                <div class='sidenav-a'>
                    <Link activeClass="active" spy to="experience" >Experience</Link>
                </div>
                <div class='sidenav-a'>
                    <Link activeClass="active" spy to="skills">Skills</Link>
                </div>
                <div class='sidenav-a'>
                    <Link activeClass="active" spy to="contact">Contact</Link>
                </div>
            </div>
            
        </div>

    );

}

export default Navbar;