/**************************************************
Variables Experiments
Angel Cella Cenerini

Experimenting with week03 lessons
**************************************************/

// setup()
//
// Trying customed Variables

let circle = {
  x: 100,
  size:50,
  speed: 1,
  acceleration:0,
  fill : 200
};



// Description of setup() goes here.
function setup() {


createCanvas(500,500);
background(255,0,0);
}


// draw()
//
// Description of draw() goes here.
function draw() {

//playing with built-in Variables
//ellipse(60,80,mouseY,mouseX);
//fill(0);
//ellipse(mouseX, mouseY, 100,100);
//circleSize += circleSpeed;
//circleSpeed += circleAcceleration;


circle.x += circle.speed;
circle.size = map(mouseX, 0, width,20,300);
circle.speed += circle.acceleration;
ellipse(circle.x,250,circle.size);




}
