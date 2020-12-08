
"use strict";

/**************************************************
'Madeleine' - Project 02: Anything
Angel Cella Cenerini
Template p5 by CART253 Course


- MADELEINE -

A pictorial journey throughout one's unconsciousness.

The program develops into five levels, each guarding hidden enigmas. The User can either
survive the challenge or solve the puzzle and surpass the level, thus achieving a collectable item (either a Voice or a Script Shred).
Depending on how well the User performs, in the end they will be able to play a melody, concluding this experience.

Further technical and conceptual details are provided in the README.md file.
**************************************************/
// Fonts
let myFontA;
let myFontB;

// States
let state = `title` // Title, Instructions, Intro, Level01, Level02, Level03, Level04, Level05, PLay (User plays Melody)
                    // Lost (User looses), Passed (User passes level withouth solving it), Surpassed,  Ending01, Ending02.

// Load Fonts
function preload(){
  myFontA = loadFont('assets/AnonymousPro-Regular.otf');
  myFontB = loadFont('assets/BigShouldersStencilDisplay-Regular.otf');
}


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Graphics
  noStroke();
  rectMode(CENTER);
  // Texts
  textFont(myFontA);
  textSize(70);
  textAlign(CENTER, CENTER);
  // Audio
  userStartAudio();

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0); // black

  // Title
  if ( state === `title`){

  }

  // Instructions
  else if ( state === `instructions`){

  }

  // Instructions
  else if ( state === `intro`){

  }

  // Level01
  else if ( state === `level01`){

  }

  // Level02
  else if ( state === `level02`){

  }

  // Level03
  else if ( state === `level03`){

  }

  // Level04
  else if ( state === `level04`){

  }

  // Level05
  else if ( state === `level05`){

  }

  // Play
  else if ( state === `play`){

  }

  // Lost
  else if ( state === `lost`){

  }

  // Passed
  else if ( state === `passed`){

  }

  // Surpassed
  else if ( state === `surpassed`){

  }

  // Ending 01
  else if ( state === `ending01`){

  }

  // Ending02
  else if ( state === `ending02`){

  }

}
