import React from "react";
import {Howl, Howler} from 'howler';
import AnswersButtons from "../components/AnswersButtons";
import Chords from "../Chords"


function playChord(){
    var root = Math.floor(Math.random() * 10) + 1;
    var whichChord = Math.floor(Math.random() * 10);

    var note1 = new Howl({
        src: ["../sounds/pianoNotes/note" + root + ".wav"],
        volume: 0.33
      });

    var note2 = new Howl({
        src: ["../sounds/pianoNotes/note" + (root + Chords[whichChord].intervals[0]) + ".wav"],
        volume: 0.33
    });

    var note3 = new Howl({
        src: ["../sounds/pianoNotes/note" + (root + Chords[whichChord].intervals[1]) + ".wav"],
        volume: 0.33
    });

    var note4 = new Howl({
        src: ["../sounds/pianoNotes/note" + (root + Chords[whichChord].intervals[2]) + ".wav"],
        volume: 0.33
    });
      
      note1.play();

      setTimeout(function() {
        note2.play();
      }, 70)

      setTimeout(function() {
        note3.play();
      }, 140);
    
      setTimeout(function() {
        note4.play();
      }, 210);

}

function ChordRecognition(){
    return (
        <div id="chordRecognition">
            <img onClick={playChord} className="tempPlayButton" src="../css/play-button.svg" alt="playbutton"/>
            <AnswersButtons />
        </div>
    );
}

export default ChordRecognition;
