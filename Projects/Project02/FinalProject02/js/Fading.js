class Fading{
  constructor(x, y, widthF, heightF){
    this.x = x;
    this.y = y;
    this.width = widthF;   // short for widthFading
    this.height = heightF;
    this.fading = -0.5;
    this.transparency = 255;
    this.faded = false;
  }

  fade(){
    this.transparency = this.transparency + this.fading;
    if(this.transparency >= 0){
      this.faded = true;
    }
  }

  display(){
    push();
    fill(0, 0, 0, this.transparency);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
