import React from "react";
import PlayButton from "../components/PlayButton";
import AnswersButtons from "../components/AnswersButtons";


// function playSound(){
//     var x = new Audio("../sounds/pianoNotes/note10.mp3")
//     x.play();
// }


function ChordRecognition(){
    return (

                    <div id="chordRecognition">
                        {/* <img id="keyboardImg" src="../css/keyboard2.svg" alt="keyboardimage"/> */}
                        {/* <ProgressBar /> */}
                        <PlayButton/>
                        <AnswersButtons />
                    </div>
        
    );


}

export default ChordRecognition;
