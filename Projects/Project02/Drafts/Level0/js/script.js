"use strict";

/**************************************************
Project02 Draft: Level0
Template p5 project by CART 253

User must
**************************************************/
//Mic Input
let mic;

// Soundtrack
let soundtrack;
let soundtrack2;
let angle = 0;
let angleIncrease = 0.25;

// White Frame
let frame = {
  x: 0,
  y: 0,
  width: 1100,
  height: 700
}

// Projector
let projector = {
  x: 0,
  y: 0,
  width: 50,
  height: 80,
  radius: 5
}

// Eye
let eye;

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER);
noStroke();
userStartAudio();

// Soundtrack
soundtrack = new p5.Oscillator(0, `tan`);
soundtrack2 = new p5.Oscillator(`triangle`);
soundtrack.amp(0.02);

// Mic Input
mic = new p5.AudioIn();
mic.start();

// Eye
let x = width/2;
let y = height/2;
let positionX = width/2;
let positionY = height/2;
let eye = new Eye (x, y, positionX, positionY);


// // Laser Lights Projectors
// // Top Projector
// let x = width/2;
// let y = height/6;
// let horizontalProjector = new HorizontalProjector(x, y);
// projectors.push(horizontalProjector);
// // Bottom Projector
// let x = width/2;
// let y = 5*height/6;
// let horizontalProjector = new HorizontalProjector(x, y);
// projectors.push(horizontalProjector);
// // Left Projector
// let x = width/4;
// let y = height/2;
// let verticalProjector = new VerticalProjector(x, y);
// projectors.push(verticalProjector);
// // Right Projector
// let x = 3*width/4;
// let y = height/2;
// let verticalProjector = new VerticalProjector(x, y);
// projectors.push(verticalProjector);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // Soundtrack
  angle += angleIncrease;
  let tanAngle = tan(angle);
  let newFreq = map(tanAngle, -1, 1, 420, 680);
  soundtrack.freq(newFreq);

  let randomValue = random(0, 1);
  let newFrequency = map(randomValue, 0, 1, 200, 300);
  soundtrack2.freq(newFrequency);


  // Laser Lights
  for(let i=0; i<12;i++){
    let x1 = random(frame.x - frame.width/2, frame.x + frame.width/2);
    let y1 = random (frame.y - frame.height/2, frame.y + frame.height/2);
    let x2 = random(frame.x - frame.width/2, frame.x + frame.width/2);
    let y2 = random (frame.y - frame.height/2, frame.y + frame.height/2);
    push();
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);
    stroke(r, g, b);
    strokeWeight(4);
    line(x1,y1,x2,y2);
    pop();
}

  // White Frame
  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  frame.x = width/2;
  frame.y = height/2;
  rect(frame.x, frame.y, frame.width, frame.height);
  pop();

  // Eye
  eye.move();
  eye.acceleration();
  eye.restrict();
  eye.focus(call);
  eye.display();


  // Mic Input Calling Eye back to Focus
  let level = mic.getLevel();
  let call = map(level, 0, 1, 0, -10);

  // // Eye Red Corners
  // push();
  // fill(255, 69, 0);
  // triangle(width/2 - 127, height/2, width/2, height/2 - 68, width/2, height/2 + 68);
  // triangle(width/2 + 127, height/2, width/2, height/2 - 68, width/2, height/2 + 68);
  // pop();
  //
  // // Eye
  // push();
  // fill(255);
  // ellipse(width/2, height/2, 170);
  // pop();
  //
  // // Pupil
  // push();
  // fill(58, 255, 220);
  // ellipse(width/2, height/2, 60);
  // pop();
  //
  // // Pupil Ring
  // push();
  // noFill();
  // stroke(255, 204, 0);
  // strokeWeight(2);
  // ellipse(width/2, height/2, 20);
  // pop();

  // Laser Light Projector
  // for (let i = 0; i < projectors.length; i ++){
  // let projector = projectors[i];
  // projector.display();
  // }


  push();
  stroke(0);
  strokeWeight(2);
  fill(255);
  projector.x = width/4;
  projector.y = height/2;
  rect(projector.x, projector.y, projector.width, projector.height, projector.radius, projector.radius, projector.radius, projector.radius);
  projector.x = 3*width/4;
  projector.y = height/2;
  rect(projector.x, projector.y, projector.width, projector.height, projector.radius, projector.radius, projector.radius, projector.radius);
  projector.x = width/2;
  projector.y = height/6;
  rect(projector.x, projector.y, projector.height, projector.width, projector.radius, projector.radius, projector.radius, projector.radius);
  projector.x = width/2;
  projector.y = 5*height/6;
  rect(projector.x, projector.y, projector.height, projector.width, projector.radius, projector.radius, projector.radius, projector.radius);
  pop();

}

function mousePressed() {
  soundtrack.start();
  soundtrack2.start();
}
