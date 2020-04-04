import React from "react";
import PlayButton from "../components/PlayButton";
import AnswersButtons from "../components/AnswersButtons";


function playSound(){
    var x = new Audio("../sounds/pianoNotes/note10.mp3")
    // x.play();
    document.getElementById("audio").play();


}


function ChordRecognition(){
    return (

                    <div id="chordRecognition">
                        <img onClick={playSound} className="tempPlayButton" src="https://image.flaticon.com/icons/svg/482/482059.svg" alt="playbutton"/>
                        <AnswersButtons />
                    </div>
        
    );


}

export default ChordRecognition;
