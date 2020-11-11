class Creature{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 60;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
  }

  move(){
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

    if ( this.x < 11*width/25 ){
      this.x += 11*width/25;
    }
    else if ( this.x > 12*width/25 ){
      this.x -= 12*width/25;
    }
  }

  display(){
    // Specific features in subclasses (colors vary)
  }

}
