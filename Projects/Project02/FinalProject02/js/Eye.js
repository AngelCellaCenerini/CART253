class Eye {
  constructor(x, y, positionX, positionY){
    this.x = x;
    this.y = y;
    this.positionX = positionX;    // Distinguishing from this.x, which only applies to pupil
    this.positionY = positionY;    // Distinguishing from this.x, which only applies to pupil
    this.size = 170;
    this.pupilSize = 60;
    this.vx = 4;
    this.vy = 4;
    this.maxSpeed = 6;
    this.wonderTime = 0;

  }

  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    let direction = random(0, 1);
    if (direction < 0.15){
      this.vx = random(-this.maxSpeed, this.maxSpeed);
      this.vy = random(-this.maxSpeed, this.maxSpeed);
    }
  }

  restrict(){
      // Restricting Pupil within Eye
      // Horizontally
      this.x = constrain(this.x, this.positionX - this.size/5, this.positionX + this.size/5);
      // Vertically
      this.y = constrain(this.y, this.positionY - this.size/5, this.positionY + this.size/5);

    }

  focus(level02){
    // Time Pupil spends darting around
    this.dartingTime++;

    // Recenter Pupil via Mic Input
    if (level02 > 0.1){
      this.dartingTime = 0;
      this.x = this.positionX;
      this.y = this.positionY;

    }
    if (this.dartingTime > 4*60){
      state = `fail`;
      oscillator02.stop();
      oscillator202.stop();
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

    // Blue-Green Pupil
    push();
    fill(58, 255, 220);
    ellipse(this.x, this.y, this.pupilSize);
    pop();

    // Gloden Pupil Ring
    push();
    noFill();
    stroke(255, 204, 0);
    strokeWeight(2);
    ellipse(this.x, this.y, this.pupilSize/3);
    pop();

  }

}
