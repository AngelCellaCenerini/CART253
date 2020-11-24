"use strict";

/**************************************************
Project02: Level 02 Draft
Template p5 project by CART253 Course


Here is a description of this template p5 project.
**************************************************/
let moons = [];
let redMoon;
let blueMoon;

let school = [];
let fish;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);

  let x = 0;
  let y = height/3;
  let positionX = 0;
  let positionY = height/3;
  redMoon = new RedMoon (x, y, positionX, positionY);
  moons.push(redMoon);

  x = width;
  y = height/3;
  positionX = width;
  positionY = height/3;
  blueMoon = new BlueMoon (x, y, positionX, positionY);
  moons.push(blueMoon);

  x = random(width/4, 9*width/10);
  y = random(height/9, 10*height/11);
  fish = new Fish (x, y);
  school.push(fish);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for(let i = 0; i < moons.length; i++){
    let moon = moons[i];
    moon.display();
    moon.move();
  }

  for(let i = 0; i < school.length; i++){
    let fish = school[i];
    fish.display();
    fish.rotate();
    // fish.move();
    fish.hunt();
    fish.react();
  }

// push();
// noFill();
// stroke(251, 207, 115);
// strokeWeight(3);
// ellipse(width/2, height/2, 50);
// ellipse(width/2, height/2, 80);
// ellipse(width/2, height/2, 140);
// ellipse(width/2, height/2, 240);
// ellipse(width/2, height/2, 400);
// pop();


}

function mouseIsPressed(){
  for (let i = 0; i < school.length; i ++){
    let fish = school[i];
    fish.react();
  }
}
