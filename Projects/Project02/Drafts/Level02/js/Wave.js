class Wave{
  constructor(x, y){
   this.x = x;
   this.y = y;
   this.chaseX = x;
   this.chaseY = y;
   this.size = 50;
   this.originalSize = 50;
   this.growth = 30;
   this.maxSize = 2200;
   this.active = false;

  }


  mousePressed(){
      if(!this.active){
        this.active = true;
        this.x = mouseX;
        this.y = mouseY;
        this.chaseX = this.x;
        this.chaseY = this.y;
        return true;
      }
      else{
        return false;
      }
    }

  grow(){

    if(this.active){
      this.size += this.growth;
      // Disappear
      if(this.size > this.maxSize){
        this.active = false;
        this.size = this.originalSize;

      }
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
