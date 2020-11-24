"use strict";

/**************************************************
Project02: Level 02 Draft
Template p5 project by CART253 Course


Here is a description of this template p5 project.
**************************************************/
// Moon(s)
let moons = [];
let redMoon;
let blueMoon;

// School of fish
let school = [];
let fish;

// Wave(s)
let wave;

// Sound
let synth;
let notes = [`F5`, `G4`, `Ab3`];
let currentNote = 0;
let interval;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  userStartAudio();

  // Soundtrack
  synth = new p5.PolySynth();

  // Create Red Moon
  let x = 0;
  let y = height/3;
  let positionX = 0;
  let positionY = height/3;
  redMoon = new RedMoon (x, y, positionX, positionY);
  moons.push(redMoon);

  // Create Blue Moon
  x = width;
  y = height/3;
  positionX = width;
  positionY = height/3;
  blueMoon = new BlueMoon (x, y, positionX, positionY);
  moons.push(blueMoon);

  // Create School
  x = random(width/4, 9*width/10);
  y = random(height/9, 10*height/11);
  fish = new Fish (x, y);
  school.push(fish);

  // Create Water Waves
  x = mouseX;
  y = mouseY;
  wave = new Wave (x, y);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for(let i = 0; i < moons.length; i++){
    let moon = moons[i];
    moon.display();
    moon.move();
  }

  for(let i = 0; i < school.length; i++){
    let fish = school[i];
    fish.display();
    fish.rotate();
    // fish.chase(moon);
    // fish.eat(moon);
    fish.react();
  }

    wave.appear();
    wave.grow();
    wave.display();


}

function mousePressed() {
  if (interval === undefined) {
    interval = setInterval(playNextNote, 500);
  }
  else {
    clearInterval(interval);
    interval = undefined;
  }
}

function playNextNote() {
  // Chose the note at the current position
  let note = notes[currentNote];
  // Play it
  synth.play(note, 0.1, 0, 0.1);
  // Increase the current position and go back to 0 when we reach the end
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}
