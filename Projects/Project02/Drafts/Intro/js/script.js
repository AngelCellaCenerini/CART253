/**************************************************
Template p5 project by CART253 Course
ANgel Cella Cenerini

Project 02 - Drafts: Intro (Title Screen + Instructions)
**************************************************/
let state = 'title'  // Title, Instructions
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if(state === `title`){
    push();
    fill(255);
    pop();
  }
  else if(state === `instructions`){

    push();
    fill(255);
    text(`Welcome to 'Madeleine'.

    Survive the levels to pass onto the next challenge.
    Solve the puzzles to surpass them.

    Press SPACEBAR at anytime when in a level to open up the Tips Table.
    Certain levels require your input through microphone; choose wisely whether ot not to allow the web page to access to your audio :)
    Remember, all levels are timed.`, width/2, height/2);
    pop();
  }

}