/**************************************************
Exercise 01 - Template p5 project by CART253 Course
Angel Cella Cenerini

Exercise 01 - I like to move it move it!
**************************************************/

// setup()
// Introducing customized variables, mostly as JavaScript object - named after their represented subject
//let background = {shade: 0;}

let moon = {
x: 350,
y: 500,
size: 120,
speed: -0.3,
growth: 0.05,
fill: 255
}

//Flickering stars
let star1 = {
x:180,
y:100,
fill:80,
}

let star2 = {
x:30,
y:450,
fill:70,
}

//let sheep = {}

//
function setup() {

  createCanvas(500,500);


}

// draw()
//
// Description of draw() goes here.
function draw() {

  //Background; sky starts blues at bottom, becomes orange-ish at top with mapping
  background(42,50,95);
  //background (sky.shade);

  //Risisng,growing Moon -> Sun
  fill(moon.fill);
  moon.fill=map(mouseY,height,0, 0, 255);
  moon.fill=constrain(moon.fill,170,255);
  moon.y += moon.speed;
  moon.y = constrain(moon.y,140,400);
  moon.size += moon.growth;
  moon.size= constrain(moon.size,120,180);
  ellipse(moon.x,moon.y,moon.size);

  // STILL BACKGROUND - this part includes variables only in the two flickering stars; the rest is just still shapes creating purple-ish clouds and glowing stars
  //Drawing white, glowing stars
  //Stars' glow
  stroke(255,255,255,60);
  strokeWeight (17);
  point(180,100);
  point(30,450);
  strokeWeight(11);
  point(480,290);
  point(100,60);
  point(440,70);
  point(140,300);
  //Actual stars
  //Flickering Stars
  //FS1
  fill(star1.fill);
  star1.fill= random(80,255);
  ellipse(180,100,12);
  //FS2
  fill(star2.fill);
  star2.fill= random(70,200);
  ellipse(30,450,12);
  //Still stars
  stroke(255,255,255,160);
  strokeWeight(6);
  point(480,290);
  point(100,60);
  point(440,70);
  point(140,300);

  //Drawing purple-ish clouds
  noStroke();
  //Cloud01- darkest purple; the furthest
  fill(50,52,125);
  ellipse(220,155,15,20);
  ellipse(210,160,10,10);
  ellipse(240,150,10,10);
  ellipse(225,160,25,15);
  //Cloud02-darker purple
  fill(78,82,145);
  ellipse(80,250,80,15);
  ellipse(90,250,30,30);
  ellipse(80,240,25,40);
  ellipse(100,240,25,20);
  ellipse(65,240,25,15);
  //Cloud03-same darker purple
  ellipse(380,320,130,90);
  ellipse(425,320,100,130);
  ellipse(340,340,160,50);
  ellipse(320,350,80,60);
  //Cloud04 - lightest purple
  fill(137,150,203);
  ellipse(400,400,280,70);
  ellipse(480,370,160,200);
  ellipse(390,350,120,120);
  ellipse(400,405,120,130);
  ellipse(310,380,50,60);
  ellipse(318,420,60,55);
  //Cloud05 - lighest purple
  ellipse(10,240,50,80);
  ellipse(10,280,80,70);
  ellipse(40,250,30,50);
  ellipse(65,285,60,40);
  ellipse(65,270,50,50);
  // ENDS STILL BACKGROUND

  //Inserting sheep; movable with mouse
  //Sheep Body
  fill(239,212,158);
  ellipse(260,230,60,50);
  ellipse(270,240,50,30);
  ellipse(265,255,50,40);
  ellipse(240,250,90,50);
  ellipse(240,270,40,30);
  ellipse(220,267,25,20);
  ellipse(230,230,40,30);
  //Sheep Head
  fill(10);
  ellipse(225,238,28,35);
  //Sheep ears
  ellipse(202,230,19,8);
  ellipse(250,230,19,8);
  //Sheep legs
  ellipse(233,270,8,25);
  ellipse(291,252,8,25);
  ellipse(198,260,8,25);


}
