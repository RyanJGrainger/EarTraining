import React from "react";
import ChordRecognition from "./Pages/ChordRecognition"
import IntervalRecognition from "./Pages/IntervalRecognition"
import Homepage from "./Pages/Homepage";
import Header from "./components/Header"
import { useState } from "react";


function App(props){
    
    var [page, changePage] = useState(<Homepage goToChords={controlPage}/>)


    function controlPage(){
        changePage(page = <ChordRecognition/>)
    }


    return (
        <div>
            <Header goHome={controlPage}/>
            {page}
        </div>
    );
}

export default App;



// var isChordRecog = false;

{   
    {/* isChordRecog ? 
        <ChordRecognition />
    :
        <Homepage /> */}
}