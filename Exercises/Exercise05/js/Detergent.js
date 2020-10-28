class Detergent{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 120;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 6;
    this.ax = 0;
    this.ay = 0;
    this.active = true;
  }

  display(){
    // Orange Box
    push();
    fill(244, 118, 79);
    rect(this.x,  this.y, this.size);
    pop();
    // Box Decoration - Blue Stripe
    push();
    fill(29, 79, 158);
    rect(this.x, this.y + this.size/4, this.size, this.size/4;
    pop();
    // Box Decoration - Yellow Circle
    push();
    fill(236, 212, 97);
    ellipse(this.x, this.y, 7*this.size/12);
    pop();
    // Box Decoration - Orange Circle
    push();
    fill(244, 118, 79);
    ellipse(this.x, this.y, 5*this.size/12);
    pop();
  }
}
