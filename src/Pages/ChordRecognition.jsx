import React from "react";
import AnswersButtons from "../components/AnswersButtons";


function playSound(){
    var x = new Audio(".../public/sounds/pianoNotes/note10.mp3")
    x.play();
}


function ChordRecognition(){
    return (

                    <div id="chordRecognition">
                        <img onClick={playSound} className="tempPlayButton" src="../css/play-button.svg" alt="playbutton"/>
                        <AnswersButtons />
                    </div>
        
    );


}

export default ChordRecognition;
