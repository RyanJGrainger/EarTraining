import React from "react";
import HomepageCards from "../components/HomepageCards"
import ChordRecognition from "./ChordRecognition";

function Homepage(props){

    return (
        <div id="homePage"> 
            <HomepageCards />
            <button onClick={props.goToChords}>chords</button>
        </div>
    );
}

export default Homepage;