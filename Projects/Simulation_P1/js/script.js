/**************************************************
PROJECT 01 - Simulation
Angel Cella Cenerini
(Template by CART253 Course)

CAT OWNER SIMULATOR
**************************************************/
"use strict;";

//Declaring fonts
let myFontTitle;
let myFontBody;

//Backround
let bg = {
  r: 0,
  g: 0,
  b: 0
}

let bg2 = {
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
  size: 400
}

let imgCat2 = {
  x: 0,
  y: 0,
  size: 400
}

let imgCat3 = {
  x: 0,
  y: 0,
  size: 400
}

let imgCat4 = {
  x: 0,
  y: 0,
  size: 400
}

//Menu - Bad Ending
let imgCryingCat = {
  x: 0,
  y: 0,
}

// Level02 - Doors minigame
//Level02 - Small Decorative Icon
let imgCat = {
  x: 0,
  y: 0,
  size: 550
}

//Level02 - Doors Icons
let imgDoor1 = {
  x: 0,
  y: 0,
  width: 250,
  height: 350
}

let imgDoor2 = {
  x: 0,
  y: 0,
  width: 250,
  height: 350
}

let imgDoor3 = {
  x: 0,
  y: 0,
  width: 250,
  height: 350
}

let openedDoor1 = {
  x: 0,
  y: 0,
  width: 204,
  height: 407
}

let openedDoor2 = {
  x: 0,
  y: 0,
  width: 204,
  height: 407
}

let openedDoor3 = {
  x: 0,
  y: 0,
  width: 204,
  height: 407
}

// Level01 ends after Countdown
let timerLevel01 = 15;

// Doors remain closed without User's input
let displayOpenedDoor1 = false;
let displayOpenedDoor2 = false;
let displayOpenedDoor3 = false;

// Declaring Countdown before doors close automatically -level01
let timerDoor1Closing = 2;
let timerDoor2Closing = 2;
let timerDoor3Closing = 2;

//Level02 - Street
let imgKittens = {
  x: 0,
  y: 0,
}
//Bad Ending 02
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

//Level03 - Petshop
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

//Bad Ending 03
let imgStreetEnding = {
  x: 0,
  y: 0,
}

//Happy Ending
let imgHappyEnding = {
  x: 0,
  y: 0
}

// Declaring Choice buttons in Level 02
let choice01 = {
  x: 0,
  y: 0,
  width: 310,
  height: 80,
  radius: 15
}

let choice02 = {
  x: 0,
  y: 0,
  width: 450,
  height: 80,
  radius: 15
}


//Declaring States; *(b+g) = bad + good outcome;
let state = `menuGoodEnding`; //Title, Menu(b+g), Level01(b+g), Level02(b+g), Level03(b+g), Level04(b+g), Happy Ending

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
  cryingCat = loadImage('assets/images/cryingCat.png');
  cat = loadImage('assets/images/cat.png');
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
  textSize(20);

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

  //Title
  if (state === `title`){
    title();
    details();
    start()

  }

  //Menu
  else if (state === `menu`){
    catOptions();
    menuTextBoxes();
    menuText();

  }
  // Menu's Bad Ending
  else if (state === `cryingCat`){
    cryingCatIcon();
    cryingCatTextBox();
    cryingCatText();
    returnToTitleScreen();

  }
  // Menu's "Good" Ending
  else if (state === `menuGoodEnding`){
    menuGoodEndingTextBox();
    menuGoodEndingText();

}

  // Level 01
  else if (state === `doors`){
  level01Countdown(); //15 seconds
  doorsIcons();

  openingDoor1();
  door1ClosingAutomatically(); //User "opens" up to 3 doors, which will automatically close after 2 seconds

  openingDoor2();
  door2ClosingAutomatically();

  openingDoor3();
  door3ClosingAutomatically();

}

  // Level01 - Level02 transition
  else if (state === `outside01`){
    outside01TextBox();
    outside01Text();
    clickToContinueText();

}

 // Level 02
  else if (state === `kittens`){
    kittensBackground();
    kittensText();
    kittensOptions();

  }
  // Level02 - Bad Ending
  else if (state === `hoarderEnding`){
    hoarder();
    returnToTitleScreen();

}
  // Level02- Good outcome
  else if (state === `outside02`){
    outside02TextBox();
    outside02Text();

  }

