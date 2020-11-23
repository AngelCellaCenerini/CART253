class Mirror{
  constructor(x, y, handleY, shadowX, shadowY){
    this.x = x;
    this.y = y;
    this.handleY = handleY;
    this.shadowX = shadowX;
    this.shadowY = shadowY;
    this.width = 350;
    this.height = 435;
    this.vx = 2;
    this.vy = 2;
    this.maxSpeed = 4;
    this.outlineWidth = 375;
    this.outlineHeight = 460;
    this.handleWidth = 280;
    this.handleHeight = 140;
    this.shadowWidth = 180;
    this.shadowHeight = 70;
    this.altitude = -2;
    this.start = 0;
    this.stop = PI
  }

  float(){
    let change = random(0, 1);
    if (change < 0.1) {
      this.altitude = random(-this.maxSpeed, this.maxSpeed);
    }
    this.shadowY = this.shadowY + this.altitude;
}

  tremble(){
    let r = random(0, 1);
    if (r < 0.1) {
      this.vx = random(-this.maxSpeed, this.maxSpeed);
      this.vy = random(-this.maxSpeed, this.maxSpeed);
    }
  }

  move(){
    // Move the ghost
    this.x += this.vx;
    this.y += this.vy;
  }



  display(){
    // Mirror "Handle"
    push();
    noFill();
    stroke(255);
    strokeWeight(5);
    arc(this.x, this.handleY, this.handleWidth, this.handleHeight, this.start, this.stop);
    pop();

    // Mirror
    push();
    noFill();
    stroke(255);
    strokeWeight(9);
    ellipse(this.x, this.y - this.y/5, this.width, this.height);
    strokeWeight(2);
    ellipse(this.x, this.y - this.y/5, this.outlineWidth, this.outlineHeight);
    pop();

    // Mirror "Shadow" (Negative)
    push();
    noStroke();
    fill(255, 255, 255, 190);
    ellipse(this.shadowX, this.shadowY, this.shadowWidth, this.shadowHeight);
    pop();

    // Cracks
    push();
    stroke(255);
    strokeWeight(2);
    line(this.x + 13*this.width/35, this.y - 46*this.height/87, this.x - 3*this.width/7, this.y + 2*this.height/29);
    line(this.x - this.width/4, this.y - 56*this.height/87, this.x + this.width/7, this.y - 32*this.height/87);
    line(this.x + this.width/15, this.y - 26*this.height/87, this.x + this.width/4, this.y + 19*this.height/87);
    line(this.x + this.width/7, this.y - this.height/8, this.x + this.width/2, this.y - this.height/4);
    pop();

  }


}
