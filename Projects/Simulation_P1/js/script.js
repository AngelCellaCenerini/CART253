/**************************************************
PROJECT 01 - Simulation
Angel Cella Cenerini
(Template by CART253 Course)

CAT OWNER SIMULATOR
**************************************************/
"use strict;";

// Declaring fonts
let myFontTitle;
let myFontBody;

// Default Backround - Black
let bg = {
  r: 0,
  g: 0,
  b: 0
}

// Title Backround - Light Cream
let bg2 = {
  r: 250,
  g: 248,
  b: 236
}

// Declaring image files
// Cursor (User) - Cat paw
let imgCursor = {
  x: 0,
  y: 0,
  size: 50
}

// Title - Black Cat
let imgIntro = {
  x: 0,
  y: 0,
  width: 500,
  height: 400
}

// Menu- Cats options
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

// Menu - Bad Ending
let imgCryingCat = {
  x: 0,
  y: 0,
}

// Level01 - Doors minigame
// Level01 - Countdown; level ends after 15 seconds
let timerLevel01 = 15;

// Level01 - Small Decorative Icon
let imgCat = {
  x: 0,
  y: 0,
  size: 550
}

// Level01 - Doors Icons
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

// Doors remain closed without User's input
let displayOpenedDoor1 = false;
let displayOpenedDoor2 = false;
let displayOpenedDoor3 = false;

// Level01 - "Opened" Doors; black rectangles offer illusion of doors opening via User's input
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

// Level01 - Countdown before doors close automatically (2 seconds)
let timerDoor1Closing = 2;
let timerDoor2Closing = 2;
let timerDoor3Closing = 2;

// Level02 - Kittens
let imgKittens = {
  x: 0,
  y: 0,
}