// Level03
 else if (state === `petShop`){
   petShopGraphics();
   petShopTextBoxes();
   petShopText();

 }
 // Level03 - Bad ending
 else if (state === `streetEnding`){

   streetEndingBackground();
   streeEndingTextBox();
   streetEndingText();
   returnToTitleScreen();

 }
 //Level03 - Good outcome
 else if (state === 'lastTextPanel'){
   lastTextPanelTextBox();
   lastTextPanelText();

 }

 // Happy Ending!
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


    //Check Bad Ending 01 - User choosing Cat 1, 2 or 3 in Menu
    let d1 = dist(imgCursor.x, imgCursor.y, imgCat1.x, imgCat1.y);
    if ((d1 < imgCursor.size/2 + imgCat1.size/2) && (mouseIsPressed) && (state === `menu`)){
      state = `cryingCat`;
    }

    let d2 = dist(imgCursor.x, imgCursor.y, imgCat2.x, imgCat2.y);
    if ((d2 < imgCursor.size/2 + imgCat2.size/2) && (mouseIsPressed) && (state === `menu`)){
      state = `cryingCat`;
    }

    let d3 = dist(imgCursor.x, imgCursor.y, imgCat3.x, imgCat3.y);
    if ((d3 < imgCursor.size/2 + imgCat3.size/2) && (mouseIsPressed) && (state === `menu`)){
      state = `cryingCat`;
    }

    //Check "Right" Answer - User choosing Cat 4 in Menu
    let d4 = dist(imgCursor.x, imgCursor.y, imgCat4.x, imgCat4.y);
    if ((d4 < imgCursor.size/2 + imgCat4.size/2) && (mouseIsPressed) && (state === `menu`)){
      state = `doors`;
    }

    //Check Two Possible Outcomes - Level02
    let d5 = dist(imgCursor.x, imgCursor.y, choice01.x, choice01.y);
    let d6 = dist(imgCursor.x, imgCursor.y, choice02.x, choice02.y);
    //Check Bad Ending 02 - User choosing to get kitten(s) in Level02
    if ((d5 < imgCursor.size/2 + choice01.width/2 || d5 < imgCursor.size/2 + choice01.height/2) && (mouseIsPressed) && (state === `kittens`)){
      state = `hoarderEnding`;
    }
    //Check "Right" Answer - User choosing not to get kitten(s) in Level02
    else if ((d6 < imgCursor.size/2 + choice02.width/2 || d6 < imgCursor.size/2 + choice02.height/2) && (mouseIsPressed) && (state === `kittens`)){
        state = `outside02`;
      }
    //Check Two Possible Outcomes - Level03
    let d8 = dist(imgCursor.x, imgCursor.y, imgSimpleToy.x, imgSimpleToy.y);
    let d7 = dist(imgCursor.x, imgCursor.y, imgExpensiveToy.x, imgExpensiveToy.y);
    //Check Bad Ending 02 - User choosing to get kitten(s) in Level02
    if ((d7 < imgCursor.size/2 + imgExpensiveToy.size/2) && (mouseIsPressed) && (state === `petShop`)){
      state = `streetEnding`;
    }
    //Check "Right" Answer - User choosing cheaper toy in Level03
    if((d8 < imgCursor.size/2 + imgSimpleToy.size/2) && (mouseIsPressed) && (state === `petShop`)){
      state = `lastTextPanel`;
    }







  //Cursor (User)
  imgCursor.x = mouseX;
  imgCursor.y = mouseY;
  image(cursor, imgCursor.x,imgCursor.y, imgCursor.size);

}

//Return to Title Screen(State) Option
function returnToTitleScreen(){
  keyPressed();
  //Option to return to menu by pressing "ESC" key
  // (Almost)white text
  //Direction
  push();
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(15);
  fill(260, 268, 246);
  text(`Press ESC to return to Title Screen.`, width/2, 6*height/7);
  pop();
}

