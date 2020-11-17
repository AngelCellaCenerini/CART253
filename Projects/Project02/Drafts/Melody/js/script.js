"use strict";

/**************************************************
Project02 Draft: Melody
Angel Cella Cenerini
Template p5 project by CART253 Course


P02DM: Creating Melody for Final Project via p5.sound
**************************************************/
let synth;
let notes = [`C#1`, `A1`, `Ab4`, `Bb4`, `Db4`];
let interval;

// setup()
//
// Description of setup() goes here.
function setup() {
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
  if (interval === undefined) {
      interval = setInterval(playRandomNote, 500);
    }
    else {
      clearInterval(interval);
      interval = undefined;
    }
}

function playRandomNote(){
  // Play Notes Randomly
  let note = random(notes);
  synth.play(note, 1, 1, 1);
}
