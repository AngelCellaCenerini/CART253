"use strict;";

/**************************************************
Exercise 04 - The Age of Aquariums
Template p5 project by CART253 course
Angel Cella Cenerini

Catch that magilove!
**************************************************/
// Pokeball icon (AKA User/Cursor)
let imgPokeball = {
  x: 0,
  y: 0
}

function preload(){
  pokeball = loadImage('assets/images/pokeball.png');
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);
  textAlign(CENTER, CENTER);


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  // Customized Cursor : Pokeball Icon; follows mouse movements
  displayCursor();

}


// Customized Cursor : Pokeball Icon; follows mouse movements
function displayCursor(){

  imgPokeball.x = mouseX;
  imgPokeball.y = mouseY;
  image(pokeball, imgPokeball.x, imgPokeball.y);
}
//
