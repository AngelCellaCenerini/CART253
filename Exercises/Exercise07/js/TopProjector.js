class TopProjector extends Projector{
  constructor(x, y){
    super(x, y);
  }

  display(){
    push();
    fill(220);
    rect(this.x, this.y, this.height, this.width, this.radius, this.radius, this.radius, this.radius);
    fill(255);
    rect(this.x, this.y, this.height, this.width, this.radius, this.radius, this.radius, this.radius);
    pop();
  }

  mousePressed(){
    let d2 = dist(mouseX, mouseY, this.x, this.y);
    if ( (d2 < this.height/2 || d2 < this.width/2) && (state === `level`)){
      state = `intro`;
      soundtrack.stop();
      soundtrack2.stop();
    }
  }

}