function clickToContinueText(){
  //Clicking mouse to continue simulation
  push();
  noStroke();
  textAlign(RIGHT, RIGHT);
  fill(260, 268, 246);
  textSize(15);
  text(`Click to continue >`, 6*width/7, 6*height/7);
  pop();
}

//Title screen - black cat, cream background, black text
function title(){
  push();
  background(bg2.r, bg2.g, bg2.b);
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
  text(`First off, choose your kitty!`, width/2, height/7);
  //Options
  text(`Fluffy Embrace`, width/9, 4*height/5);
  text(`Black Beauty`, 4*width/11, 4*height/5);
  text(`Speckled Love`, 5*width/8, 4*height/5);
  text(`The type doesn't matter,
  a cat is a cat`, 7*width/8, 4*height/5);
    pop();
}

function cryingCatIcon(){
  imgCryingCat.x = 3*width/4;
  imgCryingCat.y = 4*height/5;
  image(cryingCat, imgCryingCat.x, imgCryingCat.y);
}

function cryingCatTextBox(){
  // Menu - Bad Ending
  // Indigo Text Box
  push();
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 750;
  rect.height = 150;
  rect.radius = 15;
  rect(width/2, height/4, rect.width, rect.height, rect.radius, rect.radius);
  pop();
}

function cryingCatText(){
  // Menu - Bad Ending
  // (Almost) White Text
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`    How could you? :(
    All cats are beautiful, you are not allowed a preference.`, width/4, height/4);
  pop();
}

function menuGoodEndingTextBox(){
  // Menu - "Good" Ending
  // Indigo Text Box
  push();
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 1000;
  rect.height = 300;
  rect.radius = 15;
  rect(width/2, height/2, rect.width, rect.height, rect.radius, rect.radius);
  pop();
}

function menuGoodEndingText(){
  // Menu - "Good" Ending
  // (Almost) White Text
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`Oh! We've got a true cat lover here!
Alright, let's see if you are ready for the next challenge.
Cats need constant access to the entire house; it doesn't matter whether
they enter the room or not, do not leave the doors closed!

You'll have 15 seconds to prove yourself a dedicated caregiver!
Click on the doors to open them!`, width/5, height/2);
  pop();
}

function level01Countdown(){
  // Countdown for Level01; 15 seconds
  if ((frameCount % 60 === 0) && (timerLevel01 > 0) && (state === `doors`)){
    timerLevel01 --;
  }
  if (timerLevel01 === 0){
    state = `outside01`;
  }
}

function doorsIcons(){
  //Level 01 - Doors
  //Door icons
  imgDoor1.x = width/4;
  imgDoor1.y = height/2;
  imgDoor2.x = width/2;
  imgDoor2.y = height/2;
  imgDoor3.x = 3*width/4;
  imgDoor3.y = height/2;

  image(door1, imgDoor1.x, imgDoor1.y, imgDoor1.width, imgDoor1.height);
  image(door2, imgDoor2.x, imgDoor2.y, imgDoor2.width, imgDoor2.height);
  image(door3, imgDoor3.x, imgDoor3.y, imgDoor3.width, imgDoor3.height);
}

function openingDoor1(){
    //level01 - doors
    //Opened Door 1 (Balck rectangle illusion)
    if (displayOpenedDoor1){
      push();
      noStroke();
      fill(0);
      rectMode(CENTER);
      openedDoor1.x = width/4;
      openedDoor1.y = 4*height/7;
      rect(openedDoor1.x, openedDoor1.y, openedDoor1.width, openedDoor1.height);
      pop();
    }

    //Checking if User 'opens' Door1 - timer resets here
    d9 = dist(imgCursor.x, imgCursor.y, imgDoor1.x, imgDoor1.y);

    if( mouseIsPressed && (d9 < imgCursor.size/2 + imgDoor1.width/2 || d9 < imgCursor.size/2 + imgDoor1.height/2) && (state === `doors`)){
      displayOpenedDoor1 = true;
      timerDoor1Closing = 2;
    }
}

