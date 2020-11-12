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
  }

  move(){

  // Acceleration
  this.vx = this.vx + this.ax;
  this.vy = this.vy + this.ay;
  // Velocity
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;

  let change = random(0, 1);
  if (change < 0.05){
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
  }

  }

  lift(amount){

  this.vy = this.vy + amount;
  
  }

  constraining(){

    this.x = constrain(this.x, 11*width/26, 14*width/25);
    this.y = constrain(this.y, 3*this.size/2, height);

  }

  gravity(force){
    this.ay = this.ay + force;
  }

  checkImpact(){
    if ((this.y + this.size/2) > 5*height/7){
        this.active = false;
    }
  }

  display(){
    // Specific features in subclasses (colors vary)
  }

}
