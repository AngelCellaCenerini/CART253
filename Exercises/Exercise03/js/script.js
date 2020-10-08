/**************************************************
Exercise 03 - Template p5 project by CART253 Course
Angel Cella Cenerini

Exercise 03 - Love, actually

COUNTING SHEEP(S)
You have until dawn to play ;)
Don't blink! It might be morning when you re-open your eyes

**************************************************/
//Declaring images variables

//Background - "Scenario" as to not interfere with JavaScript
let imgScenario = {
  x: 0,
  y: 0,
}
//Branch (in Scenario)
let imgBranch = {
   x: 800,
   y: 800,
   vx: 0,
   vy: 3
}
//Clouds (in Scenario)
let imgClouds = {
  x: 400,
  y: 900,
  vx: 1,
  vy: 0
}
//User (parrot)
let imgUser = {
  x: 0,
  y: 0,
  size: 300,
}
//Male parrot 1 (MP1)
let imgMp1 = {
  x: 500,
  y: 500,
  size: 300,
  vx: 0,
  vy: 0,
  speed: 5
}
//Male parrot 2 (MP2)
let imgMp2 = {
  x: 200,
  y: 600,
  size: 300,
  vx: 0,
  vy: 0,
  speed: 5
}
//Female parrot (FP1)
let imgFp1 = {
  x: 800,
  y: 700,
  size: 420,
  vx: 0,
  vy: 0,
  speed: 5
}
//Female parrot (FP2)
let imgFp2 = {
  x: 600,
  y: 900,
  size: 420,
  vx: 0,
  vy: 0,
  speed: 5
}
//Happy Ending
let imgHappyEnding = {
  x: 0,
  y: 0,
}
//Bad Ending 1
let imgBadEnding1 = {
  x: 0,
  y: 0,
}
//Bad Ending 2 (BE2)
let imgBadEnding2 = {
  x: 0,
  y: 0,
}



function preload(){

scenario = loadImage("assets/images/scenario.jpg");
branch = loadImage("assets/images/branch.png");
clouds = loadImage("assets/images/clouds.png");
user = loadImage("assets/images/user.png");
mp1 = loadImage("assets/images/mp1.png");
mp2 = loadImage("assets/images/mp2.png");
fp1 = loadImage("assets/images/fp1.png");
fp2 = loadImage("assets/images/fp2.png");
he = loadImage("assets/images/he.jpg");
be1 = loadImage("assets/images/be1.png");
be2 = loadImage("assets/images/be2.png");

}
// setup()
// Declaring (+assignment) customized variables as JavaScript objects - named after represented subject


function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  imageMode(CENTER);

  //Centering different Backgrounds

  imgScenario.x= windowWidth/2;
  imgScenario.y= windowHeight/2;

  imgHappyEnding.x= windowWidth/2;
  imgHappyEnding.y= windowHeight/2;

  imgBadEnding1.x= windowWidth/2;
  imgBadEnding1.y= windowHeight/2;

  imgBadEnding2.x= windowWidth/2;
  imgBadEnding2.y= windowHeight/2;

  //Objects (parrots) appearing in random positions
  imgMp1.x = random(0,width);
  imgMp1.y = random(0,height);

  imgMp2.x = random(0,width);
  imgMp2.y = random(0,height);

  imgFp1.x = random(0,width);
  imgFp1.y = random(0,height);

  imgFp2.x = random(0,width);
  imgFp2.y = random(0,height);

  //Objects (parrots) moving in random directions
  imgMp1.vx = random(-imgMp1.speed,imgMp1.speed);
  imgMp1.vy = random(-imgMp1.speed,imgMp1.speed);

  imgMp2.vx = random(-imgMp2.speed,imgMp2.speed);
  imgMp2.vy = random(-imgMp2.speed,imgMp2.speed);

  imgFp1.vx = random(-imgFp1.speed,imgFp1.speed);
  imgFp1.vy = random(-imgFp1.speed,imgFp1.speed);

  imgFp2.vx = random(-imgFp2.speed,imgFp2.speed);
  imgFp2.vy = random(-imgFp2.speed,imgFp2.speed);

}

// draw()
//
// Designing movable/interactive picture;
function draw() {
  background(255);

  //Parrots movements;
  imgMp1.x = imgMp1.x + imgMp1.vx;
  imgMp1.y = imgMp1.y + imgMp1.vy;

  imgMp2.x = imgMp2.x + imgMp2.vx;
  imgMp2.y = imgMp2.y + imgMp2.vy;

  imgFp1.x = imgFp1.x + imgFp1.vx;
  imgFp1.y = imgFp1.y + imgFp1.vy;

  imgFp2.x = imgFp2.x + imgFp2.vx;
  imgFp2.y = imgFp2.y + imgFp2.vy;

  image(mp1,imgMp1.x,imgMp1.y,imgMp1.size);
  image(mp2,imgMp2.x,imgMp2.y,imgMp2.size);
  image(fp1,imgFp1.x,imgFp1.y,imgFp1.size);
  image(fp2,imgFp2.x,imgFp2.y,imgFp2.size);

  image(user,mouseX,mouseY,imgUser.size);

}
