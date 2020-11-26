/**************************************************
Project02 - Draft: Level03
Angel Cella Cenerini
Template p5 project by CART253 course

Here is a description of this template p5 project.
**************************************************/
let frog;

let compasses = [];
let numCompasses = 12;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  // Frog
  let x = width/2;
  let y = 3*height/4;
  let positionX = width/2;
  let positionY = 3*height/4;
  frog = new Frog(x, y, positionX, positionY);

  // Compasses
  for (let i = 0; i < numCompasses; i ++){
  let x = random(0, width);
  let y = random(0, height);
  let positionX = x;
  let positionY = y;
  let size = random(70, 160);
  let compass = new Compass(x, y, positionX, positionY, size);
  compasses.push(compass);
  // Overlapping >> while()?
}
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // Frog
  frog.display();
  frog.grow();

  // frog.wound(compass);
  //


  // Compass(es)
  for (let i = 0; i < compasses.length; i++){
    let compass = compasses[i];
    compass.chase(frog);
    compass.display();
    // compass.attack();
  }

  // if(compass.sting){
  //   frog.wound();
  // }

  // Hole
  // push();
  // fill(255, 135, 117);
  // ellipse(width/2 + 26, 3*height/4 + 2, 55);
  // fill(0);
  // ellipse(width/2 + 26, 3*height/4, 55);
  // pop();

  // // Compass
  // push();
  // noFill();
  // stroke(255);
  // strokeWeight(6);
  // ellipse(width/2, height/2, 160);
  // pop();
  //
  // // Cardinal Directions
  // push();
  // fill(255);
  // ellipse(width/2, height/2 - 53, 6.6);
  // ellipse(width/2, height/2 + 53, 6.6);
  // ellipse(width/2 - 53, height/2, 6.6);
  // ellipse(width/2 + 53, height/2, 6.6);
  // pop();
  //
  // // Hook
  // push();
  // noFill();
  // stroke(255);
  // strokeWeight(4);
  // ellipse(width/2, height/2 - 80, 32);
  // pop();
  //
  // //Needle
  // push();
  // fill(255, 52, 150);
  // triangle(width/2, height/2 - 40, width/2 + 6.6, height/2 - 8, width/2, height/2 + 40);
  // fill(255, 52, 150);
  // triangle(width/2, height/2 - 40, width/2 - 6.6, height/2 - 8, width/2, height/2 + 40);
  // pop();


}
