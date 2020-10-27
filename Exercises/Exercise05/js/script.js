"use strict";

/**************************************************
Cooking Simulator (or Survival)
Angel Cella Cenerini
p5 Template by CART253 Course

The user has 15 seconds to cook a delicious, somewhat edible, or insanely deadly dish for the diners!
**************************************************/
// Declaring Custom Font
let myFont;

// Declaring Backgrounds
// Good Ending
let gBg = {
  r: 255,
  g: 255,
  b: 255
}
// Bad Ending 01
let b1Bg = {
  r: 187,
  g: 231,
  b: 232
}
// Bad Ending 02
let b2Bg = {
  r: 136,
  g: 136,
  b: 136
}


// Declaring Icons (for Endings)
// Stars - Good Ending
let michelinStars;
let imgStars = {
  x: 0,
  y: 0
}
// Toilet - Bad Ending 01
let toilet;
let imgToilet = {
  x: 0,
  y: 0
}
// Tombstone - BadEnding02
let tombstone;
let imgRip = {
  x: 0,
  y: 0
}

// Set Up State(s)
let state = `goodEnding`; // Title (Instructions icluded), Simulation, Good Ending, Bad Ending 01, Bad Ending 02


function preload(){
  myFont = loadFont('assets/AnonymousPro-Regular.otf');

  michelinStars = loadImage('assets/images/michelinStars.png');
  toilet = loadImage('assets/images/toilet.png');
  tombstone = loadImage('assets/images/rip.png');
}
//

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  noStroke();
  noCursor();

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

// Title (Instructions included)
if (state === `title`){
   titleText();
}

// Simulation - "Catching" ingredients
else if (state === `simulation`){

}

// Good Ending - Best Quality Ingredients
else if (state === `goodEnding`){
  background(gBg.r, gBg.g, gBg.b);
  goodEndingText();
  displayStars();

}

// Bad Ending 01 - Edible Ingredients
else if (state === `badEnding01`){

}

// Bad Ending 02 - Inedible Ingredients
else if (state === `badEnding02`){

}

}




// Title
function titleText(){
  push();
  // White Text
  fill(255);
  // Title
  textSize(70);
  text( `SURVIVAL COOKING SIMULATOR`, width/2, height/3);
  // Description
  textSize(22);
  text(`Living on your own can be hard, especially if you're the one cooking.

  ...Or, if you're cooking for guests.

  Because time is relative, you have 15 seconds to prepare a somewhat decent meal!
  Choose the best ingredients for your diners! `,width/2, 3*height/5);
  // Instructions
  textSize(16);
  text(`Press SPACEBAR to begin`, width/2, 7*height/8);
  // Red Line (Crossing "Survival")
  stroke(255, 0, 0);
  strokeWeight(5);
  line(width/6, height/3, 3*width/8, height/3);
  pop();
}
//

// Good Ending
function goodEndingText(){
  // Dark Grey Text
  push();
  fill(10);
  textSize(30);
  text(`Wow! You managed to collect mostly good quality ingredients!
  Your guests are satisfied and most likely to return! `, width/2, height/3);
  pop();
}

function displayStars(){
  // 3 Michelin Stars Icon
  imgStars.x = width/2;
  imgStars.y = 2*height/3;
  image(michelinStars, imgStars.x, imgStars.y);
}
//
