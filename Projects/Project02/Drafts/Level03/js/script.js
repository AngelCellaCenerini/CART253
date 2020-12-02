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
  userStartAudio();

  // Mic Input
  mic = new p5.AudioIn();
  mic.start();

  // Frog
  let x = width/2;
  let y = 3*height/4;
  let positionX = width/2;
  let positionY = 3*height/4;
  frog = new Frog(x, y, positionX, positionY);

  // Compasses
  for (let i = 0; i < numCompasses; i ++){
  let x = random(0, width);  //random(random(0, width/2), random(3*width/4, width))?
  let y = random(0, height);
  while(dist(x, y, frog.x, frog.y) < frog.height){
    x = random(0, width);
    y = random(0, height);
  }
  let positionX = x;
  let positionY = y;
  let size = random(70, 160);
  let compass = new Compass(x, y, positionX, positionY, size, frog);
  compasses.push(compass);
  // Overlapping >> while()?
}
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // Mic Input pushing away Needles
  let level = mic.getLevel();

  // Frog
  frog.display();
  frog.grow();

  // frog.wound(compass);
  //


  // Compass(es)
  for (let i = 0; i < compasses.length; i++){
    let compass = compasses[i];
    compass.update(frog, level);
    // compass.attack();
  }

}

function success(){
  console.log(`success`);                       // Object????
}

function keyPressed(){
  for (let i = 0; i < compasses.length; i++){
    let compass = compasses[i];
    compass.keyPressed();
    setTimeout(success, 5000);                      // Object????
  }
}
