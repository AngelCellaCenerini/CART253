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
  width: 500,
  height: 400
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

//Declaring States; *(b+g) = bad + good outcome;
let state = `happyEnding`; //Title, Menu(b+g), Level01(b+g), Level02(b+g), Level03(b+g), Level04(b+g), Happy Ending

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
  happyEnding = loadImage('assets/images/happyEnding.jpg');
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  positioningBackgroundImages();
  textFont(myFontBody);

}


function positioningBackgroundImages(){
  //Centering .jpg files to canvas, for they function as backgrounds for the different states.
  imgIntro.x = width/2;
  imgIntro.y = 2*height/3;

  imgKittens.x = width/2;
  imgKittens.y = height/2;

  imgPetShop.x = width/2;
  imgPetShop.y = height/2;

  imgStreetEnding.x = width/2;
  imgStreetEnding.y = height/2;

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(bg.r, bg.g, bg.b);

  if (state === `title`){
    title();
    details();
    start();
  }
  else if (state === `happyEnding`){
    finalEnding();
  }


  //Cursor (User)
  imgCursor.x = mouseX;
  imgCursor.y = mouseY;
  image(cursor, imgCursor.x,imgCursor.y, imgCursor.size);

}

//Title screen - black cat, cream background, black text
function title(){
  push();
  image(intro, imgIntro.x, imgIntro.y, imgIntro.width,imgIntro.height);
  textFont(myFontTitle);
  fill(20);
  textSize(150);
  textAlign(CENTER, CENTER);
  text(`CAt oWnER`, width/2, height/5);
  pop();
}

function details(){

  push()
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`SIMULATOR`, width/2, 3*height/8);
  pop();
}

function start(){

  push();
  textSize(18);
  textAlign(CENTER, CENTER);
  text(`Press SPACEBAR to start`, width/2, 14*height/15);
  pop();
}

function finalEnding(){

  // Blue-indigo background
  push();
  bg.r = 132;
  bg.g = 148;
  bg.b = 217;
  background(bg.r, bg.g, bg.b);
  // Holding purring cat icon
  imgHappyEnding.x = 2*width/3;
  imgHappyEnding.y = 3*height/5;
  image(happyEnding, imgHappyEnding.x, imgHappyEnding.y);
  //Red, rectangular text box, with rounded corners
  noStroke();
  fill(234, 105, 72);
  rect.width = 700;
  rect.height = 265;
  rect.radius = 15;
  rect(width/40, height/20,rect.width,rect.height, rect.radius, rect.radius, rect.radius, rect.radius);
  // (Almost) white text - three different sizes
  fill(250, 248, 236);
  textSize(50);
  text(`You did it!`, width/20, height/7);
  textAlign(LEFT, CENTER);
  textSize(25);
  text(`  You have proved yourself worthy of
  your cat's company! From here on, there
  will be only cuddly and purry moments!`, width/28, height/4);
  textSize(17);
  text(`(Not really, but this is the chosen ending for the simulation)`, width/20, 6*height/17);
  pop();

}
