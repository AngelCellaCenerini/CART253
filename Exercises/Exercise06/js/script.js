"use strict";

/**************************************************
Exercise 06: "Make Some Noise!" / Intended as Level for Final Project
Template p5 project by CART253 Course
Angel Cella Cenerini

User will guide displyed object(s) through the tone of their voice in order to avoid hitting the orange line. Three possible endings.
**************************************************/
let myFontA;
let myFontB;

// Level State
// Timer - User can surpass level without necessarily win it
let timer = 50;
// Soundtrack
let synth;
let notes = [`C#1`, `A1`, `Ab4`, `Bb4`, `Db4`];
let interval;

// Winged Creatures
let creatures = [];
let numVioletCreatures = 1; // Might use more in the final project
let numBlueCreatures = 1;
let numGreenCreatures = 1;

//Mic Input
let mic;

// Declaring Gravity
let gravityForce = 0.002;

// "POTS" Buttons
let button = {
  x: 0,
  y: 0,
  width: 300,
  height: 150,
  radius: 15
};

// Tips Table - Appears/disappears when User presses SHIFT
let tipsTable = {
  x: 0,
  y: 0,
  size: 600,
  active: false
}
//

// Tips: Ordered Sequence      - might be too cryptict, feedback is more than welcome pls!
let cues = [
  ``,
  `1. What a lovely keyboard you have there,
  lying on your desk.`,
  `2. I am flickering.`,
  `3. Don't read me like that.`,
  `4. Try me backwards.`,
  `5. Did you get it yet? Type me!`
];
// Guessing Answer ("stop")
let currentIndex = 0;
// Word User has to type in order to surpass level
let answer = `stop`;
// Keeping Track of User's Input
let currentInput = ``;
//

// States (will be slightly modified for Final Project)
let state = `intro` // Intro, Level, Pass, Success

function preload(){
  myFontA = loadFont('assets/AnonymousPro-Regular.otf');
  myFontB = loadFont('assets/BigShouldersStencilDisplay-Regular.otf');
}

// setup()
//
// General Settings + Creating Creature Objects
function setup() {
createCanvas(windowWidth, windowHeight);
// Graphics
rectMode(CENTER);
textFont(myFontA);
textSize(70);
textAlign(CENTER, CENTER);
// Sounds
userStartAudio();
// Soundtrack
synth = new p5.PolySynth();
  for (let i = 0; i < synth.audiovoices.length; i++) {
    let voice = synth.audiovoices[i];
    voice.oscillator.setType(`triangle`);
  }
// Mic Input
mic = new p5.AudioIn();
mic.start();

// Violet Creature - could be subjected to change
for(let i = 0; i < numVioletCreatures; i ++){

  let x = random(11*width/25, 14*width/25,);
  let y = random(height/6, height/2);
  let violetCreature = new VioletCreature(x, y);
  creatures.push(violetCreature);
}

// Blue Creature - could be subjected to change
for(let i = 0; i < numBlueCreatures; i ++){

  let x = random(11*width/25, 14*width/25,);
  let y = random(height/6, height/2);
  let blueCreature = new BlueCreature(x, y);
  creatures.push(blueCreature);
}

// Green Creature - could be subjected to change
for(let i = 0; i < numGreenCreatures; i ++){

  let x = random(11*width/25, 14*width/25,);
  let y = random(height/6, height/2);
  let greenCreature = new GreenCreature(x, y);
  creatures.push(greenCreature);
}

}

// draw()
//
// States: Intro, Level, Pass, Success
function draw() {
  background(0);

// Intro
if (state === `intro`){
   textIntro();
}
//

// Level
else if (state === `level`){

     // Mic Input Lifts Creatures
     let level = mic.getLevel();
     let liftAmount = map(level, 0, 1, - 1, -15);

     // Winged Creatures
     for(let i = 0; i < creatures.length; i ++){
     let creature = creatures[i];
     if (creature.active){
       creature.move();
       creature.lift(liftAmount);
       creature.constraining();
       creature.gravity(gravityForce);
       creature.display();
       creature.checkImpact();
     }
     }

     orangeLine();

     delimitingWalls(); // white

     // Flickering White and Black Buttons
     crypticButtons();

     // Display Tips Table - User can open/close table containing cues, if necessary
     tips();

     // Check which Keys User is typing
     checkInputProgress();

     // Check if any of the Creatures fall below Orange Line
     checkFail();

     }
//

// Pass - User  fails to guess the word in time
else if (state === `pass`){
  textPass();
}
//

// Success - User guesses Word and Achives Item
else if (state === `success`){
  textSuccess();
}
//

}


