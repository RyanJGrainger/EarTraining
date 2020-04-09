import React from "react";

function Header(props){

    return (
        <div className="header">
            <img onClick={props.goHome} id="homeIcon" src="../css/home-run.svg" alt="homeicon"/>
            <h1 id="headerTitle"></h1>
        </div>

    ) 

}

export default Header;