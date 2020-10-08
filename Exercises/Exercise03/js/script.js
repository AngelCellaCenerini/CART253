/**************************************************
Exercise 03 - Template p5 project by CART253 Course
Angel Cella Cenerini

Exercise 03 - Love, actually

COUNTING SHEEP(S)
You have until dawn to play ;)
Don't blink! It might be morning when you re-open your eyes

**************************************************/
//Declaring Font
let myFont;

//Background - "Scenario" as to not interfere with JavaScript
let imgScenario = {
  x: 0,
  y: 0,
}
//Clouds (in Scenario)
let imgClouds = {
  x: 1000,
  y: 200,
  width: 468,
  height: 300,
  vx: 0,
  vy: 0,
  speed: -0.2
}
//User (parrot)
let imgUser = {
  x: 0,
  y: 0,
  size: 200,
}
//Male parrot 1 (MP1)
let imgMp1 = {
  x: 500,
  y: 500,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 4
}
//Male parrot 2 (MP2)
let imgMp2 = {
  x: 200,
  y: 600,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 4
}
//Female parrot (FP1)
let imgFp1 = {
  x: 800,
  y: 700,
  size: 280,
  vx: 0,
  vy: 0,
  speed: 4
}
//Female parrot (FP2)
let imgFp2 = {
  x: 600,
  y: 900,
  size: 250,
  vx: 0,
  vy: 0,
  speed: 4
}
//Happy Ending
let imgHappyEnding = {
  x: 0,
  y: 0,
  width:1000,
  height: 700
}
//Bad Ending 1
let imgBadEnding1 = {
  x: 800,
  y: 550,
  width: 400,
  height: 400
}
//Bad Ending 2 (BE2)
let imgBadEnding2 = {
  x: 800,
  y: 500,
  width: 350,
  height: 350
}

//Declaring States
let state = `title`; //Title, simulation, happy ending, bad ending 1, bad ending 2


function preload(){

icons();
customedFont();
}

function customedFont(){
  myFont = loadFont('assets/boldeRough.otf');
}

function icons(){
  scenario = loadImage("assets/images/scenario.jpg");
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
  //imageMode(CENTER);
  imageMode(CENTER);
  imgUser.x = mouseX;
  imgUser.y = mouseY;
  centerBackgrounds();
  setRandomMovements();
}

function centerBackgrounds(){
  //Centering different Backgrounds
  imgScenario.x= width/2;
  imgScenario.y= height/2;

  imgHappyEnding.x= width/2;
  imgHappyEnding.y= height/2;

}


function setRandomMovements(){
  //Objects (parrots) appearing in random positions
  imgMp1.x = random(2*width/3,width);
  imgMp1.y = random(0,height);

  imgMp2.x = random(0,width/3);
  imgMp2.y = random(2*height/3,height);

  imgFp1.x = random(0,width);
  imgFp1.y = random(2*height/3,height);

  imgFp2.x = random(2*width/3,width);
  imgFp2.y = random(0,height);

  //Objects (parrots) moving in random directions (both vertically and horizontally)
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
  background(30);

  if(state === `title`){
    title();
    start();
  }
  else if(state === `simulation`){
    simulation();
  }
  else if(state === `happy ending`){
    happyEnding();
  }
  else if(state === `bad ending 1`){
    badEnding1();
  }
  else if(state === `bad ending 2`){
    badEnding2();
  }

}

function title(){
  push();
  fill(143,30,30);
  textAlign(CENTER,CENTER);
  textSize(130);
  textFont(myFont);
  text(`SURVIVAL OF THE FITTEST`,width/2,height/2);
  pop();
}


function start(){
  fill(250,250,250,);
  textAlign(CENTER,CENTER);
  textSize(40);
  textFont(myFont);
  text(`Click to challenge Mother Nature`,width/2,2*height/3);
}

function simulation(){
  movements();
  checkEnding1();
  checkEnding2();
  checkEnding3();
  display();
}

function happyEnding(){
image(he,imgHappyEnding.x,imgHappyEnding.y,imgHappyEnding.width,imgHappyEnding.height);

fill(250,250,250,);
textAlign(RIGHT,RIGHT);
textSize(40);
textFont(myFont);
text(`Congratulations.
      You shall now create your own legacy`,3*width/4,height/5);
}

