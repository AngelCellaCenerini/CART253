"use strict";

/**************************************************
Template p5 by CART253 Course
ANgel Cella Cenerini

Prototype for Project 02: Testing "Playing Melody" Simulation
User, guided by "script", plays sounds(corresponding to lights) and compose """melody"""
**************************************************/

// Declaring States
let state = `simulation`; // Intro, Simulation
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();
  textAlign(CENTER, CENTER);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `intro`) {
    textIntro();
  } else if (state === `simulation`) {
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
}
