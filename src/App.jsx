import React from "react";
import ChordRecognition from "./Pages/ChordRecognition"
import Homepage from "./Pages/Homepage";

var isChordRecog = true;

function App(){
    return (
        <div>
            {
                isChordRecog ? 
                    <ChordRecognition />
                :
                    <Homepage />
            }
        </div>
    );
}

export default App;


