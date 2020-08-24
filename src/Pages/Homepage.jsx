import React from "react";
import HomepageCards from "../components/HomepageCards"
import ProgressCircle from "../components/ProgressCircle";
import {Link} from 'react-router-dom';
import DelayLink from 'react-delay-link';



function Homepage(props){

    return (
        <div id="homePage"> 
            <ProgressCircle/>
            <DelayLink delay={1} to="/chord-listen">
                <button>listen</button>
            </DelayLink>
            <HomepageCards />
        </div>
    );
}

export default Homepage;