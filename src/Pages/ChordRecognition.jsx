import React from "react";
import {Howl, Howler} from 'howler';
import AnswersButtons from "../components/AnswersButtons";
import Chords from "../Chords"


function playChord(){
    var root = Math.floor(Math.random() * 22) + 1;
    var whichChord = Math.floor(Math.random() * 11) + 1;

    var note1 = new Howl({
        src: ["../sounds/stringNotes/note" + root + ".mp3"],
        // html5: true,
        volume: 0.25
      });

    var note2 = new Howl({
        src: ["../sounds/stringNotes/note" + (root + Chords[whichChord].intervals[0]) + ".mp3"],
        volume: 0.25
    });

    var note3 = new Howl({
        src: ["../sounds/stringNotes/note" + (root + Chords[whichChord].intervals[1]) + ".mp3"],
        volume: 0.25
    });

    var note4 = new Howl({
        src: ["../sounds/stringNotes/note" + (root + Chords[whichChord].intervals[2]) + ".mp3"],
        volume: 0.25
    });
      
      note1.play();
      
    //   note2.play();
    //   note3.play();
    //   note4.play();

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



function ChordRecognition(props){
    return (
        <div id="chordRecognition">
            <img onClick={playChord} className="tempPlayButton" src="../css/play-button.svg" alt="playbutton"/>
            <AnswersButtons />
        </div>
    );
}

export default ChordRecognition;
