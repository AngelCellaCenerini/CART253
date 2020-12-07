"use strict";

/**************************************************
Project02: Level 02 Draft
Template p5 project by CART253 Course


Here is a description of this template p5 project.
**************************************************/
// level
// Timer
let timer = 0;
let timerLevel = 40;
// Moon(s)
let moons = [];
let redMoon;
let blueMoon;

// School of fish
let school = [];
let numberFish = 5;

// Wave(s)
let wave;

// Sound
let synth;
let notes = [`F5`, `G4`, `Ab3`];
let currentNote = 0;
let interval;
// Eating Soundtrack
let oscillator;

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

// States
let state = `intro`; // Intro, Level, Pass, Success

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
  // Eating Soundtrack
  oscillator = new p5.Oscillator(400, `sine`);
  oscillator.amp(0.05);



  // Create Red Moon
  let x = 0;
  let y = height/3;
  let positionX = 0;
  let positionY = height/3;
  let chaseX;
  let chaseY = positionY;
  redMoon = new RedMoon (x, y, positionX, positionY, chaseX, chaseY);
  redMoon.chaseX = redMoon.x + redMoon.size/3;
  moons.push(redMoon);

  // Create Blue Moon
  x = width;
  y = height/3;
  positionX = width;
  positionY = height/3;
  chaseX = undefined;
  chaseY = positionY;
  blueMoon = new BlueMoon (x, y, positionX, positionY, chaseX, chaseY);
  blueMoon.chaseX = blueMoon.x - blueMoon.size/3;
  moons.push(blueMoon);


  // Create Water Waves
  x = mouseX;
  y = mouseY;
  wave = new Wave (x, y);

  // Create School
  for(let i = 0; i < numberFish; i ++){
    x = random(width/4, 9*width/10);
    y = random(height/9, 10*height/11);
    let moon = random(moons);
    // let wave = wave; //???????????
    let fish = new Fish (x, y, moon);
    school.push(fish);
  }



}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // Intro
if (state === `intro`){
   textIntro();
}

// Level
else if (state === `level`){

  // Eating Soundtrack
  // Random Value
  let r = random(0, 1);
  // Map to Frequency Range
  let newFreq = map(r, 0, 1, 240, 480);
  oscillator.freq(newFreq);

  levelCountdown();

  for(let i = 0; i < moons.length; i++){
    let moon = moons[i];
    moon.display(moon);
    moon.move();
    // moon.checkPassEnding(moon);
    if(!moon.active){
      for(let j = 0; j < moons.length; j++){
        let otherMoon = moons[j];
        if(otherMoon !== moon && !otherMoon.active){
         state = `intro`;
        }
      }
    }
  }


  for(let i = 0; i < school.length; i++){
    let fish = school[i];
    fish.display();
    fish.rotate();
    fish.chase();
    fish.eat();
  }


    wave.grow();
    wave.display();

    // Display Tips Table - User can open/close table containing cues, if necessary
    tips();

  }

// Pass - User  fails to solve puzzle
else if (state === `pass`){
textPass();
}

// Success - User solves puzzle and achives Item
else if (state === `success`){
textSuccess();
}

}

// Functions
//
// Intro State
function textIntro(){
  // (White) Title and Instructions
  push();
  fill(255);
  textSize(50);
  text(`Final Project: 2/7 Level Draft`, width/2, height/4);
  textSize(20);
  text(`  Use your voice to grab the eye's attention; don't let it dart around for too long!
  If you have the time, try even surpassing the level.
  Press SPACEBAR anytime to open the Tips Table.

  You will be automatically brought back to the Title Screen in case you fail the level.

  Press ENTER to start.`, width/2, height/2);
  pop();
}

// Level
function levelCountdown(){
  // Level Countdown (50 sec) - amount may change; current version has to be tested
  if ((frameCount % 60 === 0) && (timer > 0) && (state === `level`)){
    timer--;
  }
  if ( timer === 0 ){
    state = `intro`;
    timer = 0;
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


// Pass State
function textPass(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`You did good.
Yet, not good enough.`, width/2, height/3);
  textSize(20);
  text(`Press ???? to proceed to the next level.
(That's a lie; the next level doesn't exist yet).`, width/2, 2*height/3);
  pop();
}
//

// Success State
function textSuccess(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`Success! You achieved ???? (yet to be decided).`, width/2, height/2);
  textSize(20);
  text(`Press ???? to proceed to the next level.
  (That's a lie; the next level doesn't exist yet).`, width/2, 2*height/3);
  pop();
}
//

// p5 Events
function mousePressed() {
  if(state === `level`){
    if (interval === undefined) {
      interval = setInterval(playNextNote, 500);
    }
  }


  let createdWave = wave.mousePressed();
  if(createdWave){
    for(let i = 0; i < school.length; i++){
      let fish = school[i];
      fish.target = wave;
    }
  }


  for(let i = 0; i < school.length; i++){
    let fish = school[i];
    if(fish.isClicked()){
      wave.active = false;
      for(let j = 0; j < school.length; j++){
        let otherFish = school[j];
        if(otherFish !== fish){
          otherFish.target = fish;
          fish.speed = 0;  // targeted fish frezzes (cretaes better experience this way)
          clearInterval(interval);
          interval = undefined;
          oscillator.start();
        }
      }
      break;
    }
  }

  if (tipsTable.active){
  currentIndex = currentIndex + 1;
  if (currentIndex === cues.length){
      currentIndex = 0;
  }
}

}

function keyPressed(){
  if (keyCode === 13 && state === `intro`){
    state = `level`;
    timer = timerLevel;
  }
  if (keyCode === 32 && state === `level`){
  // Tips Table appearing/disappearing when User presses SPACEBAR
  if(tipsTable.active === false){
     tipsTable.active = true;
  }
  else {
     tipsTable.active = false;
  }
}
}
