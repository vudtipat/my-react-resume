import react,{useEffect,useState} from 'react';
import "../index.css";
import $ from 'jquery';

import About from "./ContentPage/About";
import Experience from "./ContentPage/Experience";
import Skills from "./ContentPage/Skills";
import Contract from "./ContentPage/Contract";

const Content = function(){
    const [focus,setfocus] = useState("");
    const handleScroll = () => {
        console.log(window.pageYOffset)
        var sec = $(".container");
        sec.toArray().forEach(element => {
            if(window.pageYOffset >= element.offsetTop)
            {
                console.log(element.id)
                setfocus(element.id);
            }
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div class='content'>
            <About/>
            <Experience/>
            <Skills/>
            <Contract/>
      </div>
    );
}

export default Content;