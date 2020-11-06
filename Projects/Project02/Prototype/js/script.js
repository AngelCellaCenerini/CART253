"use strict";

/**************************************************
Template p5 by CART253 Course
ANgel Cella Cenerini

Prototype for Project 02: Testing "Playing Melody" Simulation
User, guided by "script", plays sounds(corresponding to lights) and compose """melody"""
**************************************************/
// MP3 FIles - Chiming Sounds
let chime1SFX;
let chime2SFX;
let chime3SFX;
let chime4SFX;


let correctKeySequence = [65, 87, 68, 83];
let inputKey = [];
// Declaring array (storing all sorts of lights)

let lights = [];
let numAtmosphericLights = 10;
let numBiggerAtmosphericLights = 6;
let numBlueLights = 1;

// Declaring States
let state = `simulation`; // Intro, Simulation


function preload(){
  chime1SFX = loadSound('assets/sounds/chime1.mp3');
  chime2SFX = loadSound('assets/sounds/chime2.mp3');
  chime3SFX = loadSound('assets/sounds/chime3.mp3');
  chime4SFX = loadSound('assets/sounds/chime4.mp3');
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();
  textAlign(CENTER, CENTER);

  // Creating all Light Classes
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
  // /\?????????
  for (let i = 0; i < numBlueLights; i ++){    ///???????
    let x = random(0, width);
    let y = random(0, height);
    let blueLight = new BlueLight(x, y, chime1SFX);
    lights.push(blueLight);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `intro`) {
    textIntro();
  } else if (state === `simulation`) {

    // Lights
    for (let i = 0; i < lights.length; i ++){
    let light = lights[i];
    light.move();
    light.display();
    light.savingFrame();
    }
  }

  if(inputKey.length === correctKeySequence.length){
      for(let i = 0; i < correctKeySequence.length; i ++){
        if(inputKey[i] !== correctKeySequence[i]){
        state = `intro`;
        }
      }
      console.log(`good`);
  }



}

// intro
function textIntro() {
  push();
  fill(255);
  textSize(30);
  text(`Project 02: Prototype - Playing Melody`, width/2, height/2);
  textSize(20);
  text(`Press the keys as instructed by the "script" to create a "melody". Press ENTER to start.`, width/2, 3*height/5);
  pop();
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

// P5 Events
function keyPressed(){
  if ((state === `intro`) && (keyCode === 13)){
    state = `simulation`;
  }
  else if ((state === `simulation`) && (keyCode === 27)){
    state = `intro`;
  }

  for (let i = 0; i < lights.length; i ++){
    let light = lights[i];
    light.keyPressed();
  }

  inputKey.push(keyCode);
  console.log(inputKey);
}
