/**************************************************
Project02 - Draft: Level03
Angel Cella Cenerini
Template p5 project by CART253 course

Here is a description of this template p5 project.
**************************************************/

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

  // Frog Chin
  push();
  fill(254, 254, 191);
  rect(width/2 + 26, 3*height/4 + 42, 140, 130, 5, 5, 5, 5);
  pop();

  // Frog Body
  push();
  translate(width/2, 3*height/4);
  rotate(PI / 4.0);
  fill(79, 124, 247);
  rect(0, 0, 120, 190, 5, 5, 5, 5);
  pop();

  // Frog Leg
  push();
  fill(70, 104, 238);
  triangle(width/2 - 117, 3*height/4 + 108, width/2 - 182, 3*height/4 - 105, width/2 + 13, 3*height/4 + 108 );
  pop();

  // Frog Eye
  push();
  fill(173, 170, 255);
  ellipse(width/2 + 32, 3*height/4 - 30, 40);
  fill(0);
  rect(width/2 + 32, 3*height/4 - 30, 20, 5);
  pop();

  // Frog Cheek
  push();
  fill(255, 153, 51);
  ellipse(width/2 + 26, 3*height/4 + 17.5, 50);
  pop();

  // Hole
  // push();
  // fill(255, 135, 117);
  // ellipse(width/2 + 26, 3*height/4 + 21, 50);
  // fill(0);
  // ellipse(width/2 + 26, 3*height/4 + 17.5, 50);
  // pop();

}