function door1ClosingAutomatically(){
  //Door1 "closing" on its own after 2 seconds
  if(frameCount % 60 === 0 && timerDoor1Closing > 0){
    timerDoor1Closing --;
  }
  if(timerDoor1Closing === 0){
    displayOpenedDoor1 = false;
  }
}

function openingDoor2(){
  //level01 - doors
  //Opened Door 2 (Balck rectangle illusion)
  if (displayOpenedDoor2){
    push();
    noStroke();
    fill(0);
    rectMode(CENTER);
    openedDoor2.x = width/2;
    openedDoor2.y = 4*height/7;
    rect(openedDoor2.x, openedDoor2.y, openedDoor2.width, openedDoor2.height);
    pop();
  }
  //Checking if User 'opens' Door2 - timer resets here
  d10 = dist(imgCursor.x, imgCursor.y, imgDoor2.x, imgDoor2.y);

  if( mouseIsPressed && (d10 < imgCursor.size/2 + imgDoor2.width/2 || d10 < imgCursor.size/2 + imgDoor2.height/2) && (state === `doors`)){
    displayOpenedDoor2 = true;
    timerDoor2Closing = 2;
  }
}

function door2ClosingAutomatically(){
  //Door2 "closing" on its own after 2 seconds
  if(frameCount % 60 === 0 && timerDoor2Closing > 0){
    timerDoor2Closing --;
  }
  if(timerDoor2Closing === 0){
    displayOpenedDoor2 = false;
  }
}

function openingDoor3(){
  //level01 - doors
  //Opened Door 3 (Balck rectangle illusion)
  if (displayOpenedDoor3){
    push();
    noStroke();
    fill(0);
    rectMode(CENTER);
    openedDoor3.x = 3*width/4;
    openedDoor3.y = 4*height/7;
    rect(openedDoor3.x, openedDoor3.y, openedDoor3.width, openedDoor3.height);
    pop();
  }

  //Checking if User 'opens' Door3 - timer resets here
  d11 = dist(imgCursor.x, imgCursor.y, imgDoor3.x, imgDoor3.y);

  if( mouseIsPressed && (d11 < imgCursor.size/2 + imgDoor3.width/2 || d11 < imgCursor.size/2 + imgDoor3.height/2) && (state === `doors`)){
    displayOpenedDoor3 = true;
    timerDoor3Closing = 2;
  }
}

function door3ClosingAutomatically(){
  //Door3 "closing" on its own after 2 seconds
  if(frameCount % 60 === 0 && timerDoor3Closing > 0){
    timerDoor3Closing --;
  }
  if(timerDoor3Closing === 0){
    displayOpenedDoor3 = false;
  }

  }

function outside01TextBox(){
  // Outside01
  // Indigo Text Box
  push();
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 1100;
  rect.height = 300;
  rect.radius = 15;
  rect(width/2, height/2, rect.width, rect.height, rect.radius, rect.radius);
  pop();
}

function outside01Text(){
  // Outside01
  // (Almost) White Text
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`  Ha! Foolish human, your time was wasted, for cats are well-trained in the technique of
  teleportation. Still, your pet appreciates the effort.


  Now, your kitty needs supplies; you head to the pet store.


  On the way there, you see someone waving you over...`, width/6, height/2);
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
  // Indigo Text Box
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

  choice01.x = 2*width/13;
  choice01.y = 2*height/5;
  rect(choice01.x, choice01.y, choice01.width,  choice01.height,  choice01.radius,  choice01.radius, choice01.radius,  choice01.radius);

  choice02.x = width/5;
  choice02.y = 3*height/5;
  rect(choice02.x, choice02.y, choice02.width, choice02.height, choice02.radius, choice02.radius, choice02.radius, choice02.radius)
  //Texts
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`More kitties, more cuddles.`, width/16, 2*height/5);
  text(`Hmm..I'd rather focus on the cat
I already have.`, width/15, 3*height/5);
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
  text(`Yikes! It seems that one kitten was just the beginning
    of a spiraling hoarding disorder! You could not resist the
    feline charms and are now a fanatical catlady, shunned by society.`, width/2, height/2);
  pop();

}

