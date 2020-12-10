/**************************************************
Template p5 by CART253
Angel Cella Cenerini

Project 02 - Drafts: TipsTable OOP
**************************************************/
// let tipsTable;
let cues01 = [
  ``,
  `1. What a lovely keyboard you have there,
  lying on your desk.`,
  `2. I am flickering.`,
  `3. Don't read me like that.`,
  `4. Try me backwards.`,
  `5. Did you get it yet? Type me!`
];
let cues02 = [
  ``,
  `1. I see you still have your keyboard with you. Good.`,
  `2. I stand to your right when you gaze at the rising sun.`,
  `3. Typing me is not enough.`,
  `4. You only have one attempt.`,
  `5. S h u t   i t   o f f .`
];
let cues03 = [
  ``,
  `1. I see you still have your keyboard with you. Good.`,
  `2. Poor frog.
   If only you could somehow distract the needles form attacking it.`,
  `3. What does a compass yearn for?.`
];
let cues04 = [
  ``,
  `1. They're hungry.`,
  `2. They're confused; they don't really want the moons.`,
  `3. They're  h u n g r y .`,
  `4. If they're not after the moons...`,
  `5. Don't be scared to play with Mother Nature.`,
];
let cues05 = [
  ``,
  `1. I see you still have your keyboard with you. Good.`,
  `2. We each have our own.`,
  `3. Our point of origin, where we derive from.`,
  `4. It is neither father nor mother.`,
  `5. Not plural.`
];

let state = `1`;

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
rectMode(CENTER);

// TipsTable Lv01
let x = width/2;
let y = height/2;
tipsTable01 = new TipsTable(x, y, cues01);

// TipsTable Lv02
x = width/2;
y = height/2;
tipsTable02 = new TipsTable(x, y, cues02);

// TipsTable Lv03
x = width/2;
y = height/2;
tipsTable03 = new TipsTable(x, y, cues03);

// TipsTable Lv04
x = width/2;
y = height/2;
tipsTable04 = new TipsTable(x, y, cues04);

// TipsTable Lv05
x = width/2;
y = height/2;
tipsTable05 = new TipsTable(x, y, cues05);


}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);

if (state === `1`){
 tipsTable01.display();
}
else if (state === `2`){
 tipsTable02.display();
}

}

function keyPressed(){

  tipsTable01.keyPressed();
  tipsTable02.keyPressed();
}
//
// function keyTyped(){
//   tipsTable.keyTyped();
// }

function mousePressed(){

  tipsTable01.mousePressed();
  tipsTable02.mousePressed();



}
