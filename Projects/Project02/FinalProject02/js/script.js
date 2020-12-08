
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

// Intro
// Mirror
let mirror;  // also used in Ending01, Ending02

// Ending02
// Lights
let lights = [];
let numLights = 20;

// States
let state = `title`       // Title, Instructions, Intro, Level01, Level02, Level03, Level04, Level05, PLay (User plays Melody)
                             // Lost (User looses), Passed (User passes level withouth solving it), Surpassed (Achieved Voice or Script),  Ending01, Ending02.

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

  // Intro
  // Mirror
  x = width/2;
  y = height/2;
  mirror = new Mirror(x, y);   // also used in Ending01, Ending02

  // Ending02
  // Lights
  for(let i = 0; i < numLights; i++){
    let x = width/2;
    let y = 2*height/5;
    let size = random(5, 50);
    let light = new Light(x, y, size);
    lights.push(light);
  }



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
    // Mirror
    mirror.display();
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
    textPassed();
  }

  // Surpassed
  // Achieved Voice
  else if ( state === `surpassedV`){
    textSurpassedVoice();

    // Display Single Light
    lights.length = 1;
    for (let i = 0; i < lights.length; i++){
      let light = lights[i];
      light.move();
      light.display();
    }
  }
  // Achieved Script Shred
  else if ( state === `surpassedS`){
    textSurpassedScript();
  }

  // Ending 01
  else if ( state === `ending01`){
    // Mirror
    mirror.active = true;
    mirror.move();
    mirror.tremble();
    mirror.display();
    // Go back to Title Screen
    setTimeout(switchToTitle, 8000);
  }

  // Ending02
  else if ( state === `ending02`){
    // Mirror
    mirror.active = true;
    mirror.broken = false;
    mirror.move();
    mirror.tremble();
    mirror.display();

    // Lights
    for (let i = 0; i < lights.length; i++){
      let light = lights[i];
      light.move();
      light.explode();
      light.display();
    }
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
    Or blast the volume bar up and enjoy bleeding ears; it is your choice, after all.

    Press ENTER to continue.`, width/8, height/3);
    pop();
}
//

// Passed
function textPassed(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`You did good.
  Yet, not good enough.`, width/2, height/3);
  textSize(20);
  text(`Press ENTER to proceed to the next level.`, width/2, 2*height/3);
  pop();
}
//

// Surpassed
// Achieved Voice
function textSurpassedVoice(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`Success! You achieved a Voice.`, width/2, height/2);
  textSize(20);
  text(`Press ENTER to proceed to the next level.`, width/2, 2*height/3);
  pop();
}

function textSurpassedScript(){
  // Achieved Script
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`Success! You achieved a Script Shred.`, width/2, height/2);
  textSize(20);
  text(`Press ENTER to proceed to the next level.`, width/2, 2*height/3);
  pop();
}
//


// Ending01
// Switch to Title Screen
function switchToTitle(){
state = `title`;
}
//


// p5 Events
function keyPressed(){
if(keyCode === 13){
  if(state === `title`){
    state = `instructions`;
  }
  else if (state === `instructions`){
    state = `intro`;
  }
  else if (state === `intro`){
    state = `level01`;
  }
}
}
//
