"use strict";

/**************************************************
Exercise 04 - The Age of Aquariums
Template p5 project by CART253 course
Angel Cella Cenerini

Catch that magilove!
**************************************************/

let victorySFX;

// Cutomized Fonts
let myFont;

// Default Black Background; Title
let bgD = {
  r: 0,
  g: 0,
  b: 0,
}

// White Background; Endings
let bg = {
  r: 255,
  g: 255,
  b: 255,
}

// Background - Underwater scene; Simulation
let waterBackground;
let imgWaterBackground = {
  x: 0,
  y: 0
}

// Title Screen Icon - MagiLove
let titleMagikarp;
let imgTitleMagikarp = {
  x: 0,
  y: 0
}

// Pokeball icon (AKA User/Cursor)
let pokeball = {
  x: 0,
  y: 0,
  size: 60,
  image: undefined
}
let imagePokeball;

// Simulation - schools of different Magikarps
// Basic Magikarp School
let basicSchool = [];
let basicSchoolSize = 2;
let basicMagikarp = {
  x: 0,
  y: 0,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined
}
let imageBasicMagikarp;

// Rainbow Magikarp School
let rainbowSchool = [];
let rainbowSchoolSize = 2;
let rainbowMagikarp = {
  x: 0,
  y: 0,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined
}
let imageRainbowMagikarp;

// Coffee Magikarp School
let coffeeSchool = [];
let coffeeSchoolSize = 2;
let coffeeMagikarp = {
  x: 0,
  y: 0,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined
}
let imageCoffeeMagikarp;

// Zombie Magikarp School
let zombieSchool = [];
let zombieSchoolSize = 2;
let zombieMagikarp = {
  x: 0,
  y: 0,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined
}
let imageZombieMagikarp;

// Sayan Magikarp School
let sayanSchool = [];
let sayanSchoolSize = 2;
let sayanMagikarp = {
  x: 0,
  y: 0,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined
}
let imageSayanMagikarp;
//



let love = [];
// Magikarp Love - Happy Ending 01
let magikarpLove = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 8,
  image: undefined
}
let imageMagikarpLove;

// Gyarados Icon - Happy Ending 02
let gyarados;
let imgGyarados = {
  x: 600,
  y: 400,
  vx: 0,
  vy: 0,
  speed: 5
}

// Pokemon (dragon)Fly Icon - Yanmega; Bad Ending
let yanmega;
let imgYanmega = {
  x: 600,
  y: 200,
  vx: 0,
  vy: 0,
  speed: 5
}

// Declaring state(s)
let state = `simulation` // Title, Simulation, Happy Ending 01, Happy Ending 02, Bad Ending

function preload(){

 victorySFX = loadSound('assets/sounds/victory.wav');
 myFont = loadFont('assets/AnonymousPro-Regular.otf');

  waterBackground = loadImage('assets/images/waterBackground.jpg');
  pokeball = loadImage('assets/images/pokeball.png');
  titleMagikarp = loadImage('assets/images/titleMagikarp.png');
  imageBasicMagikarp = loadImage('assets/images/magikarp-0.png');
  imageRainbowMagikarp = loadImage('assets/images/magikarp-1.png');
  // imageHatMagikarp = loadImage('assets/images/magikarp-2.png');
  imageCoffeeMagikarp = loadImage('assets/images/magikarp-3.png');
  imageZombieMagikarp = loadImage('assets/images/magikarp-5.png');
  imageSayanMagikarp = loadImage('assets/images/magikarp-7.png');
  imageMagikarpLove = loadImage('assets/images/magikarpLove.png');
  gyarados = loadImage(`assets/images/gyarados.png`);
  yanmega = loadImage(`assets/images/yanmega.png`);


}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  noStroke();
 // Simulation - Magikarp Schools
 // Basic Magirkaps Icons
 basicMagikarp.image = imageBasicMagikarp;

 for (let i = 0; i < basicSchoolSize; i++) {
  basicSchool[i] = createBasicMagikarp(random(0,width), random(0,height));
}
// Rainbow Magirkaps Icons
rainbowMagikarp.image = imageRainbowMagikarp;