// Level02 - Choice Buttons
let choice01 = {
  x: 0,
  y: 0,
  width: 320,
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

// Level02 - Bad Ending
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

// Level03 - Petshop
let imgPetShop = {
  x: 0,
  y: 0
}

// Level03 - Toys Icons
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

// Level03 - Bad Ending
let imgStreetEnding = {
  x: 0,
  y: 0,
}

// End - Happy Ending
let imgHappyEnding = {
  x: 0,
  y: 0
}



// States; *(b+g) = bad + good outcomes;
let state = `title`; //Title, Menu(b+g), "Transition" Panel - "menuGoodEnding", Level01 - "doors"(b+g),"Transition" Panel - "outside01", Level02 - "kittens"(b+g),"Transition" Panel - "outside02", Level03 - "petShop"(b+g),"Transition" Panel - "lastTextPanel", Happy Ending

//

function preload(){

  costumedFonts();
  imageFiles();

}


function costumedFonts(){

  myFontTitle = loadFont('assets/CatFont.otf');
  myFontBody = loadFont('assets/AnonymousPro-Regular.otf');
}
//

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
//

// setup()
// Canvas + Default Settings
function setup() {

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  positioningBackgroundImages();
  textFont(myFontBody);
  textSize(20);

}
//
// /setup()

function positioningBackgroundImages(){

  // Centering .jpg files, for they function as backgrounds in the different states
  imgIntro.x = width/2;
  imgIntro.y = 2*height/3;

  imgKittens.x = width/2;
  imgKittens.y = height/2;

  imgPetShop.x = width/2;
  imgPetShop.y = height/2;

  imgStreetEnding.x = width/2;
  imgStreetEnding.y = height/2;
}
//

// draw()
// Customized Cursor + Default Background + States
function draw() {

  // Default Backround
  background(bg.r, bg.g, bg.b);

  // Title
  if (state === `title`){
    title();
    details();
    start()

  }

  // Menu
  else if (state === `menu`){
    catOptions();
    menuTextBoxes();
    menuText();
    checkMenuOutcomes();

  }

  // Menu's Bad Ending
  else if (state === `cryingCat`){
    cryingCatIcon();
    cryingCatTextBox();
    cryingCatText();
    returnToTitleScreen();

  }

  // Menu's "Good" Outcome
  else if (state === `menuGoodEnding`){
    menuGoodEndingTextBox();
    menuGoodEndingText();
    clickToContinueText();

  }

  // Level 01 - Doors Minigame
  else if (state === `doors`){
    level01Countdown(); // 15 seconds
    doorsIcons();

    openingDoor1();
    door1ClosingAutomatically(); // User "opens" up to 3 doors, which will automatically close after 2 seconds

    openingDoor2();
    door2ClosingAutomatically();

    openingDoor3();
    door3ClosingAutomatically();

}

  // Level01 / Level02 transition
  else if (state === `outside01`){
    outside01TextBox();
    outside01Text();
    clickToContinueText();

}

 // Level 02 - Kittens
  else if (state === `kittens`){
    kittensBackground();
    kittensText();
    kittensOptions();
    checkLevel02Outcomes();

  }
  // Level02 - Bad Ending
  else if (state === `hoarderEnding`){
    hoarder();
    returnToTitleScreen();

}
  // Level02- "Good" Outcome
  else if (state === `outside02`){
    outside02TextBox();
    outside02Text();
    clickToContinueText();

  }

// Level03 - Pet Shop
 else if (state === `petShop`){
   petShopGraphics();
   petShopTextBoxes();
   petShopText();
   checkLevel03Outcomes();

 }
 // Level03 - Bad ending
 else if (state === `streetEnding`){

   streetEndingBackground();
   streeEndingTextBox();
   streetEndingText();
   returnToTitleScreen();

 }
 //Level03 - "Good" Outcome
 else if (state === 'lastTextPanel'){
   lastTextPanelTextBox();
   lastTextPanelText();
   clickToContinueText();

 }

 // Happy Ending!
  else if (state === `happyEnding`){
    finalEndingBackground();
    finalEndingText();

  }

  // User - Cat Paw Cursor
  displayUser();

}
//
// /draw()

// Return to Title (State) Option
function returnToTitleScreen(){

  //Option to return to menu by pressing "ESC" key
  keyPressed();
  // (Almost)white text - Directions
  push();
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(15);
  fill(260, 268, 246);
  text(`Press ESC to return to Title Screen.`, width/2, 6*height/7);
  pop();
}
//

// Moving forward onto next state - Text
function clickToContinueText(){

  push();
  noStroke();
  textAlign(RIGHT, RIGHT);
  fill(260, 268, 246);
  textSize(15);
  text(`Double Click to continue >`, 6*width/7, 6*height/7);
  pop();
}
//

// Title Screen
function title(){

  // Title - Background
  push();
  background(bg2.r, bg2.g, bg2.b);
  image(intro, imgIntro.x, imgIntro.y, imgIntro.width,imgIntro.height);
  // Title - Text
  textFont(myFontTitle);
  fill(20);
  textSize(150);
  textAlign(CENTER, CENTER);
  text(`CAt oWnER`, width/2, height/5);
  pop();
}

function details(){

  // Title - further details Text
  push();
  textSize(50);
  fill(20);
  textAlign(CENTER, CENTER);
  text(`SIMULATOR`, width/2, 3*height/8);
  pop();
}

function start(){

 // Title - Directions for starting Simulator
  push();
  textSize(18);
  textAlign(CENTER, CENTER);
  fill(20);
  text(`Press SPACEBAR to start`, width/2, 14*height/15);
  pop();
}
//

// Menu - Cat options
function catOptions(){

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

  // (Almost) white text
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
//

// Check Menu's 4 Possible Oucomes
function checkMenuOutcomes(){
  // Menu - Check Bad Ending 01 : User choosing Cat 1, 2 or 3
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

  // Menu - Check "Right" Answer : User choosing Cat 4
  let d4 = dist(imgCursor.x, imgCursor.y, imgCat4.x, imgCat4.y);
  if ((d4 < imgCursor.size/2 + imgCat4.size/2) && (mouseIsPressed) && (state === `menu`)){
    state = `menuGoodEnding`;
  }
}
//

// Menu - Bad Ending
function cryingCatIcon(){

  // Background
  imgCryingCat.x = 3*width/4;
  imgCryingCat.y = 4*height/5;
  image(cryingCat, imgCryingCat.x, imgCryingCat.y);
}

function cryingCatTextBox(){

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

  // (Almost) White Text
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`    How could you? :(
    All cats are beautiful, you are not allowed a preference.`, width/4, height/4);
  pop();
}
//

// Menu - Good Outcome
function menuGoodEndingTextBox(){

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

  // (Almost) White Text
  push();
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`Oh! We've got a true cat lover here!
Alright, let's see if you are ready for the next challenge.
Cats need constant access to the entire house; it doesn't matter whether they enter
the room or not, do not leave the doors closed!

You'll have 15 seconds to prove yourself a dedicated caregiver!
Click on the doors to open them!`, width/5, height/2);
  pop();
}
//

