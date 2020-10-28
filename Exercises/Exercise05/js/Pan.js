class Pan{
  constructor(w, h){
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.radius = 50;
    this.shift = 10;

  }

 // If LEFT_ARROW is pressed, Pot will shift to the left; same with RIGHT_ARROW

 keyPressed(){
   if (keyCode === 39) {
     moveRight();
  } else if (keyCode === 37) {
     moveLeft();
  }
 }
// Movements
 moveRight(){
   this.x = this.x + this.shift;
 }
 moveLeft(){
   this.x = this.x - this.shift;
 }
 //

 display() {
    // Grey Pot
    push();
    fill(170, 116, 87);
    quad(this.x, this.y, 191*this.x/5, this.y, 36*this.x + 180, 7*this.y, 11*this.x/4, 7*this.y);
    pop();

    // Pot Handle
    push();
    fill(136);
    rect(this.x, 2*this.y, this.width, this.height, this.radius);
    pop();
}
}

// push();
// fill(170, 116, 87);
// rect(width/2, height/2 + 10, 230, 12, 50);
// fill(136);
// quad(width/2, height/2, width/2 + 191, height/2, width/2 + 180, height/2 + 35, width/2 + 11, height/2 + 35);
// pop();