for (let i = 0; i < rainbowSchoolSize; i++) {
 rainbowSchool[i] = createRainbowMagikarp(random(0,width), random(0,height));
}
// Coffee Magirkaps Icons
coffeeMagikarp.image = imageCoffeeMagikarp;

for (let i = 0; i < coffeeSchoolSize; i++) {
 coffeeSchool[i] = createCoffeeMagikarp(random(0,width), random(0,height));
}
// Zombie Magirkaps Icons
zombieMagikarp.image = imageZombieMagikarp;

for (let i = 0; i < zombieSchoolSize; i++) {
 zombieSchool[i] = createZombieMagikarp(random(0,width), random(0,height));
}
//

// Sayan Magirkaps Icons
sayanMagikarp.image = imageSayanMagikarp;

for (let i = 0; i < sayanSchoolSize; i++) {
 sayanSchool[i] = createSayanMagikarp(random(0,width), random(0,height));
}
//

  // MagikarpLove Icons - Happy Ending01 Background
  magikarpLove.image = imageMagikarpLove;

  for (let i = 0; i < 30; i++) {
   love[i] = createMagikarpLove(random(0,width), random(0,height));
 }
 //



}

// Simulation - Magikarp Schools
// Basic Magikarp Icons
function createBasicMagikarp(x, y) {
let basicMagikarp = {
  x: x,
  y: y,
  vx: 0,
  vy: 0,
  speed: 5,
  image: imageBasicMagikarp
};
return basicMagikarp;
}

// Rainbow Magikarp Icons
function createRainbowMagikarp(x, y) {
let rainbowMagikarp = {
  x: x,
  y: y,
  vx: 0,
  vy: 0,
  speed: 5,
  image: imageRainbowMagikarp
};
return rainbowMagikarp;
}

// Coffee Magikarp Icons
function createCoffeeMagikarp(x, y) {
let coffeeMagikarp = {
  x: x,
  y: y,
  vx: 0,
  vy: 0,
  speed: 5,
  image: imageCoffeeMagikarp
};
return coffeeMagikarp;
}

// Zombie Magikarp Icons
function createZombieMagikarp(x, y) {
let zombieMagikarp = {
  x: x,
  y: y,
  vx: 0,
  vy: 0,
  speed: 5,
  image: imageZombieMagikarp
};
return zombieMagikarp;
}
//

// Sayan Magikarp Icons
function createSayanMagikarp(x, y) {
let sayanMagikarp = {
  x: x,
  y: y,
  vx: 0,
  vy: 0,
  speed: 5,
  image: imageSayanMagikarp
};
return sayanMagikarp;
}
//

