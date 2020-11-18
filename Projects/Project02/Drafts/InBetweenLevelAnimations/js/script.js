"use strict";

/**************************************************
Project02 Draft: In Between Levels Animation
Angel Cella Cenerini
Template p5 project by CART253 Course


If User successfully surpasses level, they achieve one of the collectable items; this will also trigger a "cutscene" of sorts
**************************************************/
let mirror;

let lights = [];

let pinkLight;

let state = `Lv01`; // Lv01, Lv02, Lv03, Lv04, Lv05

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  let x = random(0, width);
  let y = random(0, height);
  let pinkLight = new PinkLight(x, y);
  lights.push(pinkLight);

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
  mirror.tremble();
  mirror.move();

  light.move();
  light.wrap();
  light.move();



  // if (state === `Lv01`){
  //
  //
  // }




}
