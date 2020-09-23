/**************************************************
Exercise 01 - Template p5 project by CART253 Course
Angel Cella Cenerini

Exercise 01 - I like to move it move it!
**************************************************/

// setup()
//
// Setting up canvas; drawing night sky background
function setup() {

  createCanvas(500,500);
  background (0);

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
  stroke(255,255,255,160);
  strokeWeight (10);
  point(180,100);
  point(30,450);

  strokeWeight(6);
  point(480,290);
  point(100,60);
  point(440,70);
  point(140,300);

  //Drawing purple-ish clouds
  noStroke();
  //Cloud01- darkest purple; the furthest
  fill(50,52,125);
  ellipse(230,155,15,20);
  ellipse(220,160,10,10);
  ellipse(250,150,10,10);
  ellipse(235,160,25,15);
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


}

// draw()
//
// Description of draw() goes here.
function draw() {


}
