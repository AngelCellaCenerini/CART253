"use strict";

/**************************************************
Project02 Draft: Melody
Angel Cella Cenerini
Template p5 project by CART253 Course


P02DM: Creating Melody for Final Project via p5.sound
**************************************************/
let melody;
let synth;

// let synth;
// let synth2;

let sequences = {
  g: [`D4`, `F4`,`A5`,`G4`],
  f: [`F4`, `E4`,`C4`,`D4`],
  h: [`D4`, `F4`,`A5`,`D5`, `D5`, `Db5`,`D5`,`A6`],
  t: [`A6`,`G#5`,`A6`, `Bb6`,`A6`,`G5`,`E6`, `Db6`, `A5`],
  c: [`A3`,`D2`],  // sx
  b: [`F4`],
  v: [`E4`, `F4`, `G4`, `A5`],
  r: [`E4`, `C4`],
  d: [`D4`]
};

// let notes = [`D4`, `F4`,`A5`,`G4`]; //1
// let notes2 = [`F4`, `E4`,`C4`,`D4`]; //2
// let notes2 = [`D4`, `F4`,`A5`,`D5`, `D5`, `Db5`,`D5`,`A6`]; //3
// let notes = [`A6`,`G#5`,`A6`, `Bb6`,`A6`,`G5`,`E6`, `Db6`, `A5`]; //4
// let notes = [`A3`,`D2`]; //SX
// let notes2 = [`F4`]; 5
// let notes2 = [ `E4`, `F4`, `G4`, `A5`]; //6
// let notes2 = [ `E4`, `C4`];  8
// let notes2 = [`D4`]; //9
// let notes2 = [`G2`]; MANO SX?
// let notes2 = [`C4`, `D4`, `E4`, `F4`,`G4`,`A5`, `B5`, `C5` ];
// let currentNote = 0;
// let currentNote2 = 0;
// let interval;
// let interval2;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();
  rectMode(CENTER);

  synth = new p5.PolySynth();
    for (let i = 0; i < synth.audiovoices.length; i++) {
      let voice = synth.audiovoices[i];
      voice.oscillator.setType(`triangle`);
    }

    // synth2 = new p5.PolySynth();
    //   for (let i = 0; i < synth2.audiovoices.length; i++) {
    //     let voice2 = synth2.audiovoices[i];
    //     voice2.oscillator.setType(`triangle`);
    //   }

         // let x = width/8;
         // let y = height/2;
      // // let notes = //defined in class
      // melody = new Melody(x, y, sequences, notes);
      //
      // melody = new p5.PolySynth();
      //   for (let i = 0; i < melody.audiovoices.length; i++) {
      //     let voice = melody.audiovoices[i];
      //     voice.oscillator.setType(`triangle`);
      //   }

      let x = width/8;
      let y = height/2;
      // let notes = //defined in class
      melody = new Melody(x, y, sequences);
}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0);

  melody.display();


}

function keyPressed(){
  melody.keyPressed();
}