// Functions
// Intro State
function textIntro(){
  // (White) Title and Instructions
  push();
  fill(255);
  textSize(50);
  text(`Final Project: 1/7 Level Draft`, width/2, height/4);
  textSize(20);
  text(`Use your voice to uplift the creatures so that they don't fall below the orange line.
  If you have the time, try even surpassing the level.
  Press SPACEBAR anytime to open the Tips Table.

  You will be automatically brought back to the Title Screen in case you fail to save the creatures.

  Press ENTER to start.`, width/2, height/2);
  pop();
}
//

// Level State

function levelCountdown(){
  // Level Countdown (50 sec) - amount may change; current version has to be tested
  if ((frameCount % 60 === 0) && (timer > 0) && (state === `level`)){
    timer--;
  }
  if ( timer === 0 ){
    state === `pass`;
  }
}


function playRandomNote(){
  // Play Notes Randomly
  let note = random(notes);
  synth.play(note, 1, 1, 1);
}

function orangeLine(){
  // Orange Line
  push();
  stroke(255, 151, 46);
  strokeWeight(4);
  line(width/3, 5*height/7, 2*width/3, 5*height/7);
  pop();
}

function delimitingWalls(){
  // White Lines/Walls
  push();
  stroke(255);
  strokeWeight(15);
  line(width/3, 0, width/3, height);
  line(2*width/3, 0, 2*width/3, height);
  strokeWeight(8);
  line(8*width/25, 0, 8*width/25, height);
  line(17*width/25, 0, 17*width/25, height);
  pop();
}

function crypticButtons(){
  // Cryptict Buttons
  // Positive Space
  button.x = width/6;
  button.y = height/2;

  push();
  noStroke();
  fill(255);
  rect(button.x, button.y, button.width, button.height, button.radius, button.radius, button.radius, button.radius);
  pop();
  // Black Text
  push();
  textFont(myFontB);
  fill(random(0, 255));
  text(`POTS`, width/6, height/2);
  pop();

  // Negative Space
  button.x = 5*width/6;
  button.y = height/2;

  push();
  stroke(255);
  strokeWeight(8);
  noFill();
  rect(button.x, button.y, button.width, button.height, button.radius, button.radius, button.radius, button.radius);
  pop();
  // White Text
  push();
  textFont(myFontB);
  fill(random(0, 255));
  text(`POTS`, 5*width/6, height/2);
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
   fill(255, 255, 255, 120);
   rect(tipsTable.x, tipsTable.y, tipsTable.size);
   // Display Tips Table White Text
   fill(255);
   textAlign(CENTER, LEFT);
   textSize(20);
   text(cues[currentIndex], width/2, height/2);
   textSize(15);
   text(`Click to continue >>`, 2*width/5, 4*height/5);
   pop();
}

function checkInput() {
  // Converting Input to Lower Case
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if the Converted Input corrisponds to Answer
  if (lowerCaseInput === answer) {
    state = `success`;
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

function checkFail(){
  // Check if any Creature falls below Orange Line
  for (let i = 0; i < creatures.length; i ++){
    let creature = creatures[i];
    if (!creature.active){
      state = `intro`;
      synth.dispose();
    }
  }
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
    if (interval === undefined) {
      interval = setInterval(playRandomNote, 500);
    }
    else {
      clearInterval(interval);
      interval = undefined;
    }
  }

  else if (keyCode === 32 && state === `level`){
    // Tips Table appearing/disappearing when User presses SHIFT
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

function mousePressed(){
  if (state === `level`){
    currentIndex = currentIndex + 1;
    if (currentIndex === cues.length){
        currentIndex = 0;
    }
  }
}
//
