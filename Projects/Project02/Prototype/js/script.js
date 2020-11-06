"use strict";

/**************************************************
Template p5 by CART253 Course
Angel Cella Cenerini

Prototype for Project 02: Testing "Playing Melody" Simulation
User, guided by "script", plays sounds(corresponding to lights) and composes """melody"""
**************************************************/
// MP3 FIles - Chiming Sounds
let chime1SFX;
let chime2SFX;
let chime3SFX;
let chime4SFX;

// Assembling "Melody" aka a Set Sequence of Keys for User to follow
let correctKeySequence = [65,65, 87, 83, 68, 68, 87, 83, 68, 68, 65, 83, 87];
let insertedKey = [];

// Declaring array (storing all sorts of lights)
let lights = [];
// Background lights - Floating around, no interactivity
let numAtmosphericLights = 12;
let numBiggerAtmosphericLights = 7;
// Interactive lights - currently 1 item per array, though more could be added for the final project
let numBlueLights = 1;
let numGreenLights = 1;
let numPinkLights = 1;
let numYellowLights = 1;

// Declaring States
let state = `intro`; // Intro, Simulation


function preload(){
  chime1SFX = loadSound('assets/sounds/chime1.mp3');
  chime2SFX = loadSound('assets/sounds/chime2.mp3');
  chime3SFX = loadSound('assets/sounds/chime3.mp3');
  chime4SFX = loadSound('assets/sounds/chime4.mp3');
}

// setup()
//
// General Settings, Introducing Classes
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  // Creating Light Subclasses
  // Atmospheric Lights
  for (let i = 0; i < numAtmosphericLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let atmosphericLight = new AtmosphericLight(x, y);
    lights.push(atmosphericLight);
  }
  // Bigger Atmospheric Lights
  for (let i = 0; i < numBiggerAtmosphericLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let biggerAtmosphericLight = new BiggerAtmosphericLight(x, y);
    lights.push(biggerAtmosphericLight);
  }
  // Blue Light(s)
  for (let i = 0; i < numBlueLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let blueLight = new BlueLight(x, y, chime1SFX);
    lights.push(blueLight);
  }
  // Green Light(s)
  for (let i = 0; i < numGreenLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let greenLight = new GreenLight(x, y, chime2SFX);
    lights.push(greenLight);
  }
  // Pink Light(s)
  for (let i = 0; i < numPinkLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let pinkLight = new PinkLight(x, y, chime3SFX);
    lights.push(pinkLight);
  }
  // Yellow Light(s)
  for (let i = 0; i < numYellowLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let yellowLight = new YellowLight(x, y, chime4SFX);
    lights.push(yellowLight);
  }
}
//
// /setup()

// draw()
//
// States, Lights, Sequence.
function draw() {
  background(0);

  if (state === `intro`) {
    textIntro();
    switchToSim();
  }

  else if (state === `simulation`) {

    push();
    fill(255, 255, 255, 50);
    rect(width/10, 2*height/5, width/8, 3*height/5);
    fill(255);
    textSize(20);
    textAlign(RIGHT);
    text(`Script:

    A
    A
    W
    S
    D
    D
    W
    S
    D
    D
    A
    S
    W`, width/10, 2*height/5);
    pop();


    // Lights
    for (let i = 0; i < lights.length; i ++){
    let light = lights[i];
    light.move(); // Overlapping effect is intentional
    light.display();
    light.growthDuration();
    }

    adherenceToScript();  // Check if User is following Script (Correct Key Sequence)
  }
  else if (state === `success`){
    textSuccess();
  }

  }
//
// /draw()

// Intro
// White Text
function textIntro() {
  push();
  fill(255);
  textSize(50);
  text(`Project 02: Prototype - Playing Melody`, width/2, height/3);
  textSize(20);
  text(`Press the keys as instructed by the "script" to create a "melody".
  If you don't, you will be automatically brought back to the Title Screen.
  CLICK to start.`, width/2, 3*height/5);
  pop();
}

function switchToSim(){
  if (mouseIsPressed){
    state = `simulation`;
  }
}
//

// Simulation
function textSimulation(){
  push();
  fill(255);
  textSize(18);
  text(`Press ESC anytime to return to Title Screen.`, width/2, 8*height/9);
  pop();
}

function adherenceToScript(){
  // Check if User is following Script (Key Sequence stored in Array)
  if (insertedKey.length === correctKeySequence.length){
      for(let i = 0; i < correctKeySequence.length; i ++){
        if(insertedKey[i] !== correctKeySequence[i]){
        state = `intro`;
        }
        else{
          state = `success`;
        }
      }
  }
}

// Ending - Success
function textSuccess(){
  push();
  fill(255);
  textSize(50);
  text(`let breathtakingEnding = undefined;`, width/2, height/3);
  textSize(20);
  text(`Success! You correctly followed the script; hopefully your ears aren't bleeding after that.
  Press ESC to return to Title Screen.`, width/2, 3*height/5);
  pop();
}

// P5 Events
function keyPressed(){

  if ((state === `simulation`|| state === `success`) && (keyCode === 27)){
    state = `intro`;
  }

  for (let i = 0; i < lights.length; i ++){
    let light = lights[i];
    light.keyPressed();
  }
  insertedKey.push(keyCode); // "Storing" keys pressed by User
}
