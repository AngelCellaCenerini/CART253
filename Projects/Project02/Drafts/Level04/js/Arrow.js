class Arrow{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 3;
    this.height = 150;
    this.active = true;
  }

  display(){

    if(this.active){
      // Arrow
      // Body
      push();
      fill(255);
      rect(this.x, this.y, this.width, this.height);
      pop();

      // Tip
      push();
      stroke(255);
      strokeWeight(3);
      line(this.x - 5*this.width, this.y - this.height/3, this.x, this.y - this.height/2);
      line(this.x + 5*this.width, this.y - this.height/3, this.x, this.y - this.height/2);
      line(this.x - 5*this.width, this.y - this.height/3, this.x, this.y + this.height/6);
      line(this.x + 5*this.width, this.y - this.height/3, this.x, this.y + this.height/6);
      pop();

      // Tail
      push();
      stroke(255);
      strokeWeight(3);
      line(this.x - 5*this.width, this.y + 19*this.height/30, this.x, this.y + 7*this.height/15);
      line(this.x + 5*this.width, this.y + 19*this.height/30, this.x, this.y + 7*this.height/15);
      line(this.x - 5*this.width, this.y + 4*this.height/5, this.x, this.y + 19*this.height/30);
      line(this.x + 5*this.width, this.y + 4*this.height/5, this.x, this.y + 19*this.height/30);
      pop();
    }
  }
}
