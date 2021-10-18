import React from "react";
import {Link} from 'react-router-dom';


function Header(props){

    return (
        <div className="header">

            {/* <Link id="homeLink" to='/'>
                <img id="homeIcon" src="../css/home-run.svg" alt="homeicon"/>
            </Link> */}

            <img className="animated fadeInDown" src="./css/logo.png"  width="55"   height="55" ></img>

            <h1 className="animated fadeInDown" id="headerTitle">eartrain.me</h1> 

            
            
       


        </div>

    ) 

}

export default Header;