/**************************************************
Project02 - Drafts: Level04
Angel Cella Cenerini

Template by CART253 course
Level04
**************************************************/
// Arrow(s)
let arrows = [];
let numArrows = 6;

// Bunnies
let yellowBunny;
let purpleBunny;

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




  // Purple Bunny
  let x = width/2;
  let y = height/2;
  let positionX = width/2;
  let positionY = height/2;
  let mouthY = height/2;
  purpleBunny = new PurpleBunny(x, y, positionX, positionY);

  // Yellow Bunny
  x = width/3;
  y = 2*height/3;
  yellowBunny = new YellowBunny(x, y);

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
// Purple
purpleBunny.hunger();
purpleBunny.devour();
purpleBunny.close(yellowBunny);
purpleBunny.display();

// Yellow
yellowBunny.move();
yellowBunny.guide();
yellowBunny.withdraw(purpleBunny);
yellowBunny.trapped(purpleBunny);
yellowBunny.display();




// Arrows
for (let i = 0; i < arrows.length; i++){
  let arrow = arrows[i];
  arrow.track(yellowBunny);
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
  text(currentInput, width/7, height/2);
  pop();
}

function checkInput() {
  // Converting Input to Lower Case
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if Converted Input corrisponds to Answer
  if (lowerCaseInput === answer) {

    // Freez Arrows
    for (let i = 0; i < arrows.length; i++){
      let arrow = arrows[i];
          arrow.active = false;
    }

    // Display Purple Bunny's face/ears
    purpleBunny.active = true;
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
