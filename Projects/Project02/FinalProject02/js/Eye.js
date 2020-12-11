class Eye {
  constructor(x, y, positionX, positionY){
    this.x = x;
    this.y = y;
    this.positionX = positionX;    // Distinguishing from this.x, which only applies to pupil
    this.positionY = positionY;    // Distinguishing from this.x, which only applies to pupil
    this.size = 170;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 6;
    this.dartingTime = 0;
    this.stillTime = 0;
    this.moving = true;

  }

  move(){
    if (this.moving){
      let direction = random(0, 1);
      if (direction < 0.15){
        this.vx = random(-this.maxSpeed, this.maxSpeed);
        this.vy = random(-this.maxSpeed, this.maxSpeed);
      }
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

    }
    else{
      // Eye stills for 2 secs before going back to wondering around
      this.stillTime ++;
      if(this.stillTime > 3*60){
        this.moving = true;
        this.stillTime = 0;
      }
    }

  }

  restrict(){
      // Restricting Pupil within Eye
      // Horizontally
      this.x = constrain(this.x, this.positionX - this.size/5, this.positionX + this.size/5);
      // Vertically
      this.y = constrain(this.y, this.positionY - this.size/5, this.positionY + this.size/5);

    }

  focus(lv02){

    // Recenter Pupil via Mic Input
    if (lv02 > 0.1){
      this.dartingTime = 0;
      this.x = this.positionX;
      this.y = this.positionY;
      this.moving = false;

    }

    if(this.moving){
      // Time Pupil spends darting around
      this.dartingTime++;
      if (this.dartingTime > 4*60 && this.moving === true){
        state = `fail`;
        oscillator02.stop();
        oscillator202.stop();
        this.dartingTime = 0;
        this.stillgTime = 0;
      }
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
    ellipse(this.x, this.y, 6*this.size/17);
    pop();

    // Gloden Pupil Ring
    push();
    noFill();
    stroke(255, 204, 0);
    strokeWeight(2);
    ellipse(this.x, this.y, 2*this.size/17);
    pop();

  }

}
