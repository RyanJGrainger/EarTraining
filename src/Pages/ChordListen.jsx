import React from "react";
import { useState, useEffect } from 'react';
import Chords from "../Chords";
import {Howl} from 'howler';
import ScaleLoader from "react-spinners/ScaleLoader";

var soundLibary = "cleanKeys"
var totalNotes = 24;
var selectedInversion = 0
var finalIntervals = [];
var drums = new Howl({src: ["../sounds/drums.mp3"],volume : 0.25,loop: true})
var noteArray = [];
var bassNoteArray = [];
preloadSounds();


const handleKeyDown = (event) => {
    if (event.key === "1") {
      console.log("Submit Button Pressed");
      
    }
  };



function ChordListen(){

    const [pianoNotesPressed, setPianoNotesPressed] = useState([0]) // redo using context
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() =>{
            setLoading(false)
        },0) //3800

        window.addEventListener("keydown", handleKeyDown);


    }, [])

    return(

        <div>
            {
                loading ?

                <div className="animated fadeIn delay-1s" id="chordsListen">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <ScaleLoader color={"#2d2d2d"} loading={loading} size={20} />

                </div>

                :
            

            <div className="animated fadeIn" id="chordsListen">

                <div id="chordListenControls">
                    <InversionControls/>
                    <Piano notesPressed={pianoNotesPressed} />
                    <Drums/>
                </div>

                <div className="listenButtonContainer">
                {Chords.map( Chords => 
                    (
                        <ChordButton
                            key={Chords.chordID}
                            chordName={Chords.chordName}
                            chordFlavour={Chords.chordFlavour}
                            chordID={Chords.chordID}
                            intervals={Chords.intervals}
                            setState={setPianoNotesPressed}
                        />
                    )
                    )}
                </div>
            </div>
            }
        </div>
        
        
    )
}

export default ChordListen;


////////////////////////////////////////////////////////////////////////////////////////////////



function InversionControls(){
    const [inversionClicked, setClicked] = useState(0)
    var buttonLight = {color: "#FFF"}
    var buttonDark = {color: "#2d2d2d"}

    function switchInversion(i){
        selectedInversion = i
        setClicked(i)
    }

    return(
        <div className="animated fadeIn" id="listenInversions">
            <h1 id="inversionText">Inversion</h1>
            <div id="inversionButtonContainer">
                <p onClick={() => switchInversion(0)} style= {inversionClicked === 0 ? buttonDark : buttonLight} class="inversionButton">R</p>
                <p onClick={() => switchInversion(1)} style= {inversionClicked === 1 ? buttonDark : buttonLight} class="inversionButton">1</p>
                <p onClick={() => switchInversion(2)} style= {inversionClicked === 2 ? buttonDark : buttonLight} class="inversionButton">2</p>
                <p onClick={() => switchInversion(3)} style= {inversionClicked === 3 ? buttonDark : buttonLight} class="inversionButton">3</p>
            </div>  
        </div>
    ) 
}



function ChordButton(props) {
    const [buttonState, setButtonState] = useState("listenCircle animated flipInX")

    return(
        <p onClick={() => 
            {createChordInversion(props.intervals, selectedInversion, props.setState); 
            setButtonState("listenCircle animated rubberBand fast");
            setTimeout(function() {
                setButtonState("listenCircle animated ");
            }, 700)
            }} 
        className={buttonState}>{props.chordName}<sup>{props.chordFlavour}</sup></p>
    )
}



function createChordInversion(intervals, a, setState){
    var newArr = [...intervals]
    for(var i = 0; i < a; i++){  //each note up an octave 
        newArr[i]= newArr[i] + 12;
    }
    newArr.sort((a, b) => a - b); //normalizsed array to fit range of notes
    var chordInversion = newArr.map(x => x - (newArr[0] - 1))
    playChord(chordInversion, setState);
}



