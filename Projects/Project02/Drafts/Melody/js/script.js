"use strict";

/**************************************************
Project02 Draft: Melody
Angel Cella Cenerini
Template p5 project by CART253 Course


P02DM: Creating Melody for Final Project via p5.sound
**************************************************/
let synth;
let notes = [`G2`, `A3`, `B3`, `C3`, `D3`, `E3`, `F#3`, `G3`];
let currentNote = 0;
let interval;


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
  synth.play(note, 0.2, 0, 0.4);
  // Increase the current position and go back to 0 when we reach the end
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
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
