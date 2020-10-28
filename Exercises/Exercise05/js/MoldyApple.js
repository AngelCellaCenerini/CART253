class MoldyApple{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 60;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 8;
    this.ax = 0;
    this.ay = 0;
    this.active = true;
  }

  gravity(force){
    this.ay = this.ay + force;
  }

  move(){
    // Acceleration
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;
    // Respecting Max Speed value
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    // Applying Movement to Object
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    }

  bounce(){
    if (this.y + this.size/2 >= height){
       this.vy = -this.vy;
       this.ay = 0; // Acceleration will have to build from start >> Physics!
    }
  }

  display(){
    push();
    // Red Apple
    fill(246, 89, 72);
    ellipse(this.x, this.y, this.size);
    // Green Leaf
    fill(213, 236, 122);
    ellipse(this.x - this.size/4, this.y - this.size/2, 5*this.size/12, 5*this.size/6);
    // Mold - Layer 1
    fill(185, 103, 66);
    ellipse(this.x + this.size/5, this.y, 3*this.size/5);
    // Mold - Layer 2
    fill(158, 73, 53);
    ellipse(this.x + this.size/5, this.y, 1*this.size/5);
    pop();
  }
}
