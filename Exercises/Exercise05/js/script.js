"use strict";

/**************************************************
Cooking Simulator (or Survival)
Template p5 project by CART253 Course
Angel Cella Cenerini

The user has 15 seconds to cook a delicious, somewhat edible, or insanely deadly dish for the diners!
**************************************************/
// Declaring Custom Font
let myFont;

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

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
