class Creature{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 60;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.speed = undefined;
    this.active = true;
    this.r = undefined;
    this.g = undefined;
    this.b = undefined;
    this.red = undefined;
    this.green = undefined;
    this.blue = undefined;
  }

  move(){

  // Acceleration
  this.vx = this.vx + this.ax;
  this.vy = this.vy + this.ay;
  // Velocity
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;

  // Randomly change direction
  let change = random(0, 1);
  if (change < 0.05){
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
  }

  }

  lift(amount){
  // Lift creature based on Mic Input level
  this.vy = this.vy + amount;

  }

  constrain(){
    // Constrain Creature to canvas
    this.x = constrain(this.x, 11*width/26, 14*width/25);
    this.y = constrain(this.y, 3*this.size/2, height);

  }

  gravity(force){
    this.ay = this.ay + force;
  }

  checkImpact(){
    if ((this.y + this.size/2) > 5*height/7){
        this.active = false;
        state = `fail`;
        clearInterval(interval01);
        interval01 = undefined;
    }
  }

  display(){
  // Winged Creature
  // Wings
  // Left Wing
  push();
  noStroke();
  fill(this.r, this.g, this.b);
  triangle(this.x - this.size, this.y + this.size/6, this.x - 7*this.size/12, this.y - this.size/2, this.x, this.y);
  pop();

  push();
  noStroke();
  fill(this.red, this.green, this.blue);
  triangle(this.x - 3*this.size/2, this.y - this.size/6, this.x - 7*this.size/12, this.y - this.size/2, this.x, this.y);
  pop();

  push();
  noStroke();
  fill(255);
  triangle(this.x - 9*this.size/5, this.y - this.size/2, this.x - 7*this.size/12, this.y - this.size/2, this.x, this.y);
  pop();

  // Right Wing
  push();
  noStroke();
  fill(this.r, this.g, this.b);
  triangle(this.x + this.size, this.y + this.size/6, this.x + 7*this.size/12, this.y - this.size/2, this.x, this.y);
  pop();

  push();
  noStroke();
  fill(this.red, this.green, this.blue);
  triangle(this.x + 3*this.size/2, this.y - this.size/6, this.x + 7*this.size/12, this.y - this.size/2, this.x, this.y);
  pop();

  push();
  noStroke();
  fill(255);
  triangle(this.x + 9*this.size/5, this.y - this.size/2, this.x + 7*this.size/12, this.y - this.size/2, this.x, this.y);
  pop();

  // Deer Horns
  push();
  stroke(255);
  strokeWeight(3);
  // Left Horn (Thicker)
  line(this.x - this.size/4, this.y, this.x - this.size/4, this.y - 2*this.size/3);
  line(this.x - this.size/2, this.y - 2*this.size/3, this.x, this.y - 2*this.size/3);
  line(this.x - this.size/2, this.y - 2*this.size/3, this.x - this.size/2, this.y - this.size);

  // Right Horn (Thicker)
  line(this.x + this.size/4, this.y, this.x + this.size/4, this.y - 5*this.size/6);
  line(this.x + this.size/4, this.y - 5*this.size/6, this.x + this.size/2, this.y - 5*this.size/6);
  line(this.x + this.size/2, this.y - 5*this.size/6, this.x + this.size/2, this.y - this.size);

  strokeWeight(1.5);
  // Left Horn (Thinner)
  line(this.x + this.size/60, this.y - 2*this.size/3, this.x + 1, this.y - 5*this.size/6);
  line(this.x - this.size/2, this.y - 5*this.size/6, this.x - this.size/3, this.y - 5*this.size/6);

  // Right Horn (Thinner)
  line(this.x + this.size/3, this.y - 5*this.size/6, this.x + this.size/3, this.y - this.size);
  pop();

  // Body
  push();
  noStroke();
  fill(255);
  ellipse(this.x, this.y, this.size);
  fill(0);
  ellipse(this.x, this.y - this.size/4, this.size/4, this.size/6);
  ellipse(this.x, this.y, this.size/3, this.size/6);
  fill(255);
  ellipse(this.x, this.y + this.size/15, this.size/3, this.size/6);
  fill(0);
  ellipse(this.x, this.y, this.size/10);
  pop();

}

}
