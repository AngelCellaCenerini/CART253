class BlueLight extends Light {
  constructor(x, y, chime){
  super(x, y, chime);
  this.size = 22;
  this.originalSize = 22;
  this.speed = 1;
  this.keyCode = 65;
  }

  display(){
    push();
    fill(205, 230, 255);
    ellipse(this.x, this.y, this.size)
    fill(205, 230, 255, 130);
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
