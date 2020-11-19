class BottomProjector extends Projector{
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
    // Bottom Projector is the correct item User has to click to surpass level
    let d1 = dist(mouseX, mouseY, this.x, this.y);
    if ( (d1 < this.height/2 || d1 < this.width/2) && (state === `level`)){
      state = `success`;
      soundtrack.stop();
      soundtrack2.stop();
    }
  }

}
