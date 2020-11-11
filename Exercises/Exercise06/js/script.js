"use strict";

/**************************************************
Exercise 06: "Make Some Noise!"
Template p5 project by CART253 Course
Angel Cella Cenerini

User will guide displyed object(s) through the tone of their voice in order to avoid hitting the obstacles.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);

// White Lines
push();
stroke(255);
strokeWeight(15);
line(width/3, 0, width/3, height);
line(2*width/3, 0, 2*width/3, height);
strokeWeight(8);
line(8*width/25, 0, 8*width/25, height);
line(17*width/25, 0, 17*width/25, height);
pop();

// Winged Creature

// Wings
// Left Wing
push();
noStroke();
fill(189, 195, 248);
triangle(width/2 - 60, height/2 + 10, width/2 - 35, height/2 - 30, width/2, height/2);
pop();

push();
noStroke();
fill(235, 217, 255);
triangle(width/2 - 90, height/2 - 10, width/2 - 35, height/2 - 30, width/2, height/2);
pop();

push();
noStroke();
fill(255);
triangle(width/2 - 108, height/2 - 30, width/2 - 35, height/2 - 30, width/2, height/2);
pop();

// Right Wing
push();
noStroke();
fill(189, 195, 248);
triangle(width/2 + 60, height/2 + 10, width/2 + 35, height/2 - 30, width/2, height/2);
pop();

push();
noStroke();
fill(235, 217, 255);
triangle(width/2 + 90, height/2 - 10, width/2 + 35, height/2 - 30, width/2, height/2);
pop();

push();
noStroke();
fill(255);
triangle(width/2 + 108, height/2 - 30, width/2 + 35, height/2 - 30, width/2, height/2);
pop();

// Body
push();
noStroke();
fill(255);
ellipse(width/2, height/2, 60);
fill(0);
ellipse(width/2, height/2 - 15, 15, 10);
ellipse(width/2, height/2, 20, 10);
fill(255);
ellipse(width/2, height/2 + 4, 20, 10);
fill(0);
ellipse(width/2, height/2, 6);
pop();



// Deer Horns
push();
pop();

}
