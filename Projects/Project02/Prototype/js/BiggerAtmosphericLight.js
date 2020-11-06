class BiggerAtmosphericLight extends Light {
  constructor(x, y){
  super(x, y);
  this.size = 15;
  this.speed = 1.5;
  }

  display(){
    push();
    fill(250, 250, 250, 180);
    ellipse(this.x, this.y, this.size)
    fill(250, 250, 250, 100);
    ellipse(this.x, this.y, 1.8*this.size);
    pop();
  }
}
