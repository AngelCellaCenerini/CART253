/**************************************************
Project02 - Drafts: Level04
Angel Cella Cenerini

Template by CART253 course
Level04
**************************************************/
// Arrow(s)
let arrows = [];
let numArrows = 6;

// Bunny
let bunnies = [];

// Word User has to type in order to surpass level
let answer = `parent`;
// Keeping Track of User's Input
let currentInput = ``;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);


  // Yellow Bunny
  let x = width/3;
  let y = 2*height/3;
  let yellowBunny = new Bunny(x, y);
  bunnies.push(yellowBunny);

  // Purple Bunny
  x = width/2;
  y = height/2;
  let purpleBunny = new PurpleBunny(x, y);
  bunnies.push(purpleBunny);

  // Arrow(s)
  for (let i = 0; i < numArrows; i++){
    let x = random(0, width);
    let y = random(3*height/2, height);
    let arrow = new Arrow(x, y);
    arrows.push(arrow);
  }


}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);



// Bunnies
for (let i = 0; i < bunnies.length; i++){
  let bunny= bunnies[i];
  bunny.display();
  bunny.move();
  // bunny.block(purpleBunny);
}

// Arrows
for (let i = 0; i < arrows.length; i++){
  let arrow = arrows[i];
  arrow.track();
}

checkInputProgress();

}

// Level
function checkInputProgress(){
  // Current Input Settings
  push();
  fill(255);
  textSize(30);
  // Check if Word Inserted is Correct
  let correct = checkInput();
  // Display Current Input from User
  text(currentInput, width/2, 3*height/5);
  pop();
}

function checkInput() {
  // Converting Input to Lower Case
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if the Converted Input corrisponds to Answer
  if (lowerCaseInput === answer) {
    console.log(`success`);
    arrow.active = false;
  }
  else {
    return false;
  }
}

// p5 Events
function keyPressed(){
  if (keyCode === 8) {
    // User Resets Inserted Input
    currentInput = ``;
  }
}

function keyTyped() {
  if (keyCode !== 13){
    currentInput += key;
  }
}
