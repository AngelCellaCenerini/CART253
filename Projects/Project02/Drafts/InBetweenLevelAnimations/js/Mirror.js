class Mirror{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 350;
    this.height = 435;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 4;
    this.broken = true;  // display cracks
    this.active = true;  // move mirror
    this.start = 0;  // needed to draw Arc (line 42)
    this.stop = PI   // needed to draw Arc (line 42)
  }

  move(){

    this.x =  this.x + this.vx;
    this.y =  this.y + this.vy;

  }

  tremble(){

    if(this.active){
      // Lights gently floating around screen
      let change = random(0, 1);
      if (change < 6){
        this.vx = random(-this.maxSpeed, this.maxSpeed);
      }
      this.x = constrain( this.x, 16*width/33, 17*width/33);
    }
  }


  display(){
    // "Handle"
    push();
    noFill();
    stroke(255);
    strokeWeight(5);
    arc(this.x, this.y + this.height/3, 5*this.width/7, this.height/3, this.start, this.stop);
    pop();

    // Mirror
    push();
    noFill();
    stroke(255);
    strokeWeight(9);
    ellipse(this.x, this.y - this.y/5, this.width, this.height);
    strokeWeight(2);
    ellipse(this.x, this.y - this.y/5, 15*this.width/14, 92*this.height/87);
    pop();

    // "Shadow" (Negative)
    push();
    noStroke();
    let r = random(70, 220);
    fill(255, 255, 255, r);
    ellipse(this.x, this.y + 3*this.height/4, 3*this.width/7, this.height/7);
    pop();

    // Cracks
    if(this.broken){
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


}
