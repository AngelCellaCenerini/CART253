"use strict";

/**************************************************
Project02 Draft: In Between Levels Animation
Angel Cella Cenerini
Template p5 project by CART253 Course


If User successfully surpasses level, they achieve one of the collectable items; this will also trigger a "cutscene" of sorts
**************************************************/
let mirror;
// let handleY;
// let shadowY;
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);



}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  // ???????????????????????????????????????????????????????????????????????????????????????
  let x = width/2;
  let y = height/2;
  let handleY = 2*height/3;
  let shadowX = width/2;
  let shadowY = 7*height/8;
  let mirror = new Mirror(x, y, handleY, shadowX, shadowY);

  mirror.display();
  mirror.float();



}
