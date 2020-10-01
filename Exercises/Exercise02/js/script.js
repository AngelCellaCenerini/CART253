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
  size: 120,
  vx: 0,
  vy: 0,
  speed: 6
};
// Forgetting Assignments (fa)
let imgFa ={
  x: 100,
  y: 0,
  size:130,
  vx: 0,
  vy: 0,
  speed: 7
};
// Procastination (p)
let imgP={
  x: 300,
  y: 0,
  size: 140,
  vx: 0,
  vy: 0,
  speed: 6
};
// Staying up Until 4:00AM (su)
let imgSu={
  x: 50,
  y: 0,
  size: 150,
  vx: 0,
  vy: 0,
  speed: 7
};
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

//Setting up flashy ligths as background - aka the anxiety of the student XD
for(let i=0; i<15;i++){
  let x1 = random(0,width);
  let y1 = random (0,height);
  let x2 = random(0,width);
  let y2 = random (0,height);
  stroke(255);
  line(x1,y1,x2,y2);
}



noStroke();

// Distance between obstacles
let d1 = dist(imgBic.x,imgBic.y,imgFa.x,imgFa.y);
let d2 = dist(imgBic.x,imgBic.y,imgP.x,imgP.y);
let d3 = dist(imgBic.x,imgBic.y,imgSu.x,imgSu.y);
let d4 = dist(imgFa.x,imgFa.y,imgP.x,imgP.y);
let d5 = dist(imgFa.x,imgFa.y,imgSu.x,imgSu.y);
let d6 = dist(imgP.x,imgP.y,imgSu.x,imgSu.y);

//User (white circle) - separatring property to make color change work
fill(user.fill.r,user.fill.g,user.fill.b);


//Catching the obstacles - When user touches obstacles, white circle turns red
//Bad Internet Connection(bic)
let distance1 = dist(user.x,user.y,imgBic.x,imgBic.y);
//Forgetting Assignments
let distance2 = dist(user.x,user.y,imgFa.x,imgFa.y);
//Procastination (p)
let distance3 = dist(user.x,user.y,imgP.x,imgP.y);
//Staying up Until 4AM (su)
let distance4 = dist(user.x,user.y,imgSu.x,imgSu.y);


if(distance1 < user.size/2+imgBic.size/3 || distance2<user.size/2+imgFa.size/3 || distance3<user.size/2+imgP.size/3 || distance4<user.size/2+imgSu.size/3){
    noLoop();
    fill(255,0,0);
}


// Obstacles movements
// Bad Internet Connection(bic) icon
imgBic.x += imgBic.vx;
imgBic.y += imgBic.vy;

if(imgBic.y>height){
  imgBic.y = 0;
  imgBic.x = random(0,width);
}

image(bic,imgBic.x,imgBic.y,imgBic.size);

//Forgetting Assignments (fa) icon
imgFa.x += imgFa.vx;
imgFa.y += imgFa.vy;

if(imgFa.y>height){
  imgFa.y = 0;
  imgFa.x = random(0,width);
}

image(fa,imgFa.x,imgFa.y,imgFa.size);

//Procastination (p) icon
imgP.x += imgP.vx;
imgP.y += imgP.vy;

if(imgP.y>height){
  imgP.y = 0;
  imgP.x = random(0,width);
}

image(p,imgP.x,imgP.y,imgP.size);

//Staying up Until 4AM (su) icon
imgSu.x += imgSu.vx;
imgSu.y += imgSu.vy;

if(imgSu.y>height){
  imgSu.y = 0;
  imgSu.x = random(0,width);
}

image(su,imgSu.x,imgSu.y,imgSu.size);
//

//User(white circle) movements follow the mouse's coordinations
user.x=mouseX;
user.y=mouseY;

//User (white circle)
circle(user.x,user.y,user.size);


}
