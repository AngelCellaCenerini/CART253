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
let scenario = {
  x: 0,
  y: 0,
}
//Branch (in Scenario)
let branch = {
   x: 800,
   y: 800,
   vx: 0,
   vy: 3
}
//Clouds (in Scenario)
let clouds = {
  x: 400,
  y: 900,
  vx: 1,
  vy: 0
}
//User (parrot)
let user = {
  x: 0,
  y: 0,
  size: 800,
}
//Male parrot 1 (MP1)
let mp1 = {
  x: 500,
  y: 500,
  size: 800,
  vx: 0,
  vy: 0,
  speed: 3
}
//Male parrot 2 (MP2)
let mp2 = {
  x: 200,
  y: 600,
  size: 800,
  vx: 0,
  vy: 0,
  speed: 3
}
//Female parrot (FP1)
let fp1 = {
  x: 800,
  y: 700,
  size: 900,
  vx: 0,
  vy: 0,
  speed: 3
}
//Female parrot (FP2)
let fp2 = {
  x: 600,
  y: 900,
  size: 900,
  vx: 0,
  vy: 0,
  speed: 3
}
//Happy Ending
let happyEnding = {
  x: 0,
  y: 0,
}
//Bad Ending 1
let badEnding1 = {
  x: 0,
  y: 0,
}
//Bad Ending 2 (BE2)
let badEnding2 = {
  x: 0,
  y: 0,
}

// setup()
// Declaring (+assignment) customized variables as JavaScript objects - named after represented subject


function setup() {
  createCanvas(windowWidth, windowHeight);



}

// draw()
//
// Designing movable/interactive picture;
function draw() {
  background(0);


}
