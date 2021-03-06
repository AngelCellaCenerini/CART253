"use strict";

/**************************************************
Cooking Simulator (or Survival)
Angel Cella Cenerini
p5 Template by CART253 Course

The user has to choose one ingredient in order to cook a delicious, somewhat edible, or insanely deadly dish for the diners!
Credits:
soundtrack - Rossini, William Tell Overture
graphics - creator XD
**************************************************/
// Declaring Custom Font
let myFont;

// Declaring Background Music (Plays in Simulation)
let rossiniSFX;

// Declaring Gravity
let gravityForce = 0.0025;

// Declaring Egg Array
let eggs = [];
let numEggs = 6;

// Declaring Apple Array
let apples = [];
let numApples = 5;

// Declaring Detergent Array
let detergents = [];
let numDetergents = 4;


// Declaring Object Variable
let pan;

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
let state = `title`; // Title (Instructions icluded), Simulation, Good Ending, Bad Ending 01, Bad Ending 02


function preload(){
  myFont = loadFont('assets/AnonymousPro-Regular.otf');

  rossiniSFX = loadSound("assets/sounds/rossini.mp3");

  michelinStars = loadImage('assets/images/michelinStars.png');
  toilet = loadImage('assets/images/toilet.png');
  tombstone = loadImage('assets/images/rip.png');
}
//

// setup()
//
// Canvas, General Settings, Creating Objects
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  noStroke();
  noCursor();

  pan = new Pan(220, 40);

  // Creating Eggs
  for (let i = 0; i < numEggs; i++){
     let x = random(0, width);
     let y = random(-400, -100);
     let egg = new Egg(x,y);
     eggs.push(egg);
  }
  // Creating Moldy Apples
    for (let i = 0; i < numApples; i++){
       let x = random(0, width);
       let y = random(-400, -100);
       let moldyApple = new MoldyApple(x,y);
       apples.push(moldyApple);
    }

  // Creating Detergents
    for (let i = 0; i < numDetergents; i++){
       let x = random(0, width);
       let y = random(-400, -100);
       let detergent = new Detergent(x,y);
       detergents.push(detergent);
    }
}
// /setup()

// draw()
//
// States (previously mentioned)
function draw() {
  background(0);

// Title (Instructions included)
if (state === `title`){
  titleText();
}

// Simulation - "Catching" ingredients
else if (state === `simulation`){

  pan.display();

  // Inserting Objects
  // Eggs
  for(let i = 0; i < eggs.length; i++){
    let egg = eggs[i];
    if (egg.active){
        egg.gravity(gravityForce);
        egg.move();
        egg.bounce(pan);
        egg.display();
     }
  }
  // Apples
  for(let i = 0; i < apples.length; i++){
    let moldyApple = apples[i];
    if (moldyApple.active){
        moldyApple.gravity(gravityForce);
        moldyApple.move();
        moldyApple.bounce(pan);
        moldyApple.display();
     }
  }
  // Detergents
  for(let i = 0; i < detergents.length; i++){
    let detergent = detergents[i];
    if (detergent.active){
        detergent.gravity(gravityForce);
        detergent.move();
        detergent.bounce(pan);
        detergent.display();
     }
  }

  // Ending varies based on user's choice of ingredient(s)
  checkEnding();

}

// Good Ending - Best Quality Ingredient(s)
else if (state === `goodEnding`){
   background(gBg.r, gBg.g, gBg.b);
   goodEndingText();
   displayStars();

}

// Bad Ending 01 - Edible Ingredients(
else if (state === `badEnding01`){
   background(b1Bg.r, b1Bg.g, b1Bg.b);
   badEnding01Text();
   displayToilet();

}

// Bad Ending 02 - Inedible Ingredient(s)
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
  text( `SURVIVAL COOKING SIMULATOR`, width/2, height/4);
  // Description
  textSize(22);
  text(`Living on your own can be hard, especially if you're the one cooking.

  ...Or, if you're cooking for guests.`,width/2, height/2);
  textSize(17);
  text(`Use the ARROW keys to move the cooking pan left or right.
  Choose between an egg, a moldy apple, or powder detergent as your ingredient!`,width/2, 3*height/4);
  // Instructions
  textSize(15);
  text(`Press SPACEBAR to begin`, width/2, 7*height/8);
  // Red Line (Crossing "Survival")
  stroke(255, 0, 0);
  strokeWeight(5);
  line(width/6, height/4, 3*width/8, height/4);
  pop();
}
//

// Simulation
//
function checkEnding(){
  // Counting Objects On Screen
  // Counting Eggs
  let remainingEggs = 0;
  for (let i = 0; i < eggs.length; i ++){
    let egg = eggs[i];
    if (egg.active){
         remainingEggs++;  // Would be remainingEggs = remainingEggs +1;
    }
  }
  // Counting Moldy Apples
  let remainingApples = 0;
  for (let i = 0; i < apples.length; i ++){
    let moldyApple = apples[i];
    if (moldyApple.active){
         remainingApples++;
    }
  }
  // Counting Detergents
  let remainingDetergents = 0;
  for (let i = 0; i < detergents.length; i ++){
    let detergent = detergents[i];
    if (detergent.active){
         remainingDetergents++;
    }
  }

  // Check Endings (2 seconds delay)
  // Check Good Ending: Only Egg(s) remain(s) on screen
  if ((remainingApples === 0) && (remainingDetergents === 0)){
      setTimeout(switchGoodEnding, 2000);
  }
  // Check Bad Ending 01: Only Moldy Apple(s) remain(s) on screen
  if ((remainingDetergents === 0) && (remainingEggs === 0)){
      setTimeout(switchBadEnding01, 2000);
  }
  // Check Bad Ending 02: Only Detergent(s) remain(s) on screen
  if ((remainingApples === 0) && (remainingEggs === 0)){
      setTimeout(switchBadEnding02, 2000);
  }
}
//

// Switch to Endings (2 seconds delay)
// Switch to Good Ending
function switchGoodEnding(){
state = `goodEnding`;
}

// Switch to Bad Ending 01
function switchBadEnding01(){
state = `badEnding01`;
}

// Switch to Bad Ending 02
function switchBadEnding02(){
state = `badEnding02`;
}
//

// Good Ending
function goodEndingText(){
  // Dark Grey Text
  push();
  fill(10);
  textSize(30);
  text(`Wow! You managed to collect an ingredient of (mostly) good quality!
  Your guests are satisfied and most likely to return! `, width/2, height/3);
  textSize(13);
  text(`Press ESC to return to Title Screen`, width/2, 29*height/30);
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
  textSize(13);
  text(`Press ESC to return to Title Screen`, width/2, 29*height/30);
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
  push();
  fill(10);
  textSize(30);
  text(`You have made some...questionable choices.
  The diners have nothing (left) to say.`, width/2, height/5);
  textSize(13);
  text(`Press ESC to return to Title Screen`, width/2, 29*height/30);
  pop();
}

function displayTombstone(){
  // Tombstone Icon
  imgRip.x = width/2;
  imgRip.y = 5*height/8;
  image(tombstone, imgRip.x, imgRip.y);
}
//

// P5 events
function keyPressed(){
  if ((keyCode === 32) && (state === `title`)) {
    rossiniSFX.play();
    state = `simulation`;
 }
 else if(state === `simulation`){
     pan.keyPressed();
  }
 else if((state === `goodEnding` || state === `badEnding01` || state===`badEnding02`) && (keyCode === 27)){

   state = `title`;
   rossiniSFX.stop();
 }
}
//
