class PurpleBunny extends Bunny{
  constructor(x, y){
    super(x, y);
    this.size = 250;
    this.mouthWidth = 50;
    this.maxWidth = 180;
    this.r = 78;
    this.g = 75;
    this.b = 191;
    this.active = true;
    this.mobile = false;
  }

  devour(){
  if(this.active){
  displayMouth();
  }
  }

  // open(){
  //this.mouthWidth += this.maxWidth;
  // if(this.mouthWidth = this.maxWidth){
  //   this.maxWidth = 0;
  // }
  // }

  displayMouth(){
    // Mouth
    push();
    fill(0);
    ellipse(this.x + this.size/20, this.y, this.mouthWidth);
    pop();
  }
}
