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
  r: 177,
  g: 221,
  b: 222
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
let state = `simulation`; // Title (Instructions icluded), Simulation, Good Ending, Bad Ending 01, Bad Ending 02


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
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  noStroke();
  noCursor();

}
// /setup()

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

  push();
  fill(170, 116, 87);
  rect(width/2, height/2 + 10, 230, 12, 50);
  fill(136);
  quad(width/2, height/2, width/2 + 191, height/2, width/2 + 180, height/2 + 35, width/2 + 11, height/2 + 35);
  pop();

}

// Good Ending - Best Quality Ingredients
else if (state === `goodEnding`){
   background(gBg.r, gBg.g, gBg.b);
   goodEndingText();
   displayStars();

}

// Bad Ending 01 - Edible Ingredients
else if (state === `badEnding01`){
   background(b1Bg.r, b1Bg.g, b1Bg.b);
   badEnding01Text();
   displayToilet();

}

// Bad Ending 02 - Inedible Ingredients
else if (state === `badEnding02`){
   background(b2Bg.r, b2Bg.g, b2Bg.b);
   badEnding02Text();
   displayTombstone();

}


}
// /draw()



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

// Bad Ending 01
function badEnding01Text(){
  // White Text
  push();
  fill(255);
  textSize(30);
  text(`Not bad! The diners are rushing to the toilet,
  but a pinch of food poisoning never killed anyone!
  You all agree to order takeout next time.`, width/2, height/5);
  pop();
}

function displayToilet(){
  // Toilet Icon
  imgToilet.x = width/2;
  imgToilet.y = 2*height/3;
  image(toilet, imgToilet.x, imgToilet.y);
}
//

// Bad Ending 02
function badEnding02Text(){
  // Dark Grey Text
  fill(10);
  textSize(30);
  text(`You have made some...questionable choices.
  The diners have nothing (left) to say.`, width/2, height/5);
}

function displayTombstone(){
  // Tombstone Icon
  imgRip.x = width/2;
  imgRip.y = 5*height/8;
  image(tombstone, imgRip.x, imgRip.y);
}
//
