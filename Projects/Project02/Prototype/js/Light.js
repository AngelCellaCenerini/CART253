class Light {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = undefined;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
  }

  move(){
    // Lights gentlry float around screen
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

  display(){
  // Specific features will be inserted in subclasses
  }

  keyPressed(){
    if((keyCode === undefined) && (state === `simulation`)){
      this.size = this.size + 5;
    }
  }
}
