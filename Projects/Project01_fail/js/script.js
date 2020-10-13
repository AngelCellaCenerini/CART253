/**************************************************
Exercise 01 - Template p5 project by CART253 Course
Angel Cella Cenerini

Exercise 01 - I like to move it move it!

COUNTING SHEEP(S)
You have until dawn to play ;)
Don't blink! It might be morning when you re-open your eyes

**************************************************/
//Setting "strict mode"
"use strict";

//Declaring materials (image, font, sound files).
//Declaring Font
// let myFontTitle;
// let myFontBody;

//Declaring Background
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

let imgIntro = {
  x: 0,
  y: 0,
  size: 50
}

//Title - black cat with background
// let imgBlackCat = {
//   x: 0,
//   y: 0,
// }

// //Menu - cat choises
// // let imgCat1 = {
// //   x: 0,
// //   y: 0,
// //   size: 550
// // }
//
// // let imgCat2 = {
// //   x: 0,
// //   y: 0,
// //   size: 550
// // }
// //
// // let imgCat3 = {
// //   x: 0,
// //   y: 0,
// //   size: 550
// // }
// //
// // let imgCat4 = {
// //   x: 0,
// //   y: 0,
// //   size: 550
// // }
//
// //Level01
// //Cat
// let imgCat = {
//   x: 0,
//   y: 0,
//   size: 550
// }
//
// //BadEnding02
// // let cryingCat = {
// //   x: 0,
// //   y: 0,
// //   size: 500
// // }
//
// //Level02 - Doors
// let imgOpenedDoor = {
//   x: 0,
//   y: 0,
//   width: 400,
//   height: 500
// }
//
// let imgDoor1 = {
//   x: 0,
//   y: 0,
//   width: 400,
//   height: 500
// }
//
// let imgDoor2 = {
//   x: 0,
//   y: 0,
//   width: 400,
//   height: 500
// }
//
// let imgDoor3 = {
//   x: 0,
//   y: 0,
//   width: 400,
//   height: 500
// }
//
// //Level03
// //Kittens
// let imgKittens = {
//   x: 0,
//   y: 0,
// }
//
// //Bad ending03 - cat hoarder
// let imgHoarder1 = {
//   x: 0,
//   y: 0,
// }
//
// let imgHoarder2 = {
//   x: 0,
//   y: 0,
// }
//
// let imgHoarder3 = {
//   x: 0,
//   y: 0,
// }
//
// let imgHoarder4 = {
//   x: 0,
//   y: 0,
// }
//
// let imgHoarder5 = {
//   x: 0,
//   y: 0,
// }
//
// //Level04
// //Petshop
// let imgPetShop = {
//   x: 0,
//   y: 0,
// }
//
// //Simple Toy
// let imgSimpleToy = {
//   x: 0,
//   y: 0,
//   size: 300
// }
//
// //Expensive Toy
// let imgExpensiveToy = {
//   x: 0,
//   y: 0,
//   size: 300
// }
//
// //Bad Ending 04
// let imgStreetEnding = {
//   x: 0,
//   y: 0,
// }
//
// //Happy Ending
//  let imgHappyEnding = {
//    x: 0,
//    y: 0
//
// }

//Declaring state
// let state = `title`; // Title, Menu, Level01, Level02, level03, level04; all exept `Title` contain both a good and a bad ending.

function preload(){

// loadingFonts();
// loadingImages();
cursor = loadImage("assets/images/cursor.png");
intro = loadImage("assets/images/intro.jpg");
// intro = loadImage("assets/images/intro.jpg");


}

// function loadingFonts(){
//   myFontTitle = loadFont('assets/CatFont.otf');
//   myFontBody = loadFont('assets/AnonymousPro-Regular.otf');
// }

// function loadingImages() {

  // cat2 = loadImage("assets/images/cat2.png");
  // cat3 = loadImage("assets/images/cat3.png");
  // cat4 = loadImage("assets/images/cat4.png");
  // cat = loadImage("assets/images/cat.png");
  //cryingCat = loadImage("assets/images/cryingCat.png");
  // openedDoor = loadImage("assets/images/openedDoor.png");
  // door1 = loadImage("assets/images/door1.png");
  // door2 = loadImage("assets/images/door2.png");
  // door3 = loadImage("assets/images/door3.png");
  // kittens = loadImage("assets/images/kittens.jpg");
  // hoarder1 = loadImage("assets/images/horder1.png");
  // hoarder2 = loadImage("assets/images/horder2.png");
  // hoarder3 = loadImage("assets/images/horder3.png");
  // hoarder4 = loadImage("assets/images/horder4.png");
  // hoarder5 = loadImage("assets/images/horder5.png");
  // petShop = loadImage("assets/images/petShop.jpg");
  // simpleToy = loadImage("assets/images/simpleToy.png");
  // expensiveToy = loadImage("assets/images/expensiveToy.png");
  // streetEnding = loadImage("assets/images/streetEnding.jpg");
  // happyEnding = loadImage("assets/images/happyEnding.jpg");


// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);
  // centeringJpgsFiles();
}

// .jpgs files all function as backgrounds for a specific "state"; all need to be centered
// function centeringJpgsFiles(){
//
//   imgTitle.x = width/2;
//   imgTitle.y = height/2;
//
//   imgKittens.x = width/2;
//   imgKittens.y = height/2;
//
//   imgPetShop.x = width/2;
//   imgPetShop.y = height/2;
//
//   imgStreetEnding.x = width/2;
//   imgStreetEnding.y = height/2;
//
//   imgHappyEnding.x = width/2;
//   imgHappyEnding.y = height/2;
//
// }

// draw()
//
// Description of draw() goes here.
function draw() {

background(bg.r, bg.g, bg.b);


imgCursor.x = mouseX;
imgCursor.y = mouseY;
image(cursor, imgCursor.x, imgCursor.y, imgCursor.size);

image(intro, imgIntro.x,imgIntro.y, imgIntro.size);



// if (state === `title`){
//   title();
//   // description();
//   // start();
// }
// else if (state === `menu`){
//
// }
// else if (state === `level01`){
//
// }
// else if (state === `level02`){
//
// }
// else if (state === `level03`){
//
// }
// else if(state === `level04`){
//
// }
// else if(state === `happyEnding`){

// }

}
