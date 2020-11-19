class Eye {
  constructor(x, y, positionX, postitionY){
    this.x = x;
    this.y = y;
    this.positionX = positionX;    // Distinguishing from this.x for only pupil will move
    this.postitionY = postitionY;    // Distinguishing from this.x for only pupil will move
    this.size = 170;
    this.vx = 4;
    this.vy = 4;
    this.maxSpeed = 8;
    this.acceleration = 2;

  }

  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    let direction = random(0, 1);
    if (direction < 0.6){
      this.vx = random(-this.maxSpeed, this.maxSpeed);
      this.vy = random(-this.maxSpeed, this.maxSpeed);
    }
  }

  acceleration(){ //maxSpeed???????????????????????????????
  this.vx = this.vx + this.acceleration;
  this.vy = this.vy + this.acceleration;
  // Controlling Speed
  if ((this.vx > this.maxSpeed) || (this.vy > this.maxSpeed)){
    this.acceleration = 0;
  }
  }

  restrict(){  //??????????????????????????????
      // Restricting Pupil within Eye
      // Horizontally
      if ((this.x + this.size/2) > (this.positionX + this.size/2)) {
        this.x -= (this.positionX + this.size/3);
      }
      // Vertically
      if ((this.y + this.size/2) > (this.positionY + this.size/2)) {
        this.y -= (this.positionY + this.size/3);
      }
    }

  focus(call){
    // Transition?
    let d = dist(this.x, this.y, this.postitionX, this.positionY);
    this.x = this.x - d;
    this.y = this.y - d;
    // Respawn?
    this.x = this.positionX;
    this.y = this.positionY;

  }

  display(){
    // Eye Red Corners
    push();
    fill(255, 69, 0);
    triangle(this.positionX - 3*this.size/4, this.positionY, this.positionX, this.positionY - 5*this.size/5, this.positionX, this.positionY + 5*this.size/5);
    triangle(this.positionX + 3*this.size/4, this.positionY, this.positionX, this.positionY - 5*this.size/5, this.positionX, this.positionY + 5*this.size/5);
    pop();

    // Eye
    push();
    fill(255);
    ellipse(this.positionX, this.positionY, this.size);
    pop();

    // Pupil
    push();
    fill(58, 255, 220);
    ellipse(this.x, this.y, 6*this.size/17);
    pop();

    // Pupil Ring
    push();
    noFill();
    stroke(255, 204, 0);
    strokeWeight(2);
    ellipse(this.x, this.y, 2*this.size/17);
    pop();

  }

}
