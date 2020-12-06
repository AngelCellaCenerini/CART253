"use strict";

/**************************************************
Project02 Draft: Melody
Angel Cella Cenerini
Template p5 project by CART253 Course


P02DM: Creating Melody for Final Project via p5.sound
**************************************************/
let synth;
let synth2;
let notes = [`F3`, `E3`, `D3`];
let notes2 = [`A2`, `A#2`, `Ab2`];
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
  synth.play(note, 0.6, 0, 0.4);
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
