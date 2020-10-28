class Pan{
  constructor(w, h){
    this.x = 0;
    // this.y = 500;
    // this.y = height - this.height/2;
    this.width = w;
    this.height = h;
    this.hLenght = 300;   // Lenght of the Pan Handle
    this.hThickness = 18; // Thickness of the Pan Handle
    this.radius = 5;
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
   // Pan Handle
   push();
   fill(155, 101, 72);
   rect(this.x - this.width/2, this.y, this.hLenght, this.hThickness, this.radius);
   pop();

    // Grey Pan
    push();
    fill(136);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}

// push();
// fill(170, 116, 87);
// rect(width/2, height/2 + 10, 230, 12, 50);
// fill(136);
// quad(width/2, height/2, width/2 + 191, height/2, width/2 + 180, height/2 + 35, width/2 + 11, height/2 + 35);
// pop();
