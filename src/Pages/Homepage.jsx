import React from "react";
import HomepageCards from "../components/HomepageCards"
import ProgressCircle from "../components/ProgressCircle";
import {Link} from 'react-router-dom';



function Homepage(props){

    return (
        <div id="homePage"> 
            <ProgressCircle/>
            <HomepageCards />
        </div>
    );
}

export default Homepage;