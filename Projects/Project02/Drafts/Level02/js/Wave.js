class Wave{
  constructor(x, y){
   this.x = x;
   this.y = y;
   this.size = 50;
   this.growth = 30;
   this.maxSize = 400;
   this.active = false;

  }

  appear(){
    if(mouseIsPressed){
      if(!this.active){
        this.active = true;
      }
    }
  }

  grow(){
    this.size += this.growth;
    // Constrain
    if(this.size > this.maxSize){
      this.active = false;
    }
  }


  display(){
    if(this.active){
      push();
      noFill();
      stroke(251, 207, 115);
      strokeWeight(3);
      ellipse(this.x, this.y, this.size/50);
      ellipse(this.x, this.y, this.size/10);
      ellipse(this.x, this.y, this.size/2);
      pop();
    }
  }
}
