class Compass{
  constructor(x, y, positionX, positionY, size){
    this.x = x;
    this.y = y;
    this.positionX = positionX;
    this.positionY = positionY;
    this.size = size;
    this.vx = 3;
    this.vy = 3;
    this.speed = 5;
    this.stallingTime = 0;
    this.angle = 0;
    // this.sting = false;
  }


  chase(frog){
    // Start tracking Time
    this.stallingTime++;
    // Wait 2 secs before letting Needles chase the Frog's Cheeck
    if (this.stallingTime > 2*60){
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;

      let dx = this.x - (frog.x);
      let dy = this.y - (frog.y);

      if (dx < 0){
      this.vx = this.speed;
      }
      else if(dx > 0){
        this.vx = -this.speed;
      }

      if (dy < 0){
        this.vy = this.speed;
      }
      else if(dy > 0){
        this.vy = -this.speed;
      }
    }

    // if((dx = 0) && (dy = 0) && (this.size > this.originalSize)){
    //   this.sting = true;
    // }

  }

  rotate(){
    this.angle = this.angle + 0.03;
  }

  impact(){
    let dx = this.x - (frog.x);
    let dy = this.y - (frog.y);
    if(dx === 0 || dy === 0){
      console.log(`yep`);
      if((this.frog.size > 3*this.frog.originalSize/2) || (this.frog.size > this.frog.maxSize)){
        this.frog.wounded = true;
      }
    }

  }

  keyPressed(){
    if(keyCode === UP_ARROW){
      let dx = 0;
      let dy = 0;
      this.x = this.x - this.vx;
      this.y = this.y - this.vy;

    }
  }

  display(){
    // Compass
    push();
    noFill();
    stroke(255);
    strokeWeight(6);
    ellipse(this.positionX, this.positionY, this.size);
    pop();

    // Cardinal Directions
    push();
    fill(255);
    ellipse(this.positionX, this.positionY - this.size/3, this.size/24);
    ellipse(this.positionX, this.positionY + this.size/3, this.size/24);
    ellipse(this.positionX - this.size/3, this.positionY, this.size/24);
    ellipse(this.positionX + this.size/3, this.positionY, this.size/24);
    pop();

    // Hook
    push();
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(this.positionX, this.positionY - this.size/2, this.size/5);
    pop();

    //Needle
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(255, 52, 150);
    triangle(0, 0 - this.size/4, 0 + this.size/24, 0 - this.size/20, 0, 0 + this.size/4);
    fill(255, 52, 150);
    triangle(0, 0 - this.size/4, 0 - this.size/24, 0 - this.size/20, 0, 0 + this.size/4);
    pop();
  }
}
