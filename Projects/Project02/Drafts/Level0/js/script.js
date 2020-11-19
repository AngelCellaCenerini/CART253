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
let projector = {
  x: 0,
  y: 0,
  width: 50,
  height: 80,
  radius: 5
}

// Eye
let eye;

// Tips Table - Appears/disappears when User presses SPACEBAR
let tipsTable = {
  x: 0,
  y: 0,
  size: 500,
  active: false
}
let cues = [
  ``,
  `1. S h u t   i t   o f f .`,  // User has to shut off lights by clicking specific projector
  `2. I stand to your right when you gaze at the rising sun.`,  // The sun rises in the East; when looking towards it("gaze"),
  // we have the South at our right. The correct projector to click is the one at the bottom of the white frame.
  // This is less obvious than the previous level draft, for I would like for the levels to become more challenging.
];

// States
let state = `intro`; // Intro, Level, Pass, Success

// setup()
//
// Description of setup() goes here.
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


// // Laser Lights Projectors
// // Top Projector
// let x = width/2;
// let y = height/6;
// let horizontalProjector = new HorizontalProjector(x, y);
// projectors.push(horizontalProjector);
// // Bottom Projector
// let x = width/2;
// let y = 5*height/6;
// let horizontalProjector = new HorizontalProjector(x, y);
// projectors.push(horizontalProjector);
// // Left Projector
// let x = width/4;
// let y = height/2;
// let verticalProjector = new VerticalProjector(x, y);
// projectors.push(verticalProjector);
// // Right Projector
// let x = 3*width/4;
// let y = height/2;
// let verticalProjector = new VerticalProjector(x, y);
// projectors.push(verticalProjector);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  
// Intro
if (state === `intro`){
   textIntro();
   if(soundtrack.play === true && soundtrack2.play === true){ //?????????????
     soundtrack.stop();
     soundtrack2.stop();
   }
}
// Level
else if (state === `level`){

  levelCountdown();

  // Display Tips Table - User can open/close table containing cues, if necessary
  tips();

  // Soundtrack
  angle += angleIncrease;
  let tanAngle = tan(angle);
  let newFreq = map(tanAngle, -1, 1, 420, 680);
  soundtrack.freq(newFreq);

  let randomValue = random(0, 1);
  let newFrequency = map(randomValue, 0, 1, 200, 300);
  soundtrack2.freq(newFrequency);


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

  // White Frame
  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  frame.x = width/2;
  frame.y = height/2;
  rect(frame.x, frame.y, frame.width, frame.height);
  pop();

  // Mic Input Calling Eye back to Focus
  let level = mic.getLevel();

  // Eye
  eye.move();
  eye.restrict();
  eye.focus(level);
  eye.display();

  // Laser Light Projector
  // for (let i = 0; i < projectors.length; i ++){
  // let projector = projectors[i];
  // projector.display();
  // }


  push();
  stroke(0);
  strokeWeight(2);
  fill(255);
  projector.x = width/4;
  projector.y = height/2;
  rect(projector.x, projector.y, projector.width, projector.height, projector.radius, projector.radius, projector.radius, projector.radius);
  projector.x = 3*width/4;
  projector.y = height/2;
  rect(projector.x, projector.y, projector.width, projector.height, projector.radius, projector.radius, projector.radius, projector.radius);
  projector.x = width/2;
  projector.y = height/6;
  rect(projector.x, projector.y, projector.height, projector.width, projector.radius, projector.radius, projector.radius, projector.radius);
  projector.x = width/2;
  projector.y = 5*height/6;
  rect(projector.x, projector.y, projector.height, projector.width, projector.radius, projector.radius, projector.radius, projector.radius);
  pop();

  checkProjectorChoice();
}
// Pass - User  fails to solve the puzzle
else if (state === `pass`){
  textPass();
}

// Success - User solves puzzle and achives Item
else if (state === `success`){
  textSuccess();
}

}

// Functions
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
   fill(255, 255, 255, 120);
   rect(tipsTable.x, tipsTable.y, tipsTable.size);
   // Display Tips Table White Text
   fill(255);
   textAlign(CENTER, CENTER);
   textSize(20);
   text(cues[currentIndex], width/2, height/2);
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

function checkProjectorChoice(){
  // Check which Projector User selects
  let d1 = dist(mouseX, mouseY, projector.x, projector.y);
  let d2 = dist(mouseX, mouseY, projector.x, projector.y);   //Solve issue with projectors first
  if ((d1 < projector.size/2) && (state === `level`)){ // mouseX && mouseY?
    state = `intro`;
  }
  else if((d2 < projector.size/2) && (state === `level`)){
    state = `success`;
  }
}
// //

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
}

function mousePressed(){
  if (state === `level`){
    currentIndex = currentIndex + 1;
    if (currentIndex === cues.length){
        currentIndex = 0;
    }
  }
}
