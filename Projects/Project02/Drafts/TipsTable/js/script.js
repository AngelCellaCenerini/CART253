/**************************************************
Template p5 by CART253
Angel Cella Cenerini

Project 02 - Drafts: TipsTable OOP
**************************************************/
let tipsTable;
let cues = [
  ``,
  `1. What a lovely keyboard you have there,
  lying on your desk.`,
  `2. I am flickering.`,
  `3. Don't read me like that.`,
  `4. Try me backwards.`,
  `5. Did you get it yet? Type me!`
];
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
rectMode(CENTER);

let x = width/2;
let y = height/2;
let positionX = 2*width/5;
let positionY = 4*height/5;
let tips = cues;
tipsTable = new TipsTable(x, y, positionX, positionY, tips);

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);


tipsTable.display();
}

function keyPressed(){
  tipsTable.keyPressed();
}

function keyTyped(){
  tipsTable.keyTyped();
}

function mousePressed(){
  tipsTable.mousePressed();
}