// Level01 - Doors Minigame
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

  // Door icons
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

    // Opened Door 1 (Balck rectangle illusion)
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

    // Check if User 'opens' Door1 - timer resets here
    d9 = dist(imgCursor.x, imgCursor.y, imgDoor1.x, imgDoor1.y);

    if( mouseIsPressed && (d9 < imgCursor.size/2 + imgDoor1.width/2 || d9 < imgCursor.size/2 + imgDoor1.height/2) && (state === `doors`)){
      displayOpenedDoor1 = true;
      timerDoor1Closing = 2;
    }
}

function door1ClosingAutomatically(){

  // Door1 'closing' on its own after 2 seconds
  if(frameCount % 60 === 0 && timerDoor1Closing > 0){
    timerDoor1Closing --;
  }
  if(timerDoor1Closing === 0){
    displayOpenedDoor1 = false;
  }
}

function openingDoor2(){

  // Opened Door 2 (Balck rectangle illusion)
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
  // Check if User 'opens' Door2 - timer resets here
  d10 = dist(imgCursor.x, imgCursor.y, imgDoor2.x, imgDoor2.y);

  if( mouseIsPressed && (d10 < imgCursor.size/2 + imgDoor2.width/2 || d10 < imgCursor.size/2 + imgDoor2.height/2) && (state === `doors`)){
    displayOpenedDoor2 = true;
    timerDoor2Closing = 2;
  }
}

function door2ClosingAutomatically(){

  // Door2 "closing" on its own after 2 seconds
  if(frameCount % 60 === 0 && timerDoor2Closing > 0){
    timerDoor2Closing --;
  }
  if(timerDoor2Closing === 0){
    displayOpenedDoor2 = false;
  }
}

