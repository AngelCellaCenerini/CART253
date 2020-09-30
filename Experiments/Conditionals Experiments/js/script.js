/**************************************************
Experimenting with Conditionals - template by CART253 course
Angel Cella Cenerini

Here is a description of this template p5 project.
**************************************************/
//Declaring variables vua JS object
//let displayCircle=false;
// let circle = {
// x: 250,
// y: 250,
// size: 140,
// vx: 0,
// vy:0,
// ax:0,
// ay:0,
// acceleration: 0.1,
// maxSpeed:5
// }
let img;

// let caterpillar = {
//   x:100,
//   y:250,
//   segmentSize: 50
// }
function preload(){
img= loadImage("assets/images/clown.png");
}
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  imgX=20;
  imgY= 200;
  imgSpeed= 3;
  imgX+=imgSpeed;
  image(img,imgX,imgY);
// if(mouseIsPressed){
//   background(255,0,0);
// }
// else{
//   fill(0,0,255);
// }
// if(displayCircle){
//   ellipse(200,100,100,100);
// }
// if(mouseIsPressed){
//   displayCircle=true;
// }


  // noStroke();
// fill(255,255,255);
// if(mouseX<circle.x){
//   circle.ax=-circle.acceleration;
// }
// else {
//   circle.ax= circle.acceleration;
// }
// if(mouseY<circle.y){
//   circle.ay=-circle.acceleration;
// }
// else {
//   circle.ay= circle.acceleration;
// }
// circle.vx= circle.vx+circle.ax;
// circle.vx=constrain(circle.vx,-circle.maxSpeed,circle.maxSpeed);
// circle.vy=circle.vy+circle.ay;
//   circle.x = circle.x + circle.vx;
//   circle.y= circle.y+circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
  // if(circle.x>width/2){
  //   circle.speed = -circle.speed;
  // }
  // if (circle.x < 0){
  //   circle.speed= -circle.speed;
  // }
  // if(mouseY<height/2){
  //   fill(255);
  // }
  // else {
  //   fill(0);
  // }
  //
  // push();
  // ellipse(circle.x,circle.y,circle.size);
  // pop();
// noStroke();
// fill(120,255,120);
// let x = caterpillar.x;
// let numSegments=5;
// let segmentsDrawn = 0;
//
// while (segmentsDrawn<numSegments){
//     ellipse(x,caterpillar.y, caterpillar.segmentSize);
//     x= x+40;
//     segmentsDrawn=segmentsDrawn+1;
// }


}
