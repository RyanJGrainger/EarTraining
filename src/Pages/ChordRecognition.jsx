import React from "react";
import {Howl, Howler} from 'howler';
import AnswersButtons from "../components/AnswersButtons";
import Chords from "../Chords"


function playChord(){
    var root = Math.floor(Math.random() * 13) + 1;
    var whichChord = Math.floor(Math.random() * 11) + 1;

    var note1 = new Howl({
        src: ["../sounds/rhodesNotes/note" + root + ".wav"],
        // html5: true,
        volume: 0.33
      });

    var note2 = new Howl({
        src: ["../sounds/rhodesNotes/note" + (root + Chords[whichChord].intervals[0]) + ".wav"],
        volume: 0.33
    });

    var note3 = new Howl({
        src: ["../sounds/rhodesNotes/note" + (root + Chords[whichChord].intervals[1]) + ".wav"],
        volume: 0.33
    });

    var note4 = new Howl({
        src: ["../sounds/rhodesNotes/note" + (root + Chords[whichChord].intervals[2]) + ".wav"],
        volume: 0.33
    });
      
      note1.play();
      
      note2.play();
      note3.play();
      note4.play();

    //   setTimeout(function() {
    //     note2.play();
    //   }, 70)

    //   setTimeout(function() {
    //     note3.play();
    //   }, 140);
    
    //   setTimeout(function() {
    //     note4.play();
    //   }, 210);



}



function ChordRecognition(props){
    return (
        <div id="chordRecognition">
            <img onClick={playChord} className="tempPlayButton animated fadeIn" src="../css/play-button.svg" alt="playbutton"/>
            <AnswersButtons />
        </div>
    );
}

export default ChordRecognition;
