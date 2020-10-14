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
  r: 0,
  g: 0,
  b: 0
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
  width: 400,
  height: 400
}

let imgCat2 = {
  x: 0,
  y: 0,
  width: 400,
  height: 400
}

let imgCat3 = {
  x: 0,
  y: 0,
  width: 400,
  height: 400
}

let imgCat4 = {
  x: 0,
  y: 0,
  width: 400,
  height: 400
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
  speed: 6
}

let imgHoarder2 = {
  x: 0,
  y: 0,
  speed: 10
}

let imgHoarder3 = {
  x: 0,
  y: 0,
  speed: 10
}

let imgHoarder4 = {
  x: 0,
  y: 0,
  speed: 10
}

let imgHoarder5 = {
  x: 0,
  y: 0,
  speed: 10
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
let state = `menu`; //Title, Menu(b+g), Level01(b+g), Level02(b+g), Level03(b+g), Level04(b+g), Happy Ending

function preload(){

  costumedFonts();
  imageFiles();
}


function costumedFonts(){
  myFontTitle = loadFont('assets/CatFont.otf');
  myFontBody = loadFont('assets/AnonymousPro-Regular.otf');
}

function imageFiles(){
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

  //Cat icons (level02) randomly appearing on screen
  imgHoarder1.x = random(0,width);
  imgHoarder1.y = random(0,height);

  imgHoarder2.x = random(0,width);
  imgHoarder2.y = random(0,height);

  imgHoarder3.x = random(0,width);
  imgHoarder3.y = random(0,height);

  imgHoarder4.x = random(0,width);
  imgHoarder4.y = random(0,height);

  imgHoarder5.x = random(0,width);
  imgHoarder5.y = random(0,height);

  //Cat icons (level02) moving in random directions (both vertically and horizontally) with varying speed
  imgHoarder1.vx = random(-imgHoarder1.speed,imgHoarder1.speed);
  imgHoarder1.vy = random(-imgHoarder1.speed,imgHoarder1.speed);

  imgHoarder2.vx = random(-imgHoarder2.speed,imgHoarder2.speed);
  imgHoarder2.vy = random(-imgHoarder2.speed,imgHoarder2.speed);

  imgHoarder3.vx = random(-imgHoarder3.speed,imgHoarder3.speed);
  imgHoarder3.vy = random(-imgHoarder3.speed,imgHoarder3.speed);

  imgHoarder4.vx = random(-imgHoarder4.speed,imgHoarder4.speed);
  imgHoarder4.vy = random(-imgHoarder4.speed,imgHoarder4.speed);

  imgHoarder5.vx = random(-imgHoarder5.speed,imgHoarder5.speed);
  imgHoarder5.vy = random(-imgHoarder5.speed,imgHoarder5.speed);

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

  else if (state === `menu`){
  catOptions();
  menuTextBoxes();
  menuText();

  }

  else if (state === `kittens`){
    kittensBackground();
    kittensText();
    kittensOptions();

  }
  else if (state === `hoarderEnding`){
  hoarder();

}

  else if (state === `happyEnding`){
    finalEndingBackground();
    finalEndingText();
  }

  //Cat icons (Level02) movements;
    imgHoarder1.x = imgHoarder1.x + imgHoarder1.vx;
    imgHoarder1.y = imgHoarder1.y + imgHoarder1.vy;

    imgHoarder2.x = imgHoarder2.x + imgHoarder2.vx;
    imgHoarder2.y = imgHoarder2.y + imgHoarder2.vy;

    imgHoarder3.x = imgHoarder3.x + imgHoarder3.vx;
    imgHoarder3.y = imgHoarder3.y + imgHoarder3.vy;

    imgHoarder4.x = imgHoarder4.x + imgHoarder4.vx;
    imgHoarder4.y = imgHoarder4.y + imgHoarder4.vy;

    imgHoarder5.x = imgHoarder5.x + imgHoarder5.vx;
    imgHoarder5.y = imgHoarder5.y + imgHoarder5.vy;


  //Cursor (User)
  imgCursor.x = mouseX;
  imgCursor.y = mouseY;
  image(cursor, imgCursor.x,imgCursor.y, imgCursor.size);

}

//Title screen - black cat, cream background, black text
function title(){
  push();
  bg.r = 250;
  bg.g = 248;
  bg.b = 236;
  background(bg.r, bg.g, bg.b);
  image(intro, imgIntro.x, imgIntro.y, imgIntro.width,imgIntro.height);
  textFont(myFontTitle);
  fill(20);
  textSize(150);
  textAlign(CENTER, CENTER);
  text(`CAt oWnER`, width/2, height/5);
  pop();
}

function details(){

  push();
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

function catOptions(){
  //"Menu" - Cat options
  //Cat icons
    imgCat1.x = width/8;
    imgCat1.y = height/2;
    imgCat2.x = 3*width/8;
    imgCat2.y = height/2;
    imgCat3.x = 5*width/8;
    imgCat3.y = height/2;
    imgCat4.x = 7*width/8;
    imgCat4.y = height/2;

  image(cat1, imgCat1.x, imgCat1.y, imgCat1.width, imgCat1.height);
  image(cat2, imgCat2.x, imgCat2.y, imgCat2.width, imgCat2.height);
  image(cat3, imgCat3.x, imgCat3.y, imgCat3.width, imgCat3.height);
  image(cat4, imgCat4.x, imgCat4.y, imgCat4.width, imgCat4.height);
}

function menuTextBoxes(){
  //"Menu" - Cat options
  //Indigo text boxes
  push();
  //Caption
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 1400;
  rect.height = 80;
  rect.radius = 15;
  rect(width/2,height/7, rect.width, rect.height, rect.radius, rect.radius);
  //Options
  rect.width = 300;
  rect.height = 80;
  rect.radius = 15;
  rect(width/9,4*height/5, rect.width, rect.height, rect.radius, rect.radius);
  rect(4*width/11,4*height/5, rect.width, rect.height, rect.radius, rect.radius);
  rect(5*width/8,4*height/5, rect.width, rect.height, rect.radius, rect.radius);
  rect(7*width/8,4*height/5, rect.width, rect.height, rect.radius, rect.radius);
  pop();
}

function menuText(){
  //"Menu" - Cat options
  // (Almost)white text
  //Caption
  push();
  noStroke();
  textAlign(CENTER,CENTER);
  fill(260, 268, 246);
  textSize(20);
  text(`First off, choose your kitty!`, width/2, height/7);
  //Options
  text(`Fluffy Embrace`, width/9, 4*height/5);
  text(`Black Beauty`, 4*width/11, 4*height/5);
  text(`Speckled Love`, 5*width/8, 4*height/5);
  text(`The type doesn't matter,
  a cat is a cat`, 7*width/8, 4*height/5);
    pop();
}

function kittensBackground(){
  // Kittens - level02
  push();
  // Background
  image(kittens, imgKittens.x, imgKittens.y);
  pop();
}

function kittensText(){

  push();
  // Indigo text box
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 1400;
  rect.height = 150;
  rect.radius = 15;
  rect(width/2,height/7, rect.width, rect.height, rect.radius, rect.radius);
  // (Almost)white text
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  textSize(20);
  text(`    Oh, this lady is giving away kittens for free! Not exactly what you were looking for, but maybe a furry friend could
    be just what your own pet needs?

    What will you do?`, width/30, height/7);

    pop();
}

function kittensOptions(){
  push();
  //Avilable choises:
  //Affermative/Negative
  //Text boxes
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 400;
  rect.height = 80;
  rect.radius = 15;
  rect(width/6, 2*height/5, rect.width, rect.height, rect.radius, rect.radius);
  rect(width/6, 3*height/5, rect.width, rect.height, rect.radius, rect.radius);
  //Texts
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  textSize(20);
  text(`More kitties, more cuddles`, width/20, 2*height/5);
  text(`Hmm..I'd rather focus on
the cat I already have`, width/20, 3*height/5);
  pop();
}

function hoarder(){
  //Hoerder ending - Level02 Bad Ending
  //Repeated cat icons moving acroos screen
  for(i = 0;i<2;i++){
    imgHoarder1.x = random(0,width);
    imgHoarder1.y = random(0,height);
    image(hoarder1, imgHoarder1.x, imgHoarder1.y);
  }
  //Lilac text box (rounded corners)
  push();
  noStroke();
  fill(215, 177, 236);
  rectMode(CENTER);
  rect.width = 900;
  rect.height = 150;
  rect.radius = 15;
  rect(width/2, height/2,rect.width,rect.height, rect.radius, rect.radius, rect.radius, rect.radius);
  //(Almost)white text
  textAlign(CENTER,CENTER);
  fill(260, 268, 246);
  textSize(20);
  text(`Yikes! It seems that one kitten was just the beginning
    of a spiraling hoarding disorder! You could not resist the
    feline charms and are now a fanatical catlady, shunned by society.`, width/2, height/2);
  pop();

}

function finalEndingBackground(){

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
  pop();

}

function finalEndingText(){

  push();
  //Red, rectangular text box, woth
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
