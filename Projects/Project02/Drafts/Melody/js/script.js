"use strict";

/**************************************************
Project02 Draft: Melody
Angel Cella Cenerini
Template p5 project by CART253 Course


P02DM: Creating Melody for Final Project via p5.sound
**************************************************/
let synth;
let synth2;
// let notes = [`D4`, `F4`,`A5`,`G4`]; //1
// let notes2 = [`F4`, `E4`,`C4`,`D4`]; //2
// let notes2 = [`D4`, `F4`,`A5`,`D5`, `D5`, `Db5`,`D5`,`A6`]; //3
// let notes = [`A6`,`G#5`,`A6`, `Bb6`,`A6`,`G5`,`E6`, `Db6`, `A5`]; //4
let notes = [`A3`,`D2`]; //SX
// let notes2 = [`F4`]; 5
// let notes2 = [ `E4`, `F4`, `G4`, `A5`]; //6
// let notes = [ `E4`, `F4`, `G4`, `A5`];
// let notes2 = [ `E4`, `C4`];  8
let notes2 = [`D4`]; //9
// let notes2 = [`G2`]; MANO SX?
// let notes2 = [`C4`, `D4`, `E4`, `F4`,`G4`,`A5`, `B5`, `C5` ];
let currentNote = 0;
let currentNote2 = 0;
let interval;
let interval2;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();
  synth = new p5.PolySynth();
    for (let i = 0; i < synth.audiovoices.length; i++) {
      let voice = synth.audiovoices[i];
      voice.oscillator.setType(`triangle`);
    }

    synth2 = new p5.PolySynth();
      for (let i = 0; i < synth2.audiovoices.length; i++) {
        let voice2 = synth2.audiovoices[i];
        voice2.oscillator.setType(`triangle`);
      }
}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0);


}

function playNextNote() {
  // Chose the note at the current position
  let note = notes[currentNote];
  // Play it
  synth.play(note,  0.6, 0, 0.4);
  // Increase the current position and go back to 0 when we reach the end
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }

}

function playNextNote2() {
  // Chose the note at the current positionNote];
  let note2 = notes2[currentNote2];
  // Play it;
  synth2.play(note2, 0.6, 0, 0.4);
  // Increase the current position and go back to 0 when we reach the end

  currentNote2 = currentNote2 + 1;
  if (currentNote2 === notes2.length) {
    currentNote2 = 0;
  }
}

function mousePressed(){
  if (interval === undefined) {
      interval = setInterval(playNextNote, 500);
    }
    else {
      clearInterval(interval);
      interval = undefined;
    }
  }

  function keyPressed(){
    if (interval2 === undefined) {
        interval2 = setInterval(playNextNote2, 500);
      }
      else {
        clearInterval(interval2);
        interval2 = undefined;
      }
    }
