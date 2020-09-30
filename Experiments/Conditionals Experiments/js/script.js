/**************************************************
Experimenting with Conditionals - template by CART253 course
Angel Cella Cenerini

Here is a description of this template p5 project.
**************************************************/
//Declaring variables vua JS object
let circle ={
x: 0,
y: 250,
size: 140,
speed: 2
}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(130);
  push();
  noStroke();
  fill(240,30,289);
  circle.x = circle.x + circle.speed;
  if(circle.x>width/2){
    circle.speed = -circle.speed;
  }
  else {
    circle.speed= circle.speed;
  }
  ellipse(circle.x,circle.y,circle.size);
  pop();
}
