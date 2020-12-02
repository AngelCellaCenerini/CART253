/**************************************************
Project02 - Drafts: Level04
Angel Cella Cenerini

Template by CART253 course
Level04
**************************************************/
let arrows = [];
let numArrows = 7;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);

  // Arrow(s)
  for (let i = 0; i < numArrows; i++){
    let x = random(0, width);
    let y = random(0, height);
    let arrow = new Arrow(x, y);
    arrows.push(arrow);
  }

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);

for (let i = 0; i < arrows.length; i++){
  let arrow = arrows[i];
  arrow.display();
}

// // Arrow
// // Body
// push();
// fill(255);
// rect(width/2, height/2, 3, 150);
// pop();
//
// // Tip
// push();
// stroke(255);
// strokeWeight(3);
// line(width/2 - 15, height/2 - 50, width/2, height/2 - 75);
// line(width/2 + 15, height/2 - 50, width/2, height/2 - 75);
// line(width/2 - 15, height/2 - 50, width/2, height/2 + 25);
// line(width/2 + 15, height/2 - 50, width/2, height/2 + 25);
// pop();
//
// // Tail
// push();
// stroke(255);
// strokeWeight(3);
// line(width/2 - 15, height/2 + 95, width/2, height/2 + 70);
// line(width/2 + 15, height/2 + 95, width/2, height/2 + 70);
// line(width/2 - 15, height/2 + 120, width/2, height/2 + 95);
// line(width/2 + 15, height/2 + 120, width/2, height/2 + 95);
// pop();


}
