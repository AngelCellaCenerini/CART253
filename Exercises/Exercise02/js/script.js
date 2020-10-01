/**************************************************
Exercise 02 - Template p5 project by CART253 Course
Angel Cella Cenerini

Exercise 02: Dodge-em!

BEST STUDENT!
Try being the best student during COVID-19!
Dodge Bad Internet Connection,
      Procastination,
      Staying Up Until 4:00AM and
      Forgetting Assignments!
**************************************************/

// Inserting images - .png files are objects user has to avoid
// Bad Internet Connection (bic)
let imgBic ={
  x: 200,
  y:0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 1
}
// Forgetting Assignments (fa)
let imgFa ={
  x: 100,
  y: 0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 1
}
// Procastination (p)
let imgP={
  x: 300,
  y: 0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 1
}
// Staying up Until 4:00AM (su)
let imgSu={
  x: 50,
  y: 0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 1
}


// preload()
function preload(){

  //Bad Internet Connection (bic)
  bic = loadImage("assets/images/Internet.png");
  //Forgetting Assignments (fa)
  fa = loadImage("assets/images/Late.png");
  //Procastination (p)
  p = loadImage("assets/images/Procastination.png");
  // Staying Up at 4:00AM (su)
  su = loadImage("assets/images/4AM.png");

}


// setup()
// Declaring (+assignment) customized variables as JavaScript objects - named after represented subject;
// Description of setup() goes here.

function setup() {
  // Canvas occupies entirely space available on web page
  createCanvas(windowWidth, windowHeight);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

// Bad Internet Connection(bic) icon
imgBic.x = random(0,width);
imgBic.y += imgBic.vy;
imgBic.vy += imgBic.speed;
image(bic,imgBic.x,imgBic.y,imgBic.width,imgBic.height);

//Forgetting Assignments (fa) icon
imgFa.x = random(0,width);
imgFa.y += imgFa.vy;
imgFa.vy += imgFa.speed;
image(fa,imgFa.x,imgFa.y,imgFa.width,imgFa.height);

//Procastination (p) icon
imgP.x = random(0,width);
imgP.y += imgP.vy;
imgP.vy += imgP.speed;
image(p,imgP.x,imgP.y,imgP.width,imgP.height);

//Staying up Until 4AM (su) icon
imgSu.x = random(0,width);
imgSu.y += imgSu.vy;
imgSu.vy += imgSu.speed;
image(su,imgSu.x,imgSu.y,imgSu.width,imgSu.height);

}
