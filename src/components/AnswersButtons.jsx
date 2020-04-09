import React from "react"; 
import Chords from "../Chords";


var Button = props =>  <p onClick={() => { alert("srvdbt") }} className="answerCircle"> {props.chordName} </p>

var AnswerButtons = () => 
  (
    <div className="answerContainer animated fadeIn">
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
  )
  

export default AnswerButtons;