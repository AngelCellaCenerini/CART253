class Madeleine{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 310;
  }

  display(){
    push();
    stroke(0);
    strokeWeight(4);
    ellipse(this.x - 7*this.width/10, this.y, this.width, 22*this.height/31);
    ellipse(this.x + 7*this.width/10, this.y, this.width, 22*this.height/31);
    ellipse(this.x - 2*this.width/5, this.y, this.width, 27*this.height/31);
    ellipse(this.x + 2*this.width/5, this.y, this.width, 27*this.height/31);
    ellipse(this.x, this.y, this.width, this.height);
    // Lights
    stroke(255);
    noFill();
    ellipse(this.x - 2*this.width, this.y, this.height/10)
    noStroke();
    fill(255);
    ellipse(this.x + 2*this.width, this.y, this.height/10)
    pop();
  }
}