// MagikarpLove Icons - Happy Ending01 Background
function createMagikarpLove(x, y) {
let magikarpLove = {
  x: x,
  y: y,
  vx: 0,
  vy: 0,
  speed: 5,
  image: imageMagikarpLove
};
return magikarpLove;
}
//

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`){



  // Default Black Background
  background(bgD.r, bgD.g, bgD.b);

  // Display Title Icon: Heart with Magikarp
  displayMagiHeart();
  // Display (White) Title Text
  displayTitleText();
  // Start Simulation Command - SPACEBAR
  keyPressed();
  }

  else if (state === `simulation`){
    // Customized Background - Underwater scene
    displayCustomizedBackground();

    // Basic Magirkaps (Constrained) Movements + Display Basic Magirkaps Icon
    for (let i = 0; i < basicSchoolSize; i++) {
     let imageBasicMagikarp = basicSchool[i];
     displayBasicMagirkarp(imageBasicMagikarp);
     basicMagikarpMovements(imageBasicMagikarp);

     checkEnding02(imageBasicMagikarp);
   }

   // Rainbow Magirkaps (Constrained) Movements + Display Rainbow Magirkaps Icon
   for (let i = 0; i < rainbowSchoolSize; i++) {
    let imageRainbowMagikarp = rainbowSchool[i];
    displayRainbowMagirkarp(imageRainbowMagikarp);
    rainbowMagikarpMovements(imageRainbowMagikarp);
  }

  // Coffee Magirkaps (Constrained) Movements + Display Coffee Magirkaps Icon
  for (let i = 0; i < coffeeSchoolSize; i++) {
   let imageCoffeeMagikarp = coffeeSchool[i];
   displayCoffeeMagirkarp(imageCoffeeMagikarp);
   coffeeMagikarpMovements(imageCoffeeMagikarp);
 }

 // Zombie Magirkaps (Constrained) Movements + Display Zombie Magirkaps Icon
 for (let i = 0; i < zombieSchoolSize; i++) {
  let imageZombieMagikarp = zombieSchool[i];
  displayZombieMagirkarp(imageZombieMagikarp);
  zombieMagikarpMovements(imageZombieMagikarp);
}

 // Sayan Magirkaps (Constrained) Movements + Display Sayan Magirkaps Icon
for (let i = 0; i < sayanSchoolSize; i++) {
  let imageSayanMagikarp = sayanSchool[i];
  displaySayanMagirkarp(imageSayanMagikarp);
  sayanMagikarpMovements(imageSayanMagikarp);
}

    // Customized Cursor: Pokeball Icon; follows mouse movements
    displayCursor();

}

 else if (state === `happy ending 01`){
   // White Background
   background(bg.r, bg.g, bg.b);

   // Magirkap(s) Movements + Display Magirkap(s) Icons - Cascade of Magikarp Love (What more can you want?); Overlapping effect is intentional
   for (let i = 0; i < 30; i++) {
    let imageMagikarpLove = love[i];
    displayMagirkarp(imageMagikarpLove);
    magikarpMovements(imageMagikarpLove);
  }
   // Black Text
   happyEnding01Text();

 }

 else if (state === `happy ending 02`){
   // White Background
   background(bg.r, bg.g, bg.b);

   // Gyarados Icon Movements
   gyaradosMovements();
   // Display Gyarados Icon
   displayGyarados();
   // Happy Ending 02 - Black Text
   happyEnding02Text();

 }

  else if (state === `bad ending`){
     // White Background
     background(bg.r, bg.g, bg.b);

     // Movements - Yanmega Icon
     yanmegaMovements();
     // Display Yanmega Icon
     displayYanmega();
     // Bad Ending White Text
     badEndingText();

}


}

  // Display Title Icon: Heart with Magikarp
function displayMagiHeart(){
  image(titleMagikarp, width/2, 2*height/3);
}
//

  // Display (White) Title Text
function displayTitleText(){
  push();
  fill(255);
  textSize(100);
  text(`Catch That MagiLove!`, width/2, height/4);
  textSize(20);
  text(`Press SPACEBAR to start catching Magikarps!`, width/2, 9*height/10);
  pop();
}
//

// Customized Background - Underwater scene
function displayCustomizedBackground(){
  imgWaterBackground.x = width/2;
  imgWaterBackground.y = height/2;
  image(waterBackground, imgWaterBackground.x, imgWaterBackground.y, windowWidth, windowHeight);
}
//

//
function basicMagikarpMovements(basicMagikarp){

  basicMagikarp.y = basicMagikarp.y + basicMagikarp.vy;
  basicMagikarp.x = basicMagikarp.x + basicMagikarp.vx;
  let change = random(0, 1);
  if (change < 0.05){
    basicMagikarp.vx = random(-basicMagikarp.speed, basicMagikarp.speed);
    basicMagikarp.vy = random(-basicMagikarp.speed, basicMagikarp.speed);
  }
  basicMagikarp.x = constrain( basicMagikarp.x, 0, width);
  basicMagikarp.y = constrain( basicMagikarp.y, 0, height);
}


function displayBasicMagirkarp(basicMagikarp){
  image(basicMagikarp.image, basicMagikarp.x, basicMagikarp.y);
}
//


function checkEnding02(basicMagikarp){
  let d1 = dist(pokeball.x, pokeball.y, basicMagikarp.x, basicMagikarp.y);
  if (d1 < pokeball.size/2 + basicMagikarp.size/2){
    state = `happy ending 02`;
  }
}


//
function rainbowMagikarpMovements(rainbowMagikarp){

  rainbowMagikarp.y = rainbowMagikarp.y + rainbowMagikarp.vy;
  rainbowMagikarp.x = rainbowMagikarp.x + rainbowMagikarp.vx;
  let change = random(0, 1);
  if (change < 0.05){
    rainbowMagikarp.vx = random(-rainbowMagikarp.speed, rainbowMagikarp.speed);
    rainbowMagikarp.vy = random(-rainbowMagikarp.speed, rainbowMagikarp.speed);
  }
  rainbowMagikarp.x = constrain( rainbowMagikarp.x, 0, width);
  rainbowMagikarp.y = constrain( rainbowMagikarp.y, 0, height);
}


function displayRainbowMagirkarp(rainbowMagikarp){
  image(rainbowMagikarp.image, rainbowMagikarp.x, rainbowMagikarp.y);
}
//

//
function coffeeMagikarpMovements(coffeeMagikarp){

  coffeeMagikarp.y = coffeeMagikarp.y + coffeeMagikarp.vy;
  coffeeMagikarp.x = coffeeMagikarp.x + coffeeMagikarp.vx;
  let change = random(0, 1);
  if (change < 0.05){
    coffeeMagikarp.vx = random(-coffeeMagikarp.speed, coffeeMagikarp.speed);
    coffeeMagikarp.vy = random(-coffeeMagikarp.speed, coffeeMagikarp.speed);
  }
  coffeeMagikarp.x = constrain( coffeeMagikarp.x, 0, width);
  coffeeMagikarp.y = constrain( coffeeMagikarp.y, 0, height);
}


function displayCoffeeMagirkarp(coffeeMagikarp){
  image(coffeeMagikarp.image, coffeeMagikarp.x, coffeeMagikarp.y);
}
//

//
function zombieMagikarpMovements(zombieMagikarp){

  zombieMagikarp.y = zombieMagikarp.y + zombieMagikarp.vy;
  zombieMagikarp.x = zombieMagikarp.x + zombieMagikarp.vx;
  let change = random(0, 1);
  if (change < 0.05){
    zombieMagikarp.vx = random(-zombieMagikarp.speed, zombieMagikarp.speed);
    zombieMagikarp.vy = random(-zombieMagikarp.speed, zombieMagikarp.speed);
  }
  zombieMagikarp.x = constrain( zombieMagikarp.x, 0, width);
  zombieMagikarp.y = constrain( zombieMagikarp.y, 0, height);
}


function displayZombieMagirkarp(zombieMagikarp){
  image(zombieMagikarp.image, zombieMagikarp.x, zombieMagikarp.y);
}
//

//
function sayanMagikarpMovements(sayanMagikarp){

  sayanMagikarp.y = sayanMagikarp.y + sayanMagikarp.vy;
  sayanMagikarp.x = sayanMagikarp.x + sayanMagikarp.vx;
  let change = random(0, 1);
  if (change < 0.05){
    sayanMagikarp.vx = random(-sayanMagikarp.speed, sayanMagikarp.speed);
    sayanMagikarp.vy = random(-sayanMagikarp.speed, sayanMagikarp.speed);
  }
  sayanMagikarp.x = constrain( sayanMagikarp.x, 0, width);
  sayanMagikarp.y = constrain( sayanMagikarp.y, 0, height);
}


function displaySayanMagirkarp(sayanMagikarp){
  image(sayanMagikarp.image, sayanMagikarp.x, sayanMagikarp.y);
}
//

// Customized Cursor : Pokeball Icon; follows mouse movements
function displayCursor(){
  pokeball.image = imagePokeball;
  pokeball.x = mouseX;
  pokeball.y = mouseY;
  image(pokeball, pokeball.x, pokeball.y, pokeball.size);
}
//

// Happy Ending 01 - Black Text
function happyEnding01Text(){
  push();
  textSize(25);
  text(`Yes! You did it!
    ...Not that it was particularly challenging, you were surrounded by opportunities...
    Still, celebrate your newborn friendship by enjoying this cascade of Magikarp Love!`, width/2, height/2);
    textSize(15);
    text(`Press ESC to return to the Title Screen.`, width/2, 7*height/8);
  pop();
}
//

// Magirkap(s) Movements
function magikarpMovements(magikarpLove){
  magikarpLove.vy = magikarpLove.speed;
  magikarpLove.y = magikarpLove.y + magikarpLove.vy;
  if(magikarpLove.y < 0 || magikarpLove.y > height){
     magikarpLove.y = 0;
  }
}
//

// Display Magirkap(s) Icons
function displayMagirkarp(magikarpLove){
  image(magikarpLove.image, magikarpLove.x, magikarpLove.y);
}
//

// Gyarados Icon Movements
function gyaradosMovements(){
  // Gyarados Icon Movements
  imgGyarados.vx = imgGyarados.speed;
  imgGyarados.x = imgGyarados.x + imgGyarados.vx;

  // Controlling/Checking Gyarados Icon Movements - Slides back and forth across screen
  if(imgGyarados.x < width/3 || imgGyarados.x > 2*width/3){
     imgGyarados.speed = - imgGyarados.speed;
  }
}
//

// Display Gyarados Icon
function displayGyarados(){
  image(gyarados, imgGyarados.x, imgGyarados.y);
}
//

// Happy Ending 02 - Black Text
function happyEnding02Text(){
  push();
  fill(0);
  textSize(20);
  text(`Woah! Your Magikarp was actually quite skilled and immediately evolved into a magnificent Gyarados! Congrats!`, width/2, height/6);
  textSize(15);
  text(`Press ESC to return to the Title Screen.`, width/2, 7*height/8);
  pop();
}
//

// Movements - Yanmega Icon
function yanmegaMovements(){
  // Movements - Yanmega Icon
  let change = random(0, 1);
  if (change < 0.05){
      imgYanmega.vx = random (-imgYanmega.speed,imgYanmega.speed);
      imgYanmega.vy = random (-imgYanmega.speed,imgYanmega.speed);
  }
  imgYanmega.x = imgYanmega.x + imgYanmega.vx;
  imgYanmega.y = imgYanmega.y + imgYanmega.vy;

  // Constrain Icon to Canvas
  imgYanmega.x = constrain(imgYanmega.x, 0, width);
  imgYanmega.y = constrain(imgYanmega.y, 0, height);
}
//

// Display Yanmega Icon
function displayYanmega(){
  image(yanmega, imgYanmega.x, imgYanmega.y);
}
//

// Bad Ending White Text
function badEndingText(){
  push();
  fill(0);
  textSize(30);
  text(`Well, what did you expect?
  The time run out, and you didn't catch anything.

  I hope you enjoy this emptiness.`, width/2, height/2);
  textSize(17);
  text(`Press ESC to return to the Title Screen.`, width/2, 5*height/6);
  pop();
}
//

// Keyboard Commands
function keyPressed(){
  // Start Simulation Command
  if ((state === `title`) && (keyCode === 32)){
    state = `simulation`;
  }
  // Return to Title Screen Command
  else if ((state === `bad ending` || state === `happy ending 02` || state === `happy ending 01`) && (keyCode === 27)){
    state = `title`;
  }
  // else if (state === `simulation` && (keyCode === 32)){
  //    victorySFX.play();
  //    state = `happy ending 02`;
  // }
}
//
