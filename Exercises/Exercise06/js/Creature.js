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
  // this.x = this.x + random(-4, 4);
  // this.y = this.y + random(-0.5, 0.5);
 this.x = this.x + this.vx;
 this.y = this.y + this.vy;

  let change = random(0, 1);
  if (change < 0.05){
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
  }

  }

  wrap(){

    // // Horizontally
    // if ( this.x < 11*width/26){
    //   this.x += 11*width/26;
    // }
    // else if ( this.x > 14*width/25){
    //   this.x -= 14*width/25;
    // }
    //
    // // Top of the Screen
    // if ( this.y < height/5 ){
    //   this.y +- height/5;
    // }

    constrain(this.x, 11*width/26, 14*width/25);

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
