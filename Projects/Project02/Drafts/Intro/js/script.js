/**************************************************
Template p5 project by CART253 Course
ANgel Cella Cenerini

Project 02 - Drafts: Intro (Title Screen + Instructions)
**************************************************/

// Madeleine Logo/Icon
let madeleine;
// States
let state = 'instructions'  // Title, Instructions
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  textSize(20);
  textAlign(CENTER, CENTER);

  let x = width/2;
  let y = 2*height/3;
  madeleine = new Madeleine(x, y);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if(state === `title`){
    push();
    fill(255);
    textSize(60);
    text(`MADELEINE`, width/2, height/3);
    pop();

    madeleine.display();
  }
  else if(state === `instructions`){

    push();
    fill(255);
    text(`Welcome to 'Madeleine'.




    Survive the levels to pass onto the next challenge.
    Solve the puzzles to surpass them.

    When in a level, press SPACEBAR at anytime to open up the Tips Table.
    Certain levels require your input through microphone; choose wisely whether ot not to allow the web page access to your audio :)
    Remember, all levels are timed.

    For your own safety, please keep your volume on the medium-lower end.
    Or blast the volume bar up and enjoy bleeding ears; it is your choice, after all.`, width/2, height/2);
    pop();
  }

}
