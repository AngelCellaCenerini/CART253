class AtmosphericLight extends Light {
  constructor(x, y){
  super(x, y);
  this.size = 6;
  this.speed = 1.8;
  }

  display(){
    push();
    fill(250);
    ellipse(this.x, this.y, this.size)
    fill(250, 250, 250, 100);
    ellipse(this.x, this.y, 2*this.size);
    pop();
  }
}
