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
    let y = random(3*height/2, height);
    let arrow = new Arrow(x, y);
    arrows.push(arrow);
  }

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


}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);

// Arrows
for (let i = 0; i < arrows.length; i++){
  let arrow = arrows[i];
  arrow.display();
  arrow.move();
  arrow.hit();
}

// Bunnies
for (let i = 0; i < bunnies.length; i++){
  let bunny= bunnies[i];
  bunny.display();
  bunny.move();
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


// // Bunny
// //Body
// push();
// fill(242, 229, 46);
// ellipse(width/2, height/2, 130, 120);
// // Ears
// fill(242, 229, 46);
// ellipse(width/2 - 6, height/2 - 40, 30, 120);
// ellipse(width/2 + 20, height/2 - 40, 30, 120);
// // Face
// fill(255);
// ellipse(width/2 + 6, height/2, 60);
// // Eyes
// fill(0);
// ellipse(width/2 - 3, height/2 + 3, 6);
// ellipse(width/2 + 22, height/2 + 3, 6);
// // Pink "Stripes"
// fill(255, 69, 183);
// rect(width/2 - 3, height/2 + 12, 6);
// rect(width/2 + 22, height/2 + 12, 6);
// rect(width/2 - 3, height/2 - 6, 6);
// rect(width/2 + 22, height/2 - 6, 6);
// pop();

}
