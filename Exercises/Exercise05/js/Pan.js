class Pan{
  constructor(w, h){
    this.x = 0;
    this.y = height - 2*this.y;
    this.width = w;
    this.height = h;
    this.radius = 50;
    this.speedVx = 0;
    this.speedVy = 0;
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
