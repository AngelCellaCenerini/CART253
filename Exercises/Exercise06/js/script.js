"use strict";

/**************************************************
Exercise 06: "Make Some Noise!"
Template p5 project by CART253 Course
Angel Cella Cenerini

User will guide displyed object(s) through the tone of their voice in order to avoid hitting the obstacles.
**************************************************/
let myFont;

let creatures = [];
let numVioletCreatures = 1; // Might use more in the final project
let numBlueCreatures = 1;
let numGreenCreatures = 1;

let button = {
  x: 0,
  y: 0,
  width: 300,
  height: 150,
  radius: 15
}

function preload(){
  myFont = loadFont('assets/BigShouldersStencilDisplay-Regular.otf');
}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER);
textFont(myFont);
textSize(70);
textAlign(CENTER, CENTER);

// Violet Creature - could be subjected to change
for(let i = 0; i < numVioletCreatures; i ++){

  let x = random(11*width/25, 14*width/25,);
  let y = random(height/6, height/2);
  let violetCreature = new VioletCreature(x, y);
  creatures.push(violetCreature);
}

// Blue Creature - could be subjected to change
for(let i = 0; i < numBlueCreatures; i ++){

  let x = random(11*width/25, 14*width/25,);
  let y = random(height/6, height/2);
  let blueCreature = new BlueCreature(x, y);
  creatures.push(blueCreature);
}

// Green Creature - could be subjected to change
for(let i = 0; i < numGreenCreatures; i ++){

  let x = random(11*width/25, 14*width/25,);
  let y = random(height/6, height/2);
  let greenCreature = new GreenCreature(x, y);
  creatures.push(greenCreature);
}

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);

for(let i = 0; i < creatures.length; i ++){
  let creature = creatures[i];
  creature.move();
  creature.wrap();
  creature.display();
}

// White Lines
push();
stroke(255);
strokeWeight(15);
line(width/3, 0, width/3, height);
line(2*width/3, 0, 2*width/3, height);
strokeWeight(8);
line(8*width/25, 0, 8*width/25, height);
line(17*width/25, 0, 17*width/25, height);
pop();

crypticButtons();

}


function crypticButtons(){
  // Cryptict Buttons
  // Positive Space
  button.x = width/6;
  button.y = height/2;

  push();
  noStroke();
  fill(255);
  rect(button.x, button.y, button.width, button.height, button.radius, button.radius, button.radius, button.radius);
  pop();
  // Black Text
  push();
  fill(random(0, 255));
  text(`POTS`, width/6, height/2);
  pop();

  // Negative Space
  button.x = 5*width/6;
  button.y = height/2;

  push();
  stroke(255);
  strokeWeight(8);
  noFill();
  rect(button.x, button.y, button.width, button.height, button.radius, button.radius, button.radius, button.radius);
  pop();
  // White Text
  push();
  fill(random(0, 255));
  text(`POTS`, 5*width/6, height/2);
  pop();
}
