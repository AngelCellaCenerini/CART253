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
  x: 0,
  y:250,
  vx: 0,
  vy: 0,
  speed: 5
}
// Forgetting Assignments (fa)
let imgFa ={
  x: 100,
  y: 350,
  vx: 0,
  vy: 0,
  speed: 5
}
// Procastination (p)
let imgP={
  x: 300,
  y: 300,
  vx: 0,
  vy: 0,
  speed: 5
}
// Staying up Until 4:00AM (su)
let imgSu={
  x: 50,
  y: 400,
  vx: 0,
  vy: 0,
  speed: 5
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
image(bic,imgBic.x,imgBic.y);

//Forgetting Assignments (fa) icon
image(fa,imgFa.x,imgFa.y);

//Procastination (p) icon
image(p,imgP.x,imgP.y);

//Staying up Until 4AM (su) icon
image(su,imgSu.x,imgSu.y);

}
