class PinkLight extends Light {
  constructor(x, y, chime){
  super(x, y, chime);
  this.size = 45;
  this.originalSize = 45;
  this.speed = 1;
  this.keyCode = 68;
  }

  display(){
    push();
    fill(255, 212, 187);
    ellipse(this.x, this.y, this.size)
    fill(255, 212, 187, 130);
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
