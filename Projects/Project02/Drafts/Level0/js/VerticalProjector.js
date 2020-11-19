class VerticalProjector extends Projector{
  constructor(x, y){
    super(x, y);
  }
  display(){
    push();
    fill(220);
    rect(this.x, this.y, this.width, this.height/4, this.radius, this.radius, this.radius, this.radius);
    fill(255);
    rect(this.x, this.y, this.width, this.height, this.radius, this.radius, this.radius, this.radius);
    pop();
  }
}