function playChord(intervals, setState){
    var range = totalNotes - (intervals[intervals.length - 1] - 1);  //sets max range of potential keys based on chord size
    var randomKey = Math.floor(Math.random() * 6); //generates random key signature within range
    // var randomKey = Math.floor(Math.random() * range); // original, all notes!!!
    finalIntervals = [];

    for (var i = 0; i < intervals.length; i++){
        finalIntervals.push(intervals[i] + randomKey)
    } 

    setState(finalIntervals) //observed by piano funtion for notesPressed visual update

    finalIntervals.forEach((note, i) => {
            setTimeout(() => {
                noteArray[finalIntervals[i] - 1].play();
            }, i * 62); 
        });
    

        // var bassNumber = finalIntervals[1]
        // if (finalIntervals[1] > 12){
        //     bassNumber = bassNumber - 12
        // }


     bassNoteArray[finalIntervals[0] - 1].play();



    //  setTimeout(() => {
    //     bassNoteArray[finalIntervals[0] - 1].stop();
    //     bassNoteArray[finalIntervals[2] - 1].play();

    //     setTimeout(() => {
    //         bassNoteArray[finalIntervals[2] - 1].stop();
    //     }, 700); 

    // }, 550); 







}


function Piano(props){
    var keyLight = "note"
    var keyDark = "note highlighted-note"

    return(
    <div className="animated flipInX"  id="pianoContainer">
        <div id="piano-roll" class="piano-roll">
            <div class="white-notes">
                <div id="1" class={props.notesPressed.includes(1) ? keyDark : keyLight}></div>
                <div id="3" class={props.notesPressed.includes(3) ? keyDark : keyLight}></div>
                <div id="5" class={props.notesPressed.includes(5) ? keyDark : keyLight}></div>
                <div id="7" class={props.notesPressed.includes(7) ? keyDark : keyLight}></div>
                <div id="8" class={props.notesPressed.includes(8) ? keyDark : keyLight}></div>
                <div id="10" class={props.notesPressed.includes(10) ? keyDark : keyLight}></div>
                <div id="12" class={props.notesPressed.includes(12) ? keyDark : keyLight}></div>
                <div id="13" class={props.notesPressed.includes(13) ? keyDark : keyLight}></div>
                <div id="15" class={props.notesPressed.includes(15) ? keyDark : keyLight}></div>
                <div id="17" class={props.notesPressed.includes(17) ? keyDark : keyLight}></div>
                <div id="19" class={props.notesPressed.includes(19) ? keyDark : keyLight}></div>
                <div id="20" class={props.notesPressed.includes(20) ? keyDark : keyLight}></div>
                <div id="22" class={props.notesPressed.includes(22) ? keyDark : keyLight}></div>
                <div id="24" class={props.notesPressed.includes(24) ? keyDark : keyLight}></div>
            </div>
            <div class="black-notes">
                <div id="2" class={props.notesPressed.includes(2) ? keyDark : keyLight}></div>
                <div id="4" class={props.notesPressed.includes(4) ? keyDark : keyLight}></div>
                <div id="6" class={props.notesPressed.includes(6) ? keyDark : keyLight}></div>
                <div id="9" class={props.notesPressed.includes(9) ? keyDark : keyLight}></div>
                <div id="11" class={props.notesPressed.includes(11) ? keyDark : keyLight}></div>
                <div id="14" class={props.notesPressed.includes(14) ? keyDark : keyLight}></div>
                <div id="16" class={props.notesPressed.includes(16) ? keyDark : keyLight}></div>
                <div id="18" class={props.notesPressed.includes(18) ? keyDark : keyLight}></div>
                <div id="21" class={props.notesPressed.includes(21) ? keyDark : keyLight}></div>
                <div id="23" class={props.notesPressed.includes(23) ? keyDark : keyLight}></div>
            </div>
        </div>
    </div>
    )
}

function Drums(){
    const [color, setColor] = useState(0);
    var buttonLight = { filter: "brightness(0) invert(1)"}
    var buttonDark = {filter: "invert(12%) sepia(0%) saturate(4471%) hue-rotate(316deg) brightness(99%) contrast(86%)"}



    function toggleDrums(){
        drums.playing() ? drums.stop() : drums.play();
        color === 0 ?  setColor(1) : setColor(0);
   }


    return(
        <img onClick={toggleDrums} className="drumsIcon animated fadeIn" src="./css/drumsIcon.png" style= {color === 0 ? buttonLight : buttonDark}/>
    )

}



function preloadSounds(){
    for (var i = 0; i < 23; i++){      ////preloads notes to resolve initial play lag
        var note = new Howl({
           src: ["../sounds/" + soundLibary + "/note" + (i + 1) + ".wav"],
           volume : 0.075
       }) 
       noteArray.push(note)
    }
    
    for (var i = 0; i < 23; i++){     
        var bassNote = new Howl({
           src: ["../sounds/" + "bassNotes" + "/note" + (i + 1) + ".wav"],
           volume : 0.3
       }) 
       bassNoteArray.push(bassNote)
    }

}
