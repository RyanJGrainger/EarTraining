import React from "react";
import {Link} from 'react-router-dom';


function Footer(props){

    return (
        <div className="footer">

            <h1 id="copyright">ⓒ 2021 Ryan Grainger‎  |  </h1> 

            <a href="https://github.com/RyanJGrainger" target="_blank">  
            <img src="./css/githubicon.png" width="35"  height="35" ></img>
            </a>


        </div>

    ) 

}

export default Footer;