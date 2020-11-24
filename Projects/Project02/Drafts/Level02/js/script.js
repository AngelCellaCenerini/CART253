"use strict";

/**************************************************
Project02: Level 02 Draft
Template p5 project by CART253 Course


Here is a description of this template p5 project.
**************************************************/
let moons = [];
let redMoon;
let blueMoon;
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);

  let x = 0;
  let y = height/3;
  let positionX = 0;
  let positionY = height/3;
  redMoon = new RedMoon (x, y, positionX, positionY);
  moons.push(redMoon);

  x = width;
  y = height/3;
  positionX = width;
  positionY = height/3;
  blueMoon = new BlueMoon (x, y, positionX, positionY);
  moons.push(blueMoon);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for(let i = 0; i < moons.length; i++){
    let moon = moons[i];
    moon.display();
    moon.move();
  }


}
