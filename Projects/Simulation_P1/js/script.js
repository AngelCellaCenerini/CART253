/**************************************************
PROJECT 01 - Simulation
Template by CART253 Course
Angel Cella Cenerini

CAT OWNER SIMULATOR
**************************************************/

//Declaring fonts
let myFontTitle;
let myFontBody;

//Backround
let bg = {
  r: 250,
  g: 248,
  b: 236
}

//Declaring image files
// Cursor (User)
let imgCursor = {
  x: 0,
  y: 0,
  size: 50
}

// Title - black cat
let imgIntro = {
  x: 0,
  y: 0,
}

//Menu- Choosing cats
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

//Level01 - Call miniminiminigame
let imgCat = {
  x: 0,
  y: 0,
  size: 550
}

//Level02 - Doors minigame
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

//Level03 - Street
let imgKittens = {
  x: 0,
  y: 0,
}
//Bad Ending 03
let imgHoarder1 = {
  x: 0,
  y: 0,
  size: 150
}

let imgHoarder2 = {
  x: 0,
  y: 0,
  size: 150
}

let imgHoarder3 = {
  x: 0,
  y: 0,
  size: 150
}

let imgHoarder4 = {
  x: 0,
  y: 0,
  size: 150
}

let imgHoarder5 = {
  x: 0,
  y: 0,
  size: 150
}

//Level04 - Petshop
let imgPetShop = {
  x: 0,
  y: 0
}

let imgSimpleToy = {
  x: 0,
  y: 0,
  size: 330
}

let imgExpensiveToy = {
  x: 0,
  y: 0,
  size: 330
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
  
  loadingFonts();
  loadingImages();
}


function loadingFonts(){
  myFontTitle = loadFont('assets/CatFont.otf');
  myFontBody = loadFont('assets/AnonymousPro-Regular.otf');
}

function loadingImages(){
  cursor = loadImage('assets/images/cursor.png');
  intro = loadImage('assets/images/intro.jpg');
  cat1 = loadImage('assets/images/cat1.png');
  cat2 = loadImage('assets/images/cat2.png');
  cat3 = loadImage('assets/images/cat3.png');
  cat4 = loadImage('assets/images/cat4.png');
  cat = loadImage('assets/images/cat.png');
  openedDoor = loadImage('assets/images/openedDoor.png');
  door1 = loadImage('assets/images/door1.png');
  door2 = loadImage('assets/images/door2.png');
  door3 = loadImage('assets/images/door3.png');
  kittens = loadImage('assets/images/kittens.jpg');
  hoarder1 = loadImage('assets/images/hoarder1.png');
  hoarder2 = loadImage('assets/images/hoarder2.png');
  hoarder3 = loadImage('assets/images/hoarder3.png');
  hoarder4 = loadImage('assets/images/hoarder4.png');
  hoarder5 = loadImage('assets/images/hoarder5.png');
  petShop = loadImage('assets/images/petShop.jpg');
  simpleToy = loadImage('assets/images/simpleToy.png');
  expensiveToy = loadImage('assets/images/expensiveToy.png');
  streetEnding = loadImage('assets/images/streetEnding.jpg');
  happyEnding = loadImage('assets/images/happyEnding.png');
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(bg.r, bg.g, bg.b);

  //Cursor (User)
  imgCursor.x = mouseX;
  imgCursor.y = mouseY;
  image(cursor, imgCursor.x,imgCursor.y, imgCursor.size);

}
