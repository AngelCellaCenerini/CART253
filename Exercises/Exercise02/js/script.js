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

// Inserting images variables - .png files are objects/obstacles user has to avoid
// Bad Internet Connection (bic)
let imgBic ={
  x: 200,
  y:0,
  vx: 0,
  vy: 0,
  speed: 5
}
// Forgetting Assignments (fa)
let imgFa ={
  x: 100,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 5
}
// Procastination (p)
let imgP={
  x: 300,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 5
}
// Staying up Until 4:00AM (su)
let imgSu={
  x: 50,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 5
}
//

//Inserting User variables - user will follow mouse's movements
let user={
  size:80,
  fill:{
    r:222,
    g:250,
    b:137
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
  noCursor();
  // Objects user has to dodge (icons)
  // Bad Internet Connection(bic) icon
  imgBic.x = random(0,width);
  imgBic.vy = imgBic.speed;
  //Forgetting Assignments (fa) icon
  imgFa.x = random(0,width);
  imgFa.vy = imgFa.speed;
  //Procastination (p) icon
  imgP.x = random(0,width);
  imgP.vy = imgP.speed;
  //Staying up Until 4AM (su) icon
  imgSu.x = random(0,width);
  imgSu.vy = imgSu.speed;

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);
noStroke();

//User(white circle) movements follow the mouse's coordinations
user.x=mouseX;
user.y=mouseY;

//Catching the obstacles
//Bad Internet Connection(bic)
let d1 = dist(user.x,user.y,imgBic.x,imgBic.y);
//Forgetting Assignments
let d2 = dist(user.x,user.y,imgFa.x,imgFa.y);
//Procastination (p)
let d3 = dist(user.x,user.y,imgP.x,imgP.y);
//Staying up Until 4AM (su)
let d4 = dist(user.x,user.y,imgSu.x,imgSu.y);

if(d1 < user.x){
    noLoop();
}
// if(d < user.size/2+imgBic.width/2 || d<user.size/2+imgFa.width/2 || d<user.size/2+imgP.width/2 || d<user.size/2+imgSu.width/2){
//     noLoop();
// }


// Obstacles movements
// Bad Internet Connection(bic) icon
imgBic.x += imgBic.vx;
imgBic.y += imgBic.vy;

if(imgBic.y>height){
  imgBic.y = 0;
  imgBic.x = random(0,width);
}

image(bic,imgBic.x,imgBic.y);

//Forgetting Assignments (fa) icon
imgFa.x += imgFa.vx;
imgFa.y += imgFa.vy;

if(imgFa.y>height){
  imgFa.y = 0;
  imgFa.x = random(0,width);
}

image(fa,imgFa.x,imgFa.y);

//Procastination (p) icon
imgP.x += imgP.vx;
imgP.y += imgP.vy;

if(imgP.y>height){
  imgP.y = 0;
  imgP.x = random(0,width);
}

image(p,imgP.x,imgP.y);

//Staying up Until 4AM (su) icon
imgSu.x += imgSu.vx;
imgSu.y += imgSu.vy;

if(imgSu.y>height){
  imgSu.y = 0;
  imgSu.x = random(0,width);
}

image(su,imgSu.x,imgSu.y);

//User (white circle)
fill(user.fill.r,user.fill.g,user.fill.b);
circle(user.x,user.y,user.size);


}