function openingDoor3(){

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

  //Check if User 'opens' Door3 - timer resets here
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
//

// Transition Level01/Level02 - Outside01
function outside01TextBox(){

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
//

// Llevel02 - Kittens
function kittensBackground(){

  // Background
  image(kittens, imgKittens.x, imgKittens.y);
}

function kittensText(){

  // Indigo Text Box
  push();
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

  //Avilable choises : Affermative(Choice01)/Negative(Choice02)
  // Indigo Text boxes
  push();
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  fill(134, 138, 187);

  choice01.x = 2*width/13;
  choice01.y = 3*height/7;
  rect(choice01.x, choice01.y, choice01.width,  choice01.height,  choice01.radius,  choice01.radius, choice01.radius,  choice01.radius);

  choice02.x = width/5;
  choice02.y = 4*height/5;
  rect(choice02.x, choice02.y, choice02.width, choice02.height, choice02.radius, choice02.radius, choice02.radius, choice02.radius)

  // (Almost) White Texts
  noStroke();
  textAlign(LEFT,CENTER);
  fill(260, 268, 246);
  text(`More kitties, more cuddles.`, width/16, 3*height/7);
  text(`Hmm..I'd rather focus on the cat
I already have.`, width/15, 4*height/5);
  pop();
}
//

// Check Level02's 2 Possible Outcomes
function checkLevel02Outcomes(){
  // Level02 - Check Bad Ending 02 : User choosing to get kitten(s)
  let d5 = dist(imgCursor.x, imgCursor.y, choice01.x, choice01.y);
  if ((d5 < imgCursor.size/2 + choice01.width/2 || d5 < imgCursor.size/2 + choice01.height/2) && (mouseIsPressed) && (state === `kittens`)){
    state = `hoarderEnding`;
  }

  // Level02 - Check "Right" Answer : User choosing not to get kitten(s)
  let d6 = dist(imgCursor.x, imgCursor.y, choice02.x, choice02.y);
  if ((d6 < imgCursor.size/2 + choice02.width/2 || d6 < imgCursor.size/2 + choice02.height/2) && (mouseIsPressed) && (state === `kittens`)){
      state = `outside02`;
    }
}
//

// Level02 - Bad Ending 02 : Hoerder Ending
function hoarder(){

  // Cat icons spawning randomly on screen
  imgHoarder1.x = random(0,width);
  imgHoarder1.y = random(0,height);
  image(hoarder1, imgHoarder1.x, imgHoarder1.y);

  imgHoarder2.x = random(0,width);
  imgHoarder2.y = random(0,height);
  image(hoarder2, imgHoarder2.x, imgHoarder2.y);

  imgHoarder3.x = random(0,width);
  imgHoarder3.y = random(0,height);
  image(hoarder3, imgHoarder3.x, imgHoarder3.y);

  imgHoarder4.x = random(0,width);
  imgHoarder4.y = random(0,height);
  image(hoarder4, imgHoarder4.x, imgHoarder4.y);

  imgHoarder5.x = random(0,width);
  imgHoarder5.y = random(0,height);
  image(hoarder5, imgHoarder5.x, imgHoarder5.y);

  //Lilac Text Box
  push();
  stroke(255);
  strokeWeight(2);
  fill(215, 177, 236);
  rectMode(CENTER);
  rect.width = 900;
  rect.height = 150;
  rect.radius = 15;
  rect(width/2, height/2,rect.width,rect.height, rect.radius, rect.radius, rect.radius, rect.radius);

  //(Almost) White Text
  noStroke();
  textAlign(CENTER,CENTER);
  fill(260, 268, 246);
  text(`Yikes! It seems that one kitten was just the beginning
    of a spiraling hoarding disorder! You could not resist the
    feline charms and are now a fanatical catlady, shunned by society.`, width/2, height/2);
  pop();
}
//

// Transition Panel Level02/Level03 - Outside02
function outside02TextBox(){

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
//

// Level03 - Pet Shop
function petShopGraphics(){

  // Background
  image(petShop, imgPetShop.x, imgPetShop.y);

  // Toy Options (Icons)
  imgSimpleToy.x = width/3;
  imgSimpleToy.y = 2*height/5;
  imgExpensiveToy.x = 2*width/3;
  imgExpensiveToy.y = 2*height/5;

  image(simpleToy, imgSimpleToy.x, imgSimpleToy.y);
  image(expensiveToy, imgExpensiveToy.x, imgExpensiveToy.y);
}

function petShopTextBoxes(){

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
//

// Check Level03's 2 Possible Outcomes
function checkLevel03Outcomes(){
  // Level03 - Check Bad Ending 03 : User choosing more expensive toy
  let d7 = dist(imgCursor.x, imgCursor.y, imgExpensiveToy.x, imgExpensiveToy.y);
  if ((d7 < imgCursor.size/2 + imgExpensiveToy.size/2) && (mouseIsPressed) && (state === `petShop`)){
    state = `streetEnding`;
  }

  // Level03 - Check "Right" Answer : User choosing cheaper toy
  let d8 = dist(imgCursor.x, imgCursor.y, imgSimpleToy.x, imgSimpleToy.y);
  if((d8 < imgCursor.size/2 + imgSimpleToy.size/2) && (mouseIsPressed) && (state === `petShop`)){
    state = `lastTextPanel`;
  }
}
//

// Level 03 - Bad Ending 03 : Street Ending
function streetEndingBackground(){

  // Background
  image(streetEnding, imgStreetEnding.x, imgStreetEnding.y);
}

function streeEndingTextBox(){

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
//

// Transition Panel Level03/Level04 - Last Text Panel
function lastTextPanelTextBox(){

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
//

// Happy Ending
function finalEndingBackground(){

  // Blue-indigo Background
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

  // (Almost) White Text - three different sizes
  push();
  noStroke();
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
//

// Check if User presses SPACEBAR or ESC key
function keyPressed() {

if (keyCode === 32 && state === `title`) {
state = `menu`;
}
else if (keyCode ===27){
  state = `title`;
}
}
//

// Check if User Double Clicks
function doubleClicked(){

  if(state === `menuGoodEnding`){
    state = `doors`
  }
  else if (state === `outside01`){
    state = `kittens`
  }
  else if (state === `outside02`){
    state = `petShop`;
  }
  else if (state === `lastTextPanel`){
    state = `happyEnding`
  }
}
//

// Display User
function displayUser(){
  // Cursor (User) - Cat Paw
  imgCursor.x = mouseX;
  imgCursor.y = mouseY;
  image(cursor, imgCursor.x,imgCursor.y, imgCursor.size);
}
//
