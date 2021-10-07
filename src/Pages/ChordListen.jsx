import React from "react";
import { useState } from 'react';
import Chords from "../Chords";
import {Howl, Howler} from 'howler';

var soundLibary = "cleanKeys"
var totalNotes = 24;
var selectedInversion = 0
var finalIntervals = [];


function ChordListen(){

    const [pianoNotesPressed, setPianoNotesPressed] = useState([0]) // redo using context

    return(
        <div className="animated fadeIn" id="chordsListen">

            <div id="chordListenControls">
                <InversionControls/>
                <Piano notesPressed={pianoNotesPressed} />
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
        <div id="listenInversions">
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

////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////

function createChordInversion(intervals, a, setState){
    var newArr = [...intervals]
    for(var i = 0; i < a; i++){
        newArr[i]= newArr[i] + 12;
    }
    newArr.sort((a, b) => a - b);
    var chordInversion = newArr.map(x => x - (newArr[0] - 1))
    playChord(chordInversion, setState);
}

////////////////////////////////////////////////////////////////////////////////////////////////

function playChord(intervals, setState){
    var range = totalNotes - (intervals[intervals.length - 1] - 1);  // double check this
    var randomKey = Math.floor(Math.random() * range); 
    finalIntervals = [];

    ////////// new  2021 lol


        // noteArray.forEach((note, i) => {
        //     setTimeout(() => {
        //         note.stop()
        //       }, i * 1);
        // });


    //////////////

    for (var i = 0; i < intervals.length; i++){
        finalIntervals.push(intervals[i] + randomKey)
    } 

    setState(finalIntervals) /////yee

    ////////////////// bass real quick
    var bassNumber = finalIntervals[0]
    if (finalIntervals[0] > 12){
        bassNumber = bassNumber - 12
    }
    var bassNote = new Howl({
        src: ["../sounds/bassNotes/note" + bassNumber + ".wav"],
        volume : .3
    })
    bassNote.play()
    ////////////////////

    var noteArray = [];

    for (var i = 0; i < finalIntervals.length; i++){
        var note = new Howl({
            src: ["../sounds/" + soundLibary + "/note" + (finalIntervals[i]) + ".wav"],
            volume : (1 / finalIntervals.length)
        })
        noteArray.push(note)
    }
    
    noteArray.forEach((note, i) => {
        setTimeout(() => {
            note.play()
          }, i * 58);
    });

}

///////////////////////////////////////////////////////////////////////////////////////////////

function Piano(props){
    var keyLight = "note"
    var keyDark = "note highlighted-note"

    return(
    <div id="pianoContainer">
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
