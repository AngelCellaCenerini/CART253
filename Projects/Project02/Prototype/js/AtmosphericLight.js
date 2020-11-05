class AtmosphericLight extends Light {
  constructor(x, y){
  super(x, y);
  this.size = 10;
  this.speed = 1.8;
  }

  display(){
    push();
    fill(250);
    ellipse(this.x, this.y, this.size)
    fill(250, 250, 250, 180);
    ellipse(this.x, this.y, this.size + this.size/4);
    pop();
  }

  keyPressed(){
    super.keyPressed();
    keyCode === 65;
  }
}
