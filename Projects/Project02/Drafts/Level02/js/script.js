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

// Tips Table - Appears/disappears when User presses SPACEBAR
let tipsTable = {
  x: 0,
  y: 0,
  size: 600,
  active: false
}
// TIPS
// Obviously, the fish are going for the moons; that is beacuse they're hungry.
// Yet, they're not really after the moons ('confused'). There are only two types of elements on screen:
// the fish, and the moons. If it's not the latter...try clicking the former. It's part of mother nature.
let cues = [
  ``,
  `1. They're hungry.`,
  `2. They're confused; they don't really want the moons.`,
  `3. They're  h u n g r y .`,
  `4. If they're not after the moons...`,
  `5. Don't be scared to play with Mother Nature.`,
];
// Scrolling Tips List
let currentIndex = 0;

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

    // Display Tips Table - User can open/close table containing cues, if necessary
    tips();
}

// Level
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

function tips(){
   // Tips Table to guess mystery word
   if(!tipsTable.active){
     return;
   }

   // Positioning Tips Table
   tipsTable.x = width/2;
   tipsTable.y = height/2;

   push();
   noStroke();
   // Diplay Transparent Tips Table
   fill(255, 255, 255, 150);
   rect(tipsTable.x, tipsTable.y, tipsTable.size);
   // Display Tips Table White Text
   fill(255);
   textAlign(CENTER, CENTER);
   textSize(20);
   text(cues[currentIndex], width/2, height/2);
   fill(255);
   textSize(15);
   text(`Click for more tips >>`, 2*width/5, 4*height/5);
   pop();
}
//

function mousePressed() {
  if (interval === undefined) {
    interval = setInterval(playNextNote, 500);
  }

  if (tipsTable.active){
  currentIndex = currentIndex + 1;
  if (currentIndex === cues.length){
      currentIndex = 0;
  }
}
}

function keyPressed(){
  if (keyCode === 32){
  // Tips Table appearing/disappearing when User presses SPACEBAR
  if(tipsTable.active === false){
     tipsTable.active = true;
  }
  else {
     tipsTable.active = false;
  }
}
}
