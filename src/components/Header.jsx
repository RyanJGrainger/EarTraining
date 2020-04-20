import React from "react";
import {Link} from 'react-router-dom';


function Header(props){

    return (
        <div className="header animated fadeIn">

            <Link id="homeLink" to='/'>
                <img id="homeIcon" src="../css/home-run.svg" alt="homeicon"/>
            </Link>


            <h1 id="headerTitle">eartrain.me</h1> 
            
            <p id="userNameHeader">ryang199</p>
   
            <img id="logoutIcon" src="../css/logout.svg"/>


        </div>

    ) 

}

export default Header;