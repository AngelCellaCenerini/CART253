"use strict";

/**************************************************
Project02 Draft: Level0
Angel Cella Cenerini
Template p5 project by CART 253

User must grab and keep eye's attention to pass level; user must switch off lights to surpass level.
**************************************************/
// Timer
let timer = 50;

//Mic Input
let mic;

// Soundtrack
let soundtrack;
let soundtrack2;
let angle = 0;
let angleIncrease = 0.25;

// White Frame
let frame = {
  x: 0,
  y: 0,
  width: 1100,
  height: 700
}

// Projector
let projectors = [];

// Eye
let eye;

// Tips Table - Appears/disappears when User presses SPACEBAR
let tipsTable = {
  x: 0,
  y: 0,
  size: 600,
  active: false
}
// TIPS
// 1. User has to shut off lights by clicking specific projector.
// 2. The sun rises in the East; when looking towards it("gaze"), we have the South at our right.
// Therefore, the correct projector to click is the one at the bottom of the white frame.
// This is less obvious than the previous level draft, for I would like for the levels to become more challenging overtime.
let cues = [
  ``,
  `1. S h u t   i t   o f f .`,
  `2. I stand to your right when you gaze at the rising sun.`,
];
// Scrolling Tips List
// Guessing Answer ("stop")
let currentIndex = 0;
// Word User has to type in order to surpass level
let answer = `stop`;
// Keeping Track of User's Input
let currentInput = ``;
//
// States
let state = `intro`; // Intro, Level, Pass, Success

// setup()
//
// Basic Set Up; Introducing Audio and Classes.
function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER);
noStroke();
userStartAudio();
textAlign(LEFT, RIGHT);

// Soundtrack
soundtrack = new p5.Oscillator(0, `tan`);
soundtrack2 = new p5.Oscillator(`triangle`);
soundtrack.amp(0.02);

// Mic Input
mic = new p5.AudioIn();
mic.start();

// Eye
let x = width/2;
let y = height/2;
let positionX = width/2;
let positionY = height/2;
eye = new Eye(x, y, positionX, positionY);


// Laser Lights Projectors
// Top Projector
x = width/2;
y = height/6;
let topProjector = new Projector(x, y);
projectors.push(topProjector);
// Bottom Projector
x = width/2;
y = 5*height/6;
let bottomProjector = new Projector(x, y);
projectors.push(bottomProjector);
// Left Projector
x = width/4;
y = height/2;
let leftProjector = new Projector(x, y);
projectors.push(leftProjector);
// Right Projector
x = 3*width/4;
y = height/2;
let rightProjector = new Projector(x, y);
projectors.push(rightProjector);

}

// draw()
//
// States, functions.
function draw() {
  background(0);

// Intro
if (state === `intro`){
   textIntro();
}

// Level
else if (state === `level`){

  levelCountdown();

  // Soundtrack
  angle += angleIncrease;
  let tanAngle = tan(angle);
  let newFreq = map(tanAngle, -1, 1, 420, 680);
  soundtrack.freq(newFreq);

  let randomValue = random(0, 1);
  let newFrequency = map(randomValue, 0, 1, 200, 300);
  soundtrack2.freq(newFrequency);


  // Laser Lights
  laserLights();

  // White Frame
  whiteFrame();

  // Mic Input Calling Eye back to Focus
  let level = mic.getLevel();

  // Eye
  eye.move();
  eye.restrict();
  eye.focus(level);
  eye.display();

  // Laser Light Projectors
  for (let i = 0; i < projectors.length; i ++){
  let projector = projectors[i];
  projector.display();
  }

  // Display Tips Table - User can open/close table containing cues, if necessary
  tips();

  // Check which Keys User is typing
       checkInputProgress();
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
//

//Level
function levelCountdown(){
  // Level Countdown (50 sec) - amount may change; current version has to be tested
  if ((frameCount % 60 === 0) && (timer > 0) && (state === `level`)){
    timer--;
  }
  if ( timer === 0 ){
    state === `pass`;
  }
}

function laserLights(){
  // Laser Lights
  for(let i=0; i<12;i++){
    let x1 = random(frame.x - frame.width/2, frame.x + frame.width/2);
    let y1 = random (frame.y - frame.height/2, frame.y + frame.height/2);
    let x2 = random(frame.x - frame.width/2, frame.x + frame.width/2);
    let y2 = random (frame.y - frame.height/2, frame.y + frame.height/2);
    push();
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);
    stroke(r, g, b);
    strokeWeight(4);
    line(x1,y1,x2,y2);
    pop();
  }

}

function whiteFrame(){
  // White Frame
  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  frame.x = width/2;
  frame.y = height/2;
  rect(frame.x, frame.y, frame.width, frame.height);
  pop();
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
   fill(0);
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
function keyPressed(){
  if (keyCode === 13 && state === `intro`){
    state = `level`;
    soundtrack.start();
    soundtrack2.start();
  }
  else if (keyCode === 32 && state === `level`){
  // Tips Table appearing/disappearing when User presses SPACEBAR
  if(tipsTable.active === false){
     tipsTable.active = true;
  }
  else {
     tipsTable.active = false;
  }
}
else if (keyCode === 8 && state === `level`) {
  // User Resets Inserted Input
  currentInput = ``;
}

}

function keyTyped() {
if (keyCode !== 13 && state === `level`){
  console.log(`typed`);
  currentInput += key;
}
}

function checkInput() {
  // Converting Input to Lower Case
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if the Converted Input corrisponds to Answer
  if (lowerCaseInput === answer) {
    for (let i = 0; i < projectors.length; i ++){
    let projector = projectors[i];
    projector.active = true;
    }
  }
  else {
    return false;
  }
}

function checkInputProgress(){
  // Current Input Settings
  push();
  fill(255);
  textSize(30);
  // Check if Word Inserted is Correct
  let correct = checkInput();
  // Display Current Input from User
  text(currentInput, width/2, 3*height/5);
  pop();
}

function mousePressed(){
  if (state === `level`){
    currentIndex = currentIndex + 1;
    if (currentIndex === cues.length){
        currentIndex = 0;
    }
  }

  // Laser Light Projector
  for (let i = 0; i < projectors.length; i ++){
  let projector = projectors[i];
  projector.mousePressed();
  }

}
//
