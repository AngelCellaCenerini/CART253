class Egg{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 35;
    this.height = 45;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 10;
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
    // Deactivate Apple If it goes off screen
    if (this.y - this.height/2 > height){
      this.active = false;
    }
  }

  bounce(pan){
    // Object bouncing back upwards when hitting pan
    if ( (this.x > pan.x - pan.width/2) && (this.x < pan.x + pan.width/2) &&
        (this.y + this.height/2 > pan.y - pan.height/2) && (this.y - this.height/2 < pan.y + pan.height/2)){

          let dx = this.x - pan.x;
          this.vx = this.vx + map(dx, -pan.width/2, pan.width/2, - 0.9, 0.9);

          this.vy = -this.vy;
          this.ay = 0; // Acceleration will have to build from start >> Physics!
    }
  }

  display(){
    push();
    fill(235, 214, 199);
    ellipse(this.x, this.y, this.width, this.height);
    stroke(218, 185, 169);
    strokeWeight(8);
    point(this.x + this.width/4, this.y);
    strokeWeight(6);
    point(this.x + this.width/4, this.y - this.height/4);
    pop();
  }
}
