"use strict;";

/**************************************************
Exercise 04 - The Age of Aquariums
Template p5 project by CART253 course
Angel Cella Cenerini

Catch that magilove!
**************************************************/

// Cutomized Fonts
let myFont;

// Default Black Background; Title
let bgD = {
  r: 0,
  g: 0,
  b: 0,
}

// White Background; Endings
let bg = {
  r: 255,
  g: 255,
  b: 255,
}

// Background - Underwater scene; Simulation
let imgWaterBackground = {
  x: 0,
  y: 0
}

// Title Screen Icon - MagiLove
let imgTitleMagikarp = {
  x: 0,
  y: 0
}

// Objects - Magikarps Icons; Simulation
let magikarpIcons = [];
let displayIcons;

// Pokeball icon (AKA User/Cursor)
let imgPokeball = {
  x: 0,
  y: 0
}

// Pokemon (dragon)Fly Icon - Yanmega; Bad Ending
let imgYanmega = {
  x: 600,
  y: 200,
  vx: 0,
  vy: 0,
  speed: 5
}

// Declaring state(s)
let state = `bad ending` // Title, Simulation, Happy Ending 01, Happy Ending 02, Bad Ending

function preload(){
 myFont = loadFont('assets/AnonymousPro-Regular.otf');

  waterBackground = loadImage('assets/images/waterBackground.jpg');
  pokeball = loadImage('assets/images/pokeball.png');
  titleMagikarp = loadImage('assets/images/titleMagikarp.png');
  yanmega = loadImage(`assets/images/yanmega.png`);

  // for (let i = 0; i < 8; i ++){
  //   magikarpIcons[i] = loadImage('assets/images/magikarp-${i}.png');
  // }

}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  noStroke();


   // magikarpIcons[0] = displayIcons(magikarpIcons, random(0,width), random(0, height));
   // for (let i = 0; i < 8; i ++){
   //   displayIcons = random(magikarpIcons);
   // //   magikarpIcons[i] = loadImage('assets/images/magikarp-${i}.png');
   // }



}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`){ // Black background

  // Default Black Background
  background(bgD.r, bgD.g, bgD.b);

  // Display Title Icon: Heart with Magikarp
  displayMagiHeart();
  // Display (White) Title Text
  displayTitleText();
  // Start Simulation Command - SPACEBAR
  keyPressed();
  }

  if (state === `simulation`){
    // Customized Background - Underwater scene
    displayCustomizedBackground();
    // Customized Cursor: Pokeball Icon; follows mouse movements
    displayCursor();
    // Display Objects: Magikarp Icons
     // image(displayIcons, random(0,width), random(0, height));
}

if (state === `bad ending`){
  // White Background
  background(bg.r, bg.g, bg.b);

  // Movements - Yanmega Icon
  yanmegaMovements();
  // Display Yanmega Icon
  displayYanmega();
  // Bad Ending White Text
  badEndingText();

}


}

  // Display Title Icon: Heart with Magikarp
function displayMagiHeart(){
  image(titleMagikarp, width/2, 2*height/3);
}
//

  // Display (White) Title Text
function displayTitleText(){
  push();
  fill(255);
  textSize(100);
  text(`Catch That MagiLove!`, width/2, height/4);
  textSize(20);
  text(`Press SPACEBAR to start catching Magikarps!`, width/2, 9*height/10);
  pop();
}
//

// Customized Background - Underwater scene
function displayCustomizedBackground(){
  imgWaterBackground.x = width/2;
  imgWaterBackground.y = height/2;
  image(waterBackground, imgWaterBackground.x, imgWaterBackground.y, windowWidth, windowHeight);
}
//

// Customized Cursor : Pokeball Icon; follows mouse movements
function displayCursor(){

  imgPokeball.x = mouseX;
  imgPokeball.y = mouseY;
  image(pokeball, imgPokeball.x, imgPokeball.y);
}
//

// Movements - Yanmega Icon
function yanmegaMovements(){
  // Movements - Yanmega Icon
  let change = random(0,1);
  if (change < 0,05){
      imgYanmega.vx = random (-imgYanmega.speed,imgYanmega.speed);
      imgYanmega.vy = random (-imgYanmega.speed,imgYanmega.speed);
  }
  imgYanmega.x = imgYanmega.x + imgYanmega.vx;
  imgYanmega.y = imgYanmega.y + imgYanmega.vy;

  // Constrain Icon to Canvas
  imgYanmega.x = constrain(imgYanmega.x, 0, width);
  imgYanmega.y = constrain(imgYanmega.y, 0, height);
}
//

// Display Yanmega Icon
function displayYanmega(){
  image(yanmega, imgYanmega.x, imgYanmega.y);
}
//

// Bad Ending White Text
function badEndingText(){
  push();
  fill(0);
  textSize(30);
  text(`Well, what did you expect?
  The time run out, and you didn't catch anything.

  I hope you enjoy this emptiness.`, width/2, height/2);
  textSize(17);
  text(`Press ESC to return to the Title Screen.`, width/2, 5*height/6);
  pop();
}
//

// Keyboard Commands
function keyPressed(){
  // Start Simulation Command
  if ((state === `title`) && (keyCode === 32)){
    state = `simulation`;
  }
  // Return to Title Screen Command
  else if ((state === `bad ending`) && (keyCode === 27)){
    state = `title`;
  }
}
//
