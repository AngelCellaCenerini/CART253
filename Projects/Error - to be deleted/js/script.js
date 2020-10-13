/**************************************************
PROJECT 01 - SIMULATION
Template p5 project by CART253 course
Angel Cella Cenerini

CAT OWNER SIMULATOR
**************************************************/
//Setting "strict mode"
// "use strict";

//Declaring materials (image, font, sound files).
//Declaring Font
let myFontTitle;
let myFontBody;

//Background
let bg = {
  r: 250,
  g: 248,
  b: 236
}

//Declaring image files
//Cursor (User)
let imgCursor = {
  x: 0,
  y: 0,
  size: 50
}
// Title background
let imgBlackCat = {
  x: 0,
  y: 0,
}

//Menu - cat choises
let imgCat1 = {
  x: 0,
  y: 0,
  size: 550
}

let imgCat2 = {
  x: 0,
  y: 0,
  size: 550
}

let imgCat3 = {
  x: 0,
  y: 0,
  size: 550
}

let imgCat4 = {
  x: 0,
  y: 0,
  size: 550
}

//Level01
//Cat
let imgCat = {
  x: 0,
  y: 0,
  size: 550
}

// //BadEnding02
// let cryingCat = {
//   x: 0,
//   y: 0,
//   size: 500
// }

//Level02 - Doors
let imgOpenedDoor = {
  x: 0,
  y: 0,
  width: 400,
  height: 500
}

let imgDoor1 = {
  x: 0,
  y: 0,
  width: 400,
  height: 500
}

let imgDoor2 = {
  x: 0,
  y: 0,
  width: 400,
  height: 500
}

let imgDoor3 = {
  x: 0,
  y: 0,
  width: 400,
  height: 500
}

//Level03
//Kittens
let imgKittens = {
  x: 0,
  y: 0,
}

//Bad ending03 - cat hoarder
let imgHoarder1 = {
  x: 0,
  y: 0,
}

let imgHoarder2 = {
  x: 0,
  y: 0,
}

let imgHoarder3 = {
  x: 0,
  y: 0,
}

let imgHoarder4 = {
  x: 0,
  y: 0,
}

let imgHoarder5 = {
  x: 0,
  y: 0,
}

//Level04
//Petshop
let imgPetShop = {
  x: 0,
  y: 0,
}

//Simple Toy
let imgSimpleToy = {
  x: 0,
  y: 0,
  size: 300
}

//Expensive Toy
let imgExpensiveToy = {
  x: 0,
  y: 0,
  size: 300
}

//Bad Ending 04
let imgStreetEnding = {
  x: 0,
  y: 0,
}

//Happy Ending
 let imgHappyEnding = {
   x: 0,
   y: 0

}

function preload(){
myFontTitle = ('assets/CatFont.otf');
myFontBody = ('assets/AnonymousPro-Regular.otf');
cursor = loadImage('assets/images/cursor.png');
intro = loadImage('assets/images/intro.jpg');
cat1 = loadImage('asstes/images/cat1.png');
cat2 = loadImage('assets/images/cat2.png');
cat3 = loadImage('assets/images/cat3.png');
cat4 = loadImage('assets/images/cat4.png');
cat = loadImage('assets/images/cat.png');
// cryingCat = loadImage('assets/images/cryingCat.png');
openedDoor = loadImage('assets/images/openedDoor.png');
door1 = loadImage('assets/images/door1.png');
door2 = loadImage('assets/images/door2.png');
door3 = loadImage('assets/images/door3.png');
kittens = loadImage('assets/images/kittens.jpg');
hoarder1 = loadImage('assets/images/horder1.png');
hoarder2 = loadImage('assets/images/horder2.png');
hoarder3 = loadImage('assets/images/horder3.png');
hoarder4 = loadImage('assets/images/horder4.png');
hoarder5 = loadImage('assets/images/horder5.png');
petShop = loadImage('assets/images/petShop.jpg');
simpleToy = loadImage('assets/images/simpleToy.png');
expensiveToy = loadImage('assets/images/expensiveToy.png');
streetEnding = loadImage('assets/images/streetEnding.jpg');
happyEnding = loadImage('assets/images/happyEnding.jpg');

}

// setup()
//
// Description of setup() goes here.
function preload(){

myFontTitle = ('assets/CatFont.otf');
myFontBody = ('assets/AnonymousPro-Regular.otf');
cursor = loadImage('assets/images/cursor.png');
intro = loadImage('assets/images/intro.jpg');
cat1 = loadImage('asstes/images/cat1.png');
cat2 = loadImage('assets/images/cat2.png');
cat3 = loadImage('assets/images/cat3.png');
cat4 = loadImage('assets/images/cat4.png');
cat = loadImage('assets/images/cat.png');
// cryingCat = loadImage('assets/images/cryingCat.png');
openedDoor = loadImage('assets/images/openedDoor.png');
door1 = loadImage('assets/images/door1.png');
door2 = loadImage('assets/images/door2.png');
door3 = loadImage('assets/images/door3.png');
kittens = loadImage('assets/images/kittens.jpg');
hoarder1 = loadImage('assets/images/horder1.png');
hoarder2 = loadImage('assets/images/horder2.png');
hoarder3 = loadImage('assets/images/horder3.png');
hoarder4 = loadImage('assets/images/horder4.png');
hoarder5 = loadImage('assets/images/horder5.png');
petShop = loadImage('assets/images/petShop.jpg');
simpleToy = loadImage('assets/images/simpleToy.png');
expensiveToy = loadImage('assets/images/expensiveToy.png');
streetEnding = loadImage('assets/images/streetEnding.jpg');
happyEnding = loadImage('assets/images/happyEnding.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(bg.r, bg.g, bg.b);
image(cat, imgCat.x, imgCat.y, imgCat.size);
}
