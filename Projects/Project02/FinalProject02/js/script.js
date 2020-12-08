
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

// Title
// Madeleine Logo/Icon
let madeleine;

// States
let state = `instructions` // Title, Instructions, Intro, Level01, Level02, Level03, Level04, Level05, PLay (User plays Melody)
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
  textSize(20);
  textAlign(CENTER, CENTER);
  // Audio
  userStartAudio();


  // Title
  // Madeleine "Logo/Icon" (a bit abstract)
  let x = width/2;
  let y = 3*height/5;
  madeleine = new Madeleine(x, y);


}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0); // black

  // Title
  if ( state === `title`){

    titleText();
    madeleine.display();
  }

  // Instructions
  else if ( state === `instructions`){
    textInstructions();
  }

  // Intro
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

// Functions
// Title
function titleText(){
  push();
  fill(255);
  text(`Press ENTER to start.`, width/2, 7*height/8);
  textSize(60);
  text(`MADELEINE`, width/2, height/4);
  pop();
}
//

// Instructions
function textInstructions(){
  push();
    fill(255);
    textAlign(LEFT, RIGHT);
    text(`Welcome to 'Madeleine'.




    Survive the levels to pass on to the next challenge.
    Solve the puzzles to surpass them.

    When in a level, press SPACEBAR at anytime to open up the Tips Table.
    Certain levels require your microphone input, therefore choose wisely whether
    or not to allow the web page access to your audio :)
    Remember, all levels are timed.

    For your own safety, please keep your volume on the medium-lower end.
    Or blast the volume bar up and enjoy bleeding ears; it is your choice, after all.`, width/8, height/3);
    pop();
}
//


// p5 Events
//
