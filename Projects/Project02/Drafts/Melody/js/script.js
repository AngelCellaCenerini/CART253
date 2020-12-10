"use strict";

/**************************************************
Project02 Draft: Melody
Angel Cella Cenerini
Template p5 project by CART253 Course


P02DM: Creating Melody for Final Project via p5.sound
**************************************************/
let melody;
let synth;

let atmosphericLights = [];
let numAtmosphericLights = 20;
let chimingLights = [];
let numChimingLights = 6;


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

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  userStartAudio();
  rectMode(CENTER);

  synth = new p5.PolySynth();
    // for (let i = 0; i < synth.audiovoices.length; i++) {
    //   let voice = synth.audiovoices[i];
    //   voice.oscillator.setType(`triangle`);
    // }

  // Atmospheric Lights
  for (let i = 0; i < numAtmosphericLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(5, 30);
    let atmosphericLight = new Light(x, y, size);
    atmosphericLights.push(atmosphericLight);
  }

  // Chiming Lights
  for (let i = 0; i < numChimingLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(30, 60);
    let chimingLight = new ChimingLight(x, y, size);
    chimingLights.push(chimingLight);
  }

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

  //  Atmospheric Lights
  for (let i = 0; i < atmosphericLights.length; i ++){
    let atmosphericLight = atmosphericLights[i];
    atmosphericLight.move();
    atmosphericLight.wrap();
    atmosphericLight.display();
  }
  //  Chiming Lights
  for (let i = 0; i < chimingLights.length; i ++){
    let chimingLight = chimingLights[i];
    chimingLight.move();
    chimingLight.wrap();
    chimingLight.grow();
    chimingLight.returnOriginalSize();
    chimingLight.display();
  }

  melody.display();
  // for (let i = 0; i < chimingLights.length; i ++){
  //   let chimingLight = chimingLights[i];
  //   melody.playNextNote(chimingLight);
  // }




}

function keyPressed(){
  for (let i = 0; i < chimingLights.length; i ++){
  let chimingLight = chimingLights[i];
    melody.keyPressed(chimingLight);
  }

}