function badEnding1(){
  background(200);
  image(be1,imgBadEnding1.x, imgBadEnding1.y, imgBadEnding1.width,imgBadEnding1.height);

  fill(143,30,30);
  textAlign(CENTER,CENTER);
  textSize(45);
  textFont(myFont);
  text(`You were not swift enough.`,width/2,height/3);

  textSize(30);
  text(`You lost your chance, and now you will never experience the love of a mate
        and pass your genes onto the next generation`,width/2,height/2);

}

function badEnding2(){
  background(200);
  image(be2,imgBadEnding2.x, imgBadEnding2.y, imgBadEnding2.width,imgBadEnding2.height);

  fill(143,30,30);
  textAlign(CENTER,CENTER);
  textSize(45);
  textFont(myFont);
  text(`Yikes! Looks like you caught another male parrot!`,width/2,height/5);

  textSize(30);
  text(`This rival was stronger and defeated you in front of the whole flock.
        The females were not impressed and will likely forever remember you as weak.
        You will most probably die alone.`,width/2,height/3);

}

function movements(){
  //Clouds setRandomMovements


  //Parrots movements;
  imgMp1.x = imgMp1.x + imgMp1.vx;
  imgMp1.y = imgMp1.y + imgMp1.vy;

  imgMp2.x = imgMp2.x + imgMp2.vx;
  imgMp2.y = imgMp2.y + imgMp2.vy;

  imgFp1.x = imgFp1.x + imgFp1.vx;
  imgFp1.y = imgFp1.y + imgFp1.vy;

  imgFp2.x = imgFp2.x + imgFp2.vx;
  imgFp2.y = imgFp2.y + imgFp2.vy;

}

function checkEnding1(){
  //Checking  User catching female parrot
  let d1 = dist(imgUser.x,imgUser.y,imgFp1.x,imgFp1.y);
  let d2 = dist(imgUser.x,imgUser.y,imgFp2.x,imgFp2.y);

  if (d1 < imgUser.size/3 + imgFp1.size/3 || d2 < imgUser.size/3 + imgFp2.size/3){
    state = `happy ending`;
  }

}

function checkEnding2(){
  //Checking all parrots moving off screen - Bad Ending 1
  if ((imgMp1.x<0 || imgMp1.x>width) && (imgMp2.x<0 || imgMp2.x>width) && (imgFp1.x<0 || imgFp1.x>width) && (imgMp2.x<0 || imgMp2.x>width)) {
     state = `bad ending 1`;
  }
  if ((imgMp1.y<0 || imgMp1.y>height) && (imgMp2.y<0 || imgMp2.y>height) && (imgFp1.y<0 || imgFp1.y>height) && (imgMp2.y<0 || imgMp2.y>height)) {
     state = `bad ending 1`;
  }
}

function checkEnding3(){
  //Checking  User catching male parrot - Bad Ending 2
  let d3 = dist(imgUser.x,imgUser.y,imgMp1.x,imgMp1.y);
  let d4 = dist(imgUser.x,imgUser.y,imgMp2.x,imgMp2.y);

  if(d3<imgUser.size/3 + imgMp1.size/3 || d4<imgUser.size/3 + imgMp2.size/3){
     state = `bad ending 2`;
  }

}

function display(){
  //Backgorund - clear sky
  image(scenario,imgScenario.x,imgScenario.y,1550,750);
  //Displaying Clouds
  imgClouds.vx = imgClouds.speed;
  imgClouds.x = imgClouds.x + imgClouds.vx;
  image(clouds,imgClouds.x,imgClouds.y,imgClouds.width,imgClouds.height);
  //Displaying parrots
  image(mp1,imgMp1.x,imgMp1.y,imgMp1.size);
  image(mp2,imgMp2.x,imgMp2.y,imgMp2.size);
  image(fp1,imgFp1.x,imgFp1.y,imgFp1.size);
  image(fp2,imgFp2.x,imgFp2.y,imgFp2.size);


  // User displayment - movements dictated by mouse
  imgUser.x = mouseX;
  imgUser.y = mouseY;
  image(user,mouseX,mouseY,imgUser.size);
}

function mousePressed() {
  if (state === `title`){
     state = `simulation`;
  }
}
