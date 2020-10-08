/**************************************************
Exercise 03 - Template p5 project by CART253 Course
Angel Cella Cenerini

Exercise 03 - Love, actually

COUNTING SHEEP(S)
You have until dawn to play ;)
Don't blink! It might be morning when you re-open your eyes

**************************************************/
//Declaring images variables

//Background - "Scenario" as to not interfere with JavaScript
let imgScenario = {
  x: 0,
  y: 0,
}
//Branch (in Scenario)
let imgBranch = {
   x: 800,
   y: 800,
   vx: 0,
   vy: 3
}
//Clouds (in Scenario)
let imgClouds = {
  x: 400,
  y: 900,
  vx: 1,
  vy: 0
}
//User (parrot)
let imgUser = {
  x: 0,
  y: 0,
  size: 800,
}
//Male parrot 1 (MP1)
let imgMp1 = {
  x: 500,
  y: 500,
  size: 800,
  vx: 0,
  vy: 0,
  speed: 3
}
//Male parrot 2 (MP2)
let imgMp2 = {
  x: 200,
  y: 600,
  size: 800,
  vx: 0,
  vy: 0,
  speed: 3
}
//Female parrot (FP1)
let imgFp1 = {
  x: 800,
  y: 700,
  size: 900,
  vx: 0,
  vy: 0,
  speed: 3
}
//Female parrot (FP2)
let imgFp2 = {
  x: 600,
  y: 900,
  size: 900,
  vx: 0,
  vy: 0,
  speed: 3
}
//Happy Ending
let imgHappyEnding = {
  x: 0,
  y: 0,
}
//Bad Ending 1
let imgBadEnding1 = {
  x: 0,
  y: 0,
}
//Bad Ending 2 (BE2)
let imgBadEnding2 = {
  x: 0,
  y: 0,
}

// setup()
// Declaring (+assignment) customized variables as JavaScript objects - named after represented subject


function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  imageMode(CENTER);

  //Centering different Backgrounds

  imgScenario.x= windowWidth/2
  imgScenario.y= windowHeigth/2

  happyEnding.x= windowWidth/2
  happyEnding.y= windowHeigth/2

  imgBadEnding1.x= windowWidth/2
  imgBadEnding1.y= windowHeigth/2

  imgBadEnding2.x= windowWidth/2
  imgBadEnding2.y= windowHeigth/2


}

// draw()
//
// Designing movable/interactive picture;
function draw() {
  background(0);




}
