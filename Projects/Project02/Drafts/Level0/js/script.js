"use strict";

/**************************************************
Project02 Draft: Level0
Template p5 project by CART 253

User must
**************************************************/
let projector = {
  x: undefined,
  y: undefined,
  width: 50,
  height: 80,
  radius: 5
}
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER);
noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // White Frame
  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(width/2, height/2, 1100, 700);
  pop();

  // Eye Red Corners
  push();
  fill(255, 69, 0);
  triangle(width/2 - 127, height/2, width/2, height/2 - 68, width/2, height/2 + 68);
  triangle(width/2 + 127, height/2, width/2, height/2 - 68, width/2, height/2 + 68);
  pop();

  // Eye
  push();
  fill(255);
  ellipse(width/2, height/2, 170);
  pop();

  // Pupil
  push();
  fill(58, 255, 220);
  ellipse(width/2, height/2, 60);
  pop();

  // Pupil Ring
  push();
  noFill();
  stroke(255, 204, 0);
  strokeWeight(2);
  ellipse(width/2, height/2, 20);
  pop();

  // Laser Lights Projectors
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

}
