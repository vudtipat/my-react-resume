import react from "react";
import './style.css';

const MyTitle = function(props) {
    return(
        <div>
            <div class='txt'>{props.Title}</div>
            <div class='myunderline'></div>
        </div>
    );
}

export default MyTitle;