"use strict";

/**************************************************
Exercise 06: "Make Some Noise!"
Template p5 project by CART253 Course
Angel Cella Cenerini

User will guide displyed object(s) through the tone of their voice in order to avoid hitting the obstacles.
**************************************************/

let creatures = [];
let numVioletCreatures = 1; // Might use more in the final project
let numBlueCreatures = 1;
let numGreenCreatures = 1;

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);

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

// // Winged Creature
// // Wings
// // Left Wing
// push();
// noStroke();
// fill(189, 195, 248);
// triangle(width/2 - 60, height/2 + 10, width/2 - 35, height/2 - 30, width/2, height/2);
// pop();
//
// push();
// noStroke();
// fill(235, 217, 255);
// triangle(width/2 - 90, height/2 - 10, width/2 - 35, height/2 - 30, width/2, height/2);
// pop();
//
// push();
// noStroke();
// fill(255);
// triangle(width/2 - 108, height/2 - 30, width/2 - 35, height/2 - 30, width/2, height/2);
// pop();
//
// // Right Wing
// push();
// noStroke();
// fill(189, 195, 248);
// triangle(width/2 + 60, height/2 + 10, width/2 + 35, height/2 - 30, width/2, height/2);
// pop();
//
// push();
// noStroke();
// fill(235, 217, 255);
// triangle(width/2 + 90, height/2 - 10, width/2 + 35, height/2 - 30, width/2, height/2);
// pop();
//
// push();
// noStroke();
// fill(255);
// triangle(width/2 + 108, height/2 - 30, width/2 + 35, height/2 - 30, width/2, height/2);
// pop();
//
// // Deer Horns
// push();
// stroke(255);
// strokeWeight(3);
// // Left Horn
// line(width/2 - 15, height/2, width/2 - 15, height/2 - 40);
// line(width/2 - 30, height/2 - 40, width/2, height/2 - 40);
// line(width/2 - 30, height/2 - 40, width/2 - 30, height/2 - 60);
//
// // Right Horn
// line(width/2 + 15, height/2, width/2 + 15, height/2 - 50);
// line(width/2 + 15, height/2 - 50, width/2 + 30, height/2 - 50);
// line(width/2 + 30, height/2 - 50, width/2 + 30, height/2 - 60);
//
// strokeWeight(1.5);
// // Left Horn
// line(width/2 + 1, height/2 - 40, width/2 + 1, height/2 - 50);
// line(width/2 - 30, height/2 - 50, width/2 - 20, height/2 - 50);
//
// // Right Horn
// line(width/2 + 20, height/2 - 50, width/2 + 20, height/2 - 60);
// pop();
//
// // Body
// push();
// noStroke();
// fill(255);
// ellipse(width/2, height/2, 60);
// fill(0);
// ellipse(width/2, height/2 - 15, 15, 10);
// ellipse(width/2, height/2, 20, 10);
// fill(255);
// ellipse(width/2, height/2 + 4, 20, 10);
// fill(0);
// ellipse(width/2, height/2, 6);
// pop();





}
