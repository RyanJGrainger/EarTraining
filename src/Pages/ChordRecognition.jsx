import React from "react"; 
import Chords from "../Chords";
import {Howl, Howler} from 'howler';
import { useState } from 'react';

var chordRecognitionLevel = 18;
var CurrentChords = Chords.slice(0,chordRecognitionLevel);
var numberOfChords = CurrentChords.length;
var chordPlayedIndex = Math.floor(Math.random() * numberOfChords);
var totalNotes = 31;
var soundLibary = "pianoNotes"
var range = totalNotes - (CurrentChords[chordPlayedIndex].intervals[CurrentChords[chordPlayedIndex].intervals.length - 1]); //destructuring?? 
var rootNote = Math.floor(Math.random() * range) + 1; 
var correctAnswers = [];


function ChordRecognition (){
    return(
        <div id="chordRecognition">
            <img onClick={playChord} className="tempPlayButton animated fadeIn" src="../css/play-button3.svg" alt="playbutton"/>
            <div className="answerContainer">
              {CurrentChords.map( CurrentChords => 
                  (
                    <Button
                        key={CurrentChords.chordID}
                        chordName={CurrentChords.chordName}
                        chordID={CurrentChords.chordID}
                        intervals={CurrentChords.intervals}
                    />
                  )
                )}
              </div>
        </div>
      )
}

export default ChordRecognition;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Button(props) {

    const [buttonState, setButtonState] = useState("answerCircle animated flipInX")

    return(
        <p onClick={() => {
            if (isCorrectAnswer(props.chordID) === true){
                setButtonState(" answerCircleCorrect animated flipOutY");
                };
            }//// else, reset level here?
        } 
        className={buttonState}> {props.chordName} </p>
    )
}

function isCorrectAnswer(buttonClicked){
    if(buttonClicked === CurrentChords[chordPlayedIndex].chordID){
        correctAnswers.push(chordPlayedIndex);
        if (correctAnswers.length === numberOfChords){
          alert("level complete")
            correctAnswers = [];

        }
        else {
          var correctSoundFx = new Howl({
            src: ["../sounds/soundEffects/correct.mp3"],
            volume: 0.3
        });
        correctSoundFx.play();

          do {
            chordPlayedIndex = Math.floor(Math.random() * numberOfChords);
          } while (correctAnswers.includes(chordPlayedIndex));

          range = totalNotes - (CurrentChords[chordPlayedIndex].intervals[CurrentChords[chordPlayedIndex].intervals.length - 1]);
          rootNote = Math.floor(Math.random() * range) + 1;

          return true;
        }  
    }

    else{
        resetLevel();
    }
}



function resetLevel(){
  // correctAnswers = [];

}

function playChord(){


  var note1 = new Howl({
      src: ["../sounds/" + soundLibary + "/note" + rootNote + ".wav"],
      html5: true,
      volume: 0.25
    });

  var note2 = new Howl({
      src: ["../sounds/" + soundLibary + "/note" + (rootNote + CurrentChords[chordPlayedIndex].intervals[0]) + ".wav"],
      volume: 0.25
  });

  var note3 = new Howl({
      src: ["../sounds/" + soundLibary + "/note" + (rootNote + CurrentChords[chordPlayedIndex].intervals[1]) + ".wav"],
      volume: 0.25
  });

  var note4 = new Howl({
      src: ["../sounds/" + soundLibary + "/note" + (rootNote + CurrentChords[chordPlayedIndex].intervals[2]) + ".wav"],
      volume: 0.25
  });

    var note5 = new Howl({
      src: ["../sounds/" + soundLibary + "/note" + (rootNote + CurrentChords[chordPlayedIndex].intervals[3]) + ".wav"],
      volume: 0.25
  });
    
    note1.play();
    note2.play();
    note3.play();
    note4.play();
    note5.play();


    // setTimeout(function() {
    //   note2.play();
    // }, 200)

    // setTimeout(function() {
    //   note3.play();
    // }, 400);
  
    // setTimeout(function() {
    //   note4.play();
    // }, 600);

}



