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
  }


  // // Moon
  // push();
  // fill(246, 73, 76);
  // ellipse(0, height/3, 450);
  // pop();
  //
  // // Moon Spots
  // push();
  // fill(206, 53, 56);
  // ellipse(112, height/3, 50);
  // ellipse(56, height/3, 25);
  // ellipse(90, height/3 - 112, 15);
  // ellipse(50, height/3 + 112, 75, 60);
  // pop();
  //
  // // Water Reflection
  // push();
  // fill(255, 253, 243);
  // rect(0, height/3 + 350, 300, 15, 5, 5, 5, 5);
  // rect(0 + 56, height/3 + 400, 100, 15, 5, 5, 5, 5);
  // rect(0, height/3 + 475, 150, 15, 5, 5, 5, 5);
  // pop();

}
