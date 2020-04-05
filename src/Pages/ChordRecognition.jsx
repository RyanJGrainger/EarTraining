import React from "react";
import AnswersButtons from "../components/AnswersButtons";
import Chords from "../Chords"


function playSound(){
    var note1 = new Audio("../sounds/pianoNotes/note10.mp3")
    var note2 = new Audio("../sounds/pianoNotes/note15.mp3")
    var note3 = new Audio("../sounds/pianoNotes/note17.mp3")
    var note4 = new Audio("../sounds/pianoNotes/note21.mp3")

    note1.play();
    note2.play();
    note3.play();
    note4.play();

    Chords.pop();
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
