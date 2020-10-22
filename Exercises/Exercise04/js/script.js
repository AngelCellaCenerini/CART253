"use strict;";

/**************************************************
Exercise 04 - The Age of Aquariums
Template p5 project by CART253 course
Angel Cella Cenerini

Catch that magilove!
**************************************************/

// Background - Underwater scene
let imgWaterBackground = {
  x: 0,
  y: 0
}

// Objects - Magikarps Icons
let magikarpIcons = [];
let displayIcons;

// Pokeball icon (AKA User/Cursor)
let imgPokeball = {
  x: 0,
  y: 0
}

// Declaring state(s)
let state = `simulation` // Title, Simulation, Happy Ending 01, Happy Ending 02, Bad Ending

function preload(){
  waterBackground = loadImage('assets/images/waterBackground.jpg');
  pokeball = loadImage('assets/images/pokeball.png');

  for (let i = 0; i < 8; i ++){
    magikarpIcons[i] = loadImage('assets/images/magikarp-${i}.png');
  }

}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);
  textAlign(CENTER, CENTER);

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

if (state === `simulation`){
  // Customized Background - Underwater scene
  displayCustomizedBackground();
  // Customized Cursor: Pokeball Icon; follows mouse movements
  displayCursor();
  // Display Objects: Magikarp Icons
   image(displayIcons, random(0,width), random(0, height));
}


}

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
