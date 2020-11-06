class Light {
  constructor(x, y, chime){
    this.x = x;
    this.y = y;
    this.originalSize = undefined;
    this.size = undefined;
    this.growth = 20;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
    this.keyCode = undefined;
    this.chime = chime;
    this.timer = undefined;
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
  // Specific features will be inserted in subclasses
  }

  growthDuration(){
  if (frameCount % 60 === 0 && this.timer > 0){
    this.timer --;
  }
  if (this.timer === 0){
    this.returnOriginalSize()
  }
  }

  keyPressed(){
    if((keyCode === this.keyCode) && (state === `simulation`)){
      this.size = this.size + this.growth;
      this.timer = 1;
    }
  }

  returnOriginalSize(){
    this.size = this.originalSize; // after 2 seconds, objects regains it original size
  }

}
