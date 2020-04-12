import React from "react"; 
import Chords from "../Chords";
import {Howl, Howler} from 'howler';

var Button = props =>  <p onClick={() => isCorrectAnswer(props.chordID)} className="answerCircle animated flipInX"> {props.chordName} </p>

var ChordRecognition = () => 
  (
    <div id="chordRecognition">

        <img onClick={playChord} className="tempPlayButton animated fadeIn" src="../css/play-button3.svg" alt="playbutton"/>

        <div className="answerContainer">
          {Chords.map( Chords => 
              (
                <Button
                    key={Chords.chordID}
                    chordName={Chords.chordName}
                    chordID={Chords.chordID}
                />
              )
            )}
          </div>

    </div>
    
  )

export default ChordRecognition;

////////////////////////////////////////////////////////////////////////////////////////////////

function isCorrectAnswer(x){

  alert(x);
  alert("hello")

}


function playChord(){
  var root = Math.floor(Math.random() * 22) + 1;
  var whichChord = Math.floor(Math.random() * 11) + 1;

  var note1 = new Howl({
      src: ["../sounds/pianoNotes/note" + root + ".wav"],
      // html5: true,
      volume: 0.25
    });

  var note2 = new Howl({
      src: ["../sounds/pianoNotes/note" + (root + Chords[whichChord].intervals[0]) + ".wav"],
      volume: 0.25
  });

  var note3 = new Howl({
      src: ["../sounds/pianoNotes/note" + (root + Chords[whichChord].intervals[1]) + ".wav"],
      volume: 0.25
  });

  var note4 = new Howl({
      src: ["../sounds/pianoNotes/note" + (root + Chords[whichChord].intervals[2]) + ".wav"],
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