function outside02TextBox(){
  // Outside02
  // Indigo Text Box
  push();
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 815;
  rect.height = 200;
  rect.radius = 15;
  rect(width/2, height/2, rect.width, rect.height, rect.radius, rect.radius);
  pop();
}

function outside02Text(){
  // Outside02
  // (Almost) White Text
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`    Turning your back to kittens is heartbreaking, but you survived it.
    And now, you're stronger because of it.
    ...or something.

    You resume your walk.`, 2*width/9, height/2);
  pop();
}

function petShopGraphics(){
  // Level03
  // PetShop Background
  image(petShop, imgPetShop.x, imgPetShop.y);
  // Toy Options
  imgSimpleToy.x = width/3;
  imgSimpleToy.y = 2*height/5;
  imgExpensiveToy.x = 2*width/3;
  imgExpensiveToy.y = 2*height/5;

  image(simpleToy, imgSimpleToy.x, imgSimpleToy.y);
  image(expensiveToy, imgExpensiveToy.x, imgExpensiveToy.y);
}

function petShopTextBoxes(){
  // Level03
  //Indigo Text Boxes
  //Caption
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 850;
  rect.height = 110;
  rect.radius = 15;
  rect(width/2, height/9, rect.width, rect.height, rect.radius, rect.radius);
  //Options
  rect.width = 305;
  rect.height = 50;
  rect.radius = 15;
  rect(width/3, 7*height/11, rect.width, rect.height, rect.radius, rect.radius);
  rect(2*width/3, 7*height/11, rect.width, rect.height, rect.radius, rect.radius);
}

function petShopText(){
  // Level03
  //(Almost) White Text
  //Caption
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  textSize(18);
  text(`  You get to the pet store and pick up all the necessities.
 When choosing a toy for your pet, however, you are presented with two options;
 the most obvious difference between them is the price range. What to buy?`, 2*width/9, height/9);
  //Options
  textAlign(CENTER, CENTER);
  text(`This one will do!`, width/3, 7*height/11);
  text(`My cat would  l o v e  this!`, 2*width/3, 7*height/11);
    pop();
}

function streetEndingBackground(){
  // Level 03
  // Background
  image(streetEnding, imgStreetEnding.x, imgStreetEnding.y);
}

function streeEndingTextBox(){
  // Level03 - Bad Ending
  //Blue Text Boxes
  //Caption
  push();
  stroke(255);
  strokeWeight(2);
  rectMode(CENTER);
  fill(74, 112, 149);
  rect.width = 850;
  rect.height = 110;
  rect.radius = 15;
  rect(width/2, 2*height/19, rect.width, rect.height, rect.radius, rect.radius);
  pop();
}

function streetEndingText(){
  // Level03 - Bad Ending
  //(Almost) White Text
  //Caption
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  textSize(18);
  text(` Goodness me! You kept vainly spending all of your money on expensive toys,
 never understanding that cats care more about the wrapping than the
 objects themselves.
 But hey, now there's plenty of bags and cardboards for your pet to enjoy. `, width/4, height/10);
 pop();
}

function lastTextPanelTextBox(){
  // Last Text Panel
  // Indigo Text Box
  push();
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);
  rect.width = 810;
  rect.height = 180;
  rect.radius = 15;
  rect(width/2, height/2, rect.width, rect.height, rect.radius, rect.radius);
  pop();
}

function lastTextPanelText(){
  // Outside01
  // (Almost) White Text
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`Yes! That was a winning move! Your cat loves playing together with you!

After this much activity, the two of you settle down
for a well-deserved nap...`, width/4, height/2);
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
  text(`(Not really, but this is the chosen ending for the simulation.)`, width/20, 6*height/17);
  pop();

}




// Checking if User presses ESC key
function keyPressed() {
if (keyCode === 32 && state === `title`) {
state = `menu`;
}
else if (keyCode ===27){
  state = `title`;
}
}
