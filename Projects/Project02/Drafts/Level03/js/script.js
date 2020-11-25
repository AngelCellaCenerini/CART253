/**************************************************
Project02 - Draft: Level03
Angel Cella Cenerini
Template p5 project by CART253 course

Here is a description of this template p5 project.
**************************************************/
let frog;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  let x = width/2;
  let y = 3*height/4;
  let positionX = width/2;
  let positionY = 3*height/4;
  frog = new Frog(x, y, positionX, positionY);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  frog.display();
  frog.grow();
  //
  // // Frog Chin
  // push();
  // fill(254, 254, 191);
  // rect(width/2 + 26, 3*height/4 + 42, 130, 130, 5, 5, 5, 5);
  // pop();
  //
  // // Frog Body
  // push();
  // translate(width/2, 3*height/4);
  // rotate(PI / 4.0);
  // fill(79, 124, 247);
  // rect(0, 0, 130, 210, 5, 5, 5, 5);
  // pop();
  //
  // // Frog Leg
  // push();
  // fill(70, 104, 238);
  // triangle(width/2 - 130, 3*height/4 + 105, width/2 - 148, 3*height/4 - 21, width/2 + 20, 3*height/4 + 105 );
  // fill(0);
  // rect(width/2, 3*height/4 + 115, 200, 20);
  // pop();
  //
  // // Frog Eye
  // push();
  // fill(173, 170, 255);
  // ellipse(width/2 + 32, 3*height/4 - 52, 40);
  // fill(0);
  // rect(width/2 + 32, 3*height/4 - 52, 25, 5);
  // pop();
  //
  // // Frog Cheek
  // push();
  // fill(255, 153, 51);
  // ellipse(width/2 , 3*height/4, 55);
  // pop();

  // Hole
  // push();
  // fill(255, 135, 117);
  // ellipse(width/2 + 26, 3*height/4 + 2, 55);
  // fill(0);
  // ellipse(width/2 + 26, 3*height/4, 55);
  // pop();

}
