/**************************************************
Project02 - Draft: Level03
Angel Cella Cenerini
Template p5 project by CART253 course

Here is a description of this template p5 project.
**************************************************/
// Background Music
let synth;
let notes = [`D2`, `G4`, `D4`, `D2`, `F4`, `D4`];
// Current played note
let currentNote = 0;
// Track interval between note
let interval;


// Frog
let frog;

// Compass(es)
let compasses = [];
let numCompasses = 12;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  userStartAudio();

  // Background Music
  // General Soundtrack
  synth = new p5.PolySynth();
  for (let i = 0; i < synth.audiovoices.length; i++) {
    let voice = synth.audiovoices[i];
    voice.oscillator.setType(`triangle`);
  }

  // Mic Input
  mic = new p5.AudioIn();
  mic.start();

  // Frog
  let x = width/2;
  let y = 3*height/4;
  let positionX = width/2;
  let positionY = 3*height/4;
  frog = new Frog(x, y, positionX, positionY);

  // Compasses
  for (let i = 0; i < numCompasses; i ++){
  let x = random(0, width);
  let y = random(0, height);
  // Avoid overlapping between Frog and Compass(es)
  while(dist(x, y, frog.x, frog.y) < frog.height){
    x = random(0, width);
    y = random(0, height);
  }
  let positionX = x;
  let positionY = y;
  let size = random(70, 160);
  let compass = new Compass(x, y, positionX, positionY, size, frog);
  compasses.push(compass);
}
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // Mic Input pushing away Needles
  let level = mic.getLevel();

  // Frog
  frog.display();
  frog.grow();

  // Compass(es)
  for (let i = 0; i < compasses.length; i++){
    let compass = compasses[i];
    compass.update(frog, level);
  }

}

function playNextNote() {
  // PLay noyes
  let note = notes[currentNote];
  synth.play(note, 0.1, 1, 1);
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}



function success(){
  console.log(`success`);
  clearInterval(interval);
  interval = undefined;                      // Object????
}

// p5 Events
function mousePressed() {
  // Check music sin't already playing
  if (interval === undefined) {
    interval = setInterval(playNextNote, 500);
  }
}

function keyPressed(){
  for (let i = 0; i < compasses.length; i++){
    let compass = compasses[i];
    compass.keyPressed();
    setTimeout(success, 5000);                      // Object????
  }
}
