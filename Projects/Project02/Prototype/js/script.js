"use strict";

/**************************************************
Template p5 by CART253 Course
ANgel Cella Cenerini

Prototype for Project 02: Testing "Playing Melody" Simulation
User, guided by "script", plays sounds(corresponding to lights) and compose """melody"""
**************************************************/

// Declaring States
let state = `intro`; // Intro, Simulation
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();
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
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`Project 02: Prototype - Playing Melody`, width/2, height/2);
  textSize(20);
  text(`Press the keys as instructed by the "script". Press ENTER to start`, width/2, 3*height/5);
  pop();
}
//

// P5 Events
function keyPressed(){
  if (state === `intro` && keyCode === 13){
    state = `simulation`;
  }
}
