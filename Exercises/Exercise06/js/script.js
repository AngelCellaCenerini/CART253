"use strict";

/**************************************************
Exercise 06: "Make Some Noise!"
Template p5 project by CART253 Course
Angel Cella Cenerini

User will guide displyed object(s) through the tone of their voice in order to avoid hitting the obstacles.
**************************************************/
let myFontA;
let myFontB;

// Winged Creatures
let creatures = [];
let numVioletCreatures = 1; // Might use more in the final project
let numBlueCreatures = 1;
let numGreenCreatures = 1;

// Declaring Gravity
let gravityForce = 0.0025;

// "POTS" Buttons
let button = {
  x: 0,
  y: 0,
  width: 300,
  height: 150,
  radius: 15
};

// Tips: Ordered Sequence      - might be too cryptict, feedback is more than welcome pls!
let cues = [
  ``,
  `1. What a lovely keyboard you have there,
  lying on your desk.`,
  `2. I am not falling.`,
  `3. I am flickering.`,
  `4. Don't read me like that.`,
  `5. Try me backwards.`,
  `6. Did you get it yet? Type me!`
];
let currentIndex = 0;

// Word User has to type in order to surpass level
let answer = `stop`;
// Keeping Track of User's Input
let currentInput = ``;


function preload(){
  myFontA = loadFont('assets/AnonymousPro-Regular.otf');
  myFontB = loadFont('assets/BigShouldersStencilDisplay-Regular.otf');
}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER);
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
  if (creature.active){
    creature.move();
    creature.wrap();
    creature.gravity(gravityForce);
    creature.display();
    creature.checkImpact();
  }
}

// Orange Line                              // JS Object??????
push();
stroke(255, 151, 46);
strokeWeight(4);
line(width/3, 5*height/7, 2*width/3, 5*height/7);
pop();

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

tips();

// Current Input Settings
push();
fill(255);
textSize(30);
textFont(myFontA);
// Check if Word Inserted is Correct
  let correct = checkInput();
// Display Current Input from User
text(currentInput, width/2, 3*height/5);
pop();


checkFail();
}


function crypticButtons(){
  // Cryptict Buttons
  textFont(myFontB);
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

function tips(){
   push();
   noStroke();
   fill(255, 255, 255, 120);
   rect(width/2, height/2, 600);
   fill(255);
   textFont(myFontA);
   textAlign(CENTER, LEFT);
   textSize(20);
   text(cues[currentIndex], width/2, height/2);
   textSize(15);
   text(`Click to continue >>`, 2*width/5, 4*height/5);
   pop();
}

function checkInput() {
  // Converting Input to Lower Case
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if the Converted Input corrisponds to Answer
  if (lowerCaseInput === answer) {
    console.log(`yes!`);
  }
  else {
    return false;
  }
}

function checkFail(){
  for (let i = 0; i < creatures.length; i ++){
    let creature = creatures[i];
    if (!creature.active){
      console.log(`fail`);
    }
  }
}

function keyPressed(){
  if (keyCode === 27){
  // state = `intro`;
  }
  else if (keyCode === 84){ ///?
    diplayTips();
  }
  else if (keyCode === 8) {
    // User can Reset Inserted Input
    currentInput = ``;
  }
}

function keyTyped() {
  currentInput += key;
}

function mousePressed(){
  currentIndex = currentIndex + 1;
  if (currentIndex === cues.length){
    currentIndex = 0;
  }
}
