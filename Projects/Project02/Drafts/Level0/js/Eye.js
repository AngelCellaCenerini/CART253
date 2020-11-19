class Eye {
  constructor(x, y, positionX, positionY){
    this.x = x;
    this.y = y;
    this.positionX = positionX;    // Distinguishing from this.x for only pupil will move
    this.positionY = positionY;    // Distinguishing from this.x for only pupil will move
    this.size = 170;
    this.pupilSize = 60;
    this.vx = 4;
    this.vy = 4;
    this.maxSpeed = 6;
    this.acceleration = 2;
    this.wonderTime = 0;

  }

  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    let direction = random(0, 1);
    if (direction < 0.1){
      this.vx = random(-this.maxSpeed, this.maxSpeed);
      this.vy = random(-this.maxSpeed, this.maxSpeed);
    }
  }

  restrict(){
      // Restricting Pupil within Eye
      // Horizontally
      this.x = constrain(this.x, this.positionX - this.size/4, this.positionX + this.size/4);
      // Vertically
      this.y = constrain(this.y, this.positionY - this.size/4, this.positionY + this.size/4);

    }

  focus(level){
    this.wonderTime++;

    // Recenter Pupil
    if (level > 0.1){
      this.wonderTime = 0;
      this.x = this.positionX;
      this.y = this.positionY;

    }
    if (this.wonderTime > 6*60){
      console.log(`fail`);
    }


  }

  display(){

    // Eye Red Corners
    push();
    fill(255, 69, 0);
    triangle(this.positionX - 3*this.size/4, this.positionY, this.positionX, this.positionY - 2*this.size/5, this.positionX, this.positionY + 2*this.size/5);
    triangle(this.positionX + 3*this.size/4, this.positionY, this.positionX, this.positionY - 2*this.size/5, this.positionX, this.positionY + 2*this.size/5);
    pop();

    // Eye
    push();
    fill(255);
    ellipse(this.positionX, this.positionY, this.size);
    pop();

    // Pupil
    push();
    fill(58, 255, 220);
    ellipse(this.x, this.y, this.pupilSize);
    pop();

    // Pupil Ring
    push();
    noFill();
    stroke(255, 204, 0);
    strokeWeight(2);
    ellipse(this.x, this.y, this.pupilSize/3);
    pop();

  }

}
