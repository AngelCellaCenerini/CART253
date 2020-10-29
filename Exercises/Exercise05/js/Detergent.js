class Detergent{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 120;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 6;
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
    if (this.y - this.size/2 > height){
      this.active = false;
    }
  }

  // bounce(pan){
  //   if ((this.x > pan.x - pan.width/2) && (this.x < pan.x + pan.width/2) &&
  //       (this.y + this.size > pan.y - pan.height/2) && (this.y - this.size < pan.y + pan.height/2)){
  //         let dx = this.x - pan.x;
  //         this.vx = this.vx + map(dx, -pan.width/2, pan.width/2, - 0.3, 0.3);
  //
  //         this.vy = -this.vy;
  //         this.ay = 0; // Acceleration will have to build from start >> Physics!
  //   }
  // }

  display(){
    // Orange Box
    push();
    fill(244, 118, 79);
    rect(this.x,  this.y, this.size);
    pop();
    // Box Decoration - Blue Stripe
    push();
    fill(29, 79, 158);
    rect(this.x, this.y + this.size/4, this.size, this.size/4);
    pop();
    // Box Decoration - Yellow Circle
    push();
    fill(236, 212, 97);
    ellipse(this.x, this.y, 7*this.size/12);
    pop();
    // Box Decoration - Orange Circle
    push();
    fill(244, 118, 79);
    ellipse(this.x, this.y, 5*this.size/12);
    pop();
  }
}
