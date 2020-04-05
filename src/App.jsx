import React from "react";
import ChordRecognition from "./Pages/ChordRecognition"
import Homepage from "./Pages/Homepage";
import Header from "./components/Header"

var isChordRecog = true;

function App(){
    return (
        <div>
            <Header/>
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


