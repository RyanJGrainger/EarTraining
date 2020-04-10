import React from "react";
import HomepageCards from "../components/HomepageCards"
import {Link} from 'react-router-dom';



function Homepage(props){

    return (
        <div id="homePage"> 
        
            <HomepageCards />

            <Link to='/chord-recognition'>
                <button>chords</button>
            </Link>

            <Link to="/interval-recognition">
                <button>intervals</button>   
            </Link>

        </div>
    );
}

export default Homepage;