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

// Inserting images variables - .png files are objects user has to avoid
// Bad Internet Connection (bic)
let imgBic ={
  x: 200,
  y:0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 0.1
}
// Forgetting Assignments (fa)
let imgFa ={
  x: 100,
  y: 0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 0.1
}
// Procastination (p)
let imgP={
  x: 300,
  y: 0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 0.1
}
// Staying up Until 4:00AM (su)
let imgSu={
  x: 50,
  y: 0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  speed: 0.1
}
//

//Inserting User variables - user will follow mouse's movements
let user={
  size:80,
  fill:{
    r:255,
    b:255,
    g:255
  }
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
  noStroke();

// Bad Internet Connection(bic) icon
imgBic.x = random(0,width);
imgBic.y += imgBic.vy;
imgBic.vy += imgBic.speed;

if(imgBic.y>height){
  imgBic.y = 0;
  imgBic.x = random(0,width);
}

if(bic){

}

image(bic,imgBic.x,imgBic.y,imgBic.width,imgBic.height);

//Forgetting Assignments (fa) icon
imgFa.x = random(0,width);
imgFa.y += imgFa.vy;
imgFa.vy += imgFa.speed;

if(imgFa.y>height){
  imgFa.y = 0;
  imgFa.x = random(0,width);
}

image(fa,imgFa.x,imgFa.y,imgFa.width,imgFa.height);

//Procastination (p) icon
imgP.x = random(0,width);
imgP.y += imgP.vy;
imgP.vy += imgP.speed;

if(imgP.y>height){
  imgP.y = 0;
  imgP.x = random(0,width);
}

image(p,imgP.x,imgP.y,imgP.width,imgP.height);

//Staying up Until 4AM (su) icon
imgSu.x = random(0,width);
imgSu.y += imgSu.vy;
imgSu.vy += imgSu.speed;

if(imgSu.y>height){
  imgSu.y = 0;
  imgSu.x = random(0,width);
}

image(su,imgSu.x,imgSu.y,imgSu.width,imgSu.height);

//User (white circle), following mouse's movements; if the mouse touches on of the Obstacles, it turns red-simulation is over.
circle(user.fill);
circle(mouseX,mouseY,user.size);


}
