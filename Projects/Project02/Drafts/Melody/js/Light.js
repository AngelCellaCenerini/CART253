class Light {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1.8;
    this.r = 250;
    this.g = 250;
    this.b = 250;
  }

  move(){
    // Lights gently floating around screen
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;
    let change = random(0, 1);
    if (change < 0.02){
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x = constrain( this.x, 0, width);
    this.y = constrain( this.y, 0, height);
  }

  wrap(){
    // Redirecting (almost)offscreen object
    // Horizontally
    if (this.x > width) {
      this.x -= width;
    }
    else if(this.x < 0){
      this.x += width;
    }
    // Vertically
    if (this.y > height) {
      this.y -= height;
    }
    else if(this.y < 0){
      this.y += height;
    }
  }


  display(){
    push();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size)
    fill(this.r, this.g, this.b, 100);
    ellipse(this.x, this.y, 3*this.size/2);
    pop();
  }

}
