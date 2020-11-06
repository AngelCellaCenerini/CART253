class GreenLight extends Light {
  constructor(x, y, chime){
  super(x, y, chime);
  this.size = 45;
  this.originalSize = 45;
  this.speed = 1;
  this.keyCode = 87;
  }

  display(){
    push();
    fill(237, 255, 177);
    ellipse(this.x, this.y, this.size)
    fill(237, 255, 177, 130);
    ellipse(this.x, this.y, this.size + this.size/2);
    pop();
  }

  keyPressed(){
    super.keyPressed();
    if(keyCode === this.keyCode){
      this.chime.play();
    }
  }

}
