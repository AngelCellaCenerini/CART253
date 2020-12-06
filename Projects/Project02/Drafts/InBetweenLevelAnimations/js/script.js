"use strict";

/**************************************************
Project02 Draft: In Between Levels Animation
Angel Cella Cenerini
Template p5 project by CART253 Course


If User successfully surpasses level, they achieve one of the collectable items; this will also trigger a "cutscene" of sorts
**************************************************/

// MIirror
let mirror;

// Lights
let lights = [];
let numLights = 20;



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  // Lights
  for(let i = 0; i < numLights; i++){
    let x = width/2;
    let y = 2*height/5;
    let size = random(5, 50);
    let light = new Light(x, y, size);
    lights.push(light);
  }

  // Mirror
  let x = width/2;
  let y = height/2;
  mirror = new Mirror(x, y);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // Lights
  for (let i = 0; i < lights.length; i++){
    let light = lights[i];
    light.move();
    light.explode();
    light.display();
  }

  // Mirror
  mirror.move();
  mirror.tremble();
  mirror.display();

}
