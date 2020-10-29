class Pan{
  constructor(w, h){
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
    this.hLenght = 300;   // Lenght of the Pan Handle
    this.hThickness = 18; // Thickness of the Pan Handle
    this.radius = 5;
    this.shift = 60;

  }

 // If LEFT_ARROW is pressed, Pot will shift to the left; same with RIGHT_ARROW
  keyPressed(){
    if ((keyCode === RIGHT_ARROW) && (state === `simulation`)) { 
      this.moveRight();
   } else if ((keyCode === LEFT_ARROW) && (state === `simulation`)) {
      this.moveLeft();
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
