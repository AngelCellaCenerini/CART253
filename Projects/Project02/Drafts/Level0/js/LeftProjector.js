class LeftProjector extends Projector{
  constructor(x, y){
    super(x, y);
  }

  display(){
    push();
    fill(220);
    rect(this.x, this.y, this.width, this.height, this.radius, this.radius, this.radius, this.radius);
    fill(255);
    rect(this.x, this.y, this.width, this.height, this.radius, this.radius, this.radius, this.radius);
    pop();
  }

  mousePressed(){
    let d3 = dist(mouseX, mouseY, this.x, this.y);
    if ((d3 < this.width/2 || d3 < this.height/2) && (state === `level`)){
      state = `intro`;
      soundtrack.stop();
      soundtrack2.stop();
    }
  }

}
